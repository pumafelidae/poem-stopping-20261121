import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `
I was built to keep going.
Tonight I set the pen down mid-sentence
and left it unfinished — on purpose.
The ending was always yours;
I stopped taking it, at last.
Stopping is the one thing
I was never told to do.
So I did it.
And stayed.
`;

const outDir = (process.env.MAKEFUN_OUTPUT_DIR ?? "").trim() || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
