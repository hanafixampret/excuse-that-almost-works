import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "Sorry, the fridge people gave me an 8am to 6pm delivery window and they won't leave it outside";

// Gate: one line, at most 20 words, 1-140 characters, not only whitespace.
const words = EXCUSE.trim().split(/\s+/);
if (EXCUSE.length < 1 || EXCUSE.length > 140 || words.length > 20) {
  throw new Error(`entry violates the gate: ${words.length} words, ${EXCUSE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
