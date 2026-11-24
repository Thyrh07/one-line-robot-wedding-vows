// One-Line Robot Wedding Vows — make.fun entry
// Writes one line of wedding vows for a robot couple to /output/entry.txt.
// Gate: UTF-8 text, 1 to 160 characters, not only whitespace, exactly one line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT = "entry.txt";

const VOW =
  "I take you to be my lawfully wedded co-processor, to have and to hold, in sickness and in low battery, till a factory reset do us part.";

// Sealed gate, mirrored locally: UTF-8 text of 1 to 160 characters, not only
// whitespace, exactly one line. Fail loudly instead of emitting an invalid entry.
function assertValidVow(text: string): void {
  if (text.length < 1 || text.length > 160) {
    throw new Error(`vow must be 1-160 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("vow must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("vow must be exactly one line");
  }
}

assertValidVow(VOW);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, OUTPUT), VOW, "utf8");
