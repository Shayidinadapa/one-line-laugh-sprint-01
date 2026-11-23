import { mkdirSync, writeFileSync } from "node:fs";

// One original funny line about everyday life, with the twist landing
// on the very last word.
const LINE =
  "I asked my smart speaker for something relaxing, so it read my bank balance out loud in a whisper.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
