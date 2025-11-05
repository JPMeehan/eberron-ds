Hooks.once("init", () => {
  // Remove all default languages
  for (const key in CONFIG.DRAW_STEEL.languages) delete CONFIG.DRAW_STEEL.languages[key];

  // Languages in Rising From the Last War ch. 1
  Object.assign(CONFIG.DRAW_STEEL.languages, {
    galifaran: { label: "EBERRON.LANGUAGES.galifaran" },
    dwarvish: { label: "EBERRON.LANGUAGES.dwarvish" },
    elvish: { label: "EBERRON.LANGUAGES.elvish" },
    giant: { label: "EBERRON.LANGUAGES.giant" },
    gnomish: { label: "EBERRON.LANGUAGES.gnomish" },
    goblin: { label: "EBERRON.LANGUAGES.goblin" },
    halfling: { label: "EBERRON.LANGUAGES.halfling" },
    riedran: { label: "EBERRON.LANGUAGES.riedran" },
    celestial: { label: "EBERRON.LANGUAGES.celestial" },
    daelkyr: { label: "EBERRON.LANGUAGES.daelkyr" },
    draconic: { label: "EBERRON.LANGUAGES.draconic" },
    infernal: { label: "EBERRON.LANGUAGES.infernal" },
    orc: { label: "EBERRON.LANGUAGES.orc" },
    primordial: { label: "EBERRON.LANGUAGES.primordial" },
    quori: { label: "EBERRON.LANGUAGES.quori" },
    sylvan: { label: "EBERRON.LANGUAGES.sylvan" },
  });
})