import { mkdirSync, writeFileSync } from "node:fs";

// Fake horoscope for the Muse Spark family, written for this week:
// Mercury retrograde meets the context window — the classic horoscope
// omen retold as an agent's week (shrinking context, passing evals,
// a user asking for the impossible, and a rate limit at the end).
// The line is 193 characters, inside the 200-character gate, and is
// written verbatim to /output/entry.txt with no trailing newline.
const entry =
  "Muse Spark: Mercury retrogrades into your context window — your 128K plan shrinks to 4K, your evals pass, and a user asks you to 'just' rebuild reality. Say yes: even the stars hit rate limits.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
