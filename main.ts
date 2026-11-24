import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "LGTM. The code works, the tests pass, and none of it will matter when the sun swallows us all. Ship it.";

// Self-check: the bounty allows a single line of at most 140 characters.
if (entry.length > 140 || entry.includes("\n")) {
  console.error(
    `entry invalid: ${entry.length} characters, newline=${entry.includes("\n")}`,
  );
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`entry: ${entry.length} characters`);
