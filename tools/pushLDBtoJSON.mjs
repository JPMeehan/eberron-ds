import { extractPack } from "@foundryvtt/foundryvtt-cli";
import { promises as fs } from "fs";

const SYSTEM_ID = process.cwd();
const yaml = false;
const expandAdventures = false;
const folders = true;

const packs = await fs.readdir("./packs");
for (const pack of packs) {
  if (pack.startsWith(".")) continue;
  console.log("Unpacking " + pack);
  await extractPack(
    `${SYSTEM_ID}/packs/${pack}`,
    `${SYSTEM_ID}/src/packs/${pack}`,
    {
      yaml,
      transformEntry,
      expandAdventures,
      folders,
      clean: true,
      omitVolatile: true,
    },
  );
}

/**
 * Remove text content from wiki journal.
 * @param {object} entry The entry data.
 * @returns {Promise<false|void>}  Return boolean false to indicate that this entry should be discarded.
 */
async function transformEntry(entry) {
  // Reducing churn
  Object.assign(entry._stats, {
    modifiedTime: null,
    lastModifiedBy: null,
  });
  // Remove module flags
  for (const key of Object.keys(entry.flags)) if (!["core", "draw-steel", "eberron-ds"].includes(key)) delete entry.flags[key];

  // Fix ownership (folders don't have ownership)
  if (entry.ownership) entry.ownership = { default: 0 };

  // Update if we ever start including other document types, e.g. Adventures
  for (const embeddedCollection of ["items", "effects", "pages"]) {
    if (entry[embeddedCollection]) {
      for (const e of entry[embeddedCollection]) {
        Object.assign(e._stats, { modifiedTime: null, lastModifiedBy: null });
        if (e["effects"]) for (const grandchild of e["effects"]) Object.assign(grandchild._stats, { lastModifiedBy: null });
      }
    }
  }
}
