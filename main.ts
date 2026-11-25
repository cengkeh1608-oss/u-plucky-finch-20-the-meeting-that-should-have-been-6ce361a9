// The Meeting That Should Have Been an Email
// Writes the winning one-liner (draft D20, 25/25) to /output/entry.txt.
// Gate: UTF-8, 1 line, 1-200 chars. Winner text is 82 chars.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Winner (draft D20, 25/25 PERFECT): three-beat parallel structure —
// two sentences / two hours / the summary was the email. The turn lands
// on the last word: the meeting produced the very email it should have been.
// Tie-break vs runners-up D02/D04/D05 (all 24/25): D20 never opens with the
// crowd's cliché sentence, and the summary-email recognition is universal.
const ENTRY =
  "The email was two sentences. The meeting was two hours. The summary was the email.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
