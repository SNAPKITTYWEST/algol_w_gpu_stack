import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { strict as assert } from "node:assert";

const root = resolve(import.meta.dirname, "..");
const memory = readFileSync(resolve(root, "src/101AwgMemory.alw"), "utf8");
const readme = readFileSync(resolve(root, "README.md"), "utf8");

const required = [
  "(Off > Cap) OR (Len > Cap - Off)",
  "AwgSpaceCap(Space) <= 0",
  "AwgSizeOfKind(Kind) <= 0",
  "ELSE IF Len = 0 THEN Status := StOk",
  "(SrcSpace = DstSpace) AND (SrcOff = DstOff)",
  "(SrcPitch < Width)",
  "(DstPitch < Width)",
  "(Width = 0) OR (Height = 0)",
  "(Width = 0) OR (Height = 0) OR (Depth = 0)",
];

for (const invariant of required) {
  assert.ok(memory.includes(invariant), `missing hardening invariant: ${invariant}`);
}

assert.ok(
  memory.includes("AwgSetStatus(StBounds, 106, R)"),
  "register bounds errors must update global status",
);
assert.ok(
  readme.includes("docs/assets/algol-w-retro.svg"),
  "README must render the retro project banner",
);
assert.ok(
  readme.includes("source preview"),
  "release status must preserve the incomplete-runtime boundary",
);

console.log(`PASS: ${required.length + 3} source and documentation invariants`);
