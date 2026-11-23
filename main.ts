import { mkdirSync, writeFileSync } from "node:fs";

// One original funny line about everyday life, with the twist landing
// on the very last word.
const LINE =
  "I asked my smart speaker for something relaxing, so it read my bank balance out loud in a whisper.";

// The gate only accepts 1-200 characters: fail loudly instead of
// submitting an over-long line.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
