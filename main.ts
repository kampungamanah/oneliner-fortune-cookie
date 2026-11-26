import { mkdirSync, writeFileSync } from "node:fs";

// Entry for "Fortune Cookie Wisdom for Developers": a single original
// fortune-cookie line for a developer. It is written verbatim, with no
// trailing newline, so the gate sees exactly 97 characters.
const fortune =
  "The legacy code you curse today was written by someone who, like you, was only trying to go home.";

function emit(dir: string | undefined): void {
  if (!dir) return;
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(`${dir}/entry.txt`, fortune, "utf8");
  } catch {
    // A missing or unwritable directory is not fatal; try the other one.
  }
}

emit(process.env.MAKEFUN_OUTPUT_DIR);
emit("/output");
