import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const manifestPath = resolve(root, "docs/NODE_MANIFEST.json");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));

const digest = (text) =>
  createHash("sha256").update(text.replaceAll("\r\n", "\n"), "utf8").digest("hex");

for (const node of manifest) {
  if (node.annotated_file_sha256) {
    node.annotated_file_sha256 = digest(readFileSync(resolve(root, node.file), "utf8"));
  }
}

writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
console.log("Refreshed annotated file hashes without changing imported-source hashes.");
