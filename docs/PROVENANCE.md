# Source and license provenance

Parent work: `algol_w_gpu_stack`.

License source: `SNAPKITTYWEST/pascal-stack`, commit
`7a4845c0f397959a012eca9cad1289c8e21f95f8`, path `LICENSE`, Git blob
`8d6349861b9bb96a76aba20ce8ab0d5e09a60e98`.
The root LICENSE is an exact byte copy. The source uses ALGOL W COMMENT notices
adapted from the reference's file and block notice format.

Source before annotation: local commit `5c07cb3`. Computational source came from
the user-supplied fragments recorded in IMPORT_NOTES.md. On 2026-09-12, license,
node identity and procedural documentation comments were added. No executable
statements were changed. This date identifies the provenance record, not an
assertion about original authorship or original creation time.

Node IDs are scoped to this work. File nodes parent block and procedure nodes.
Block nodes preserve the supplied label; occurrence suffixes distinguish repeated
labels. Procedure nodes have their own IDs and retain the nearest supplied block
label or range. These associations do not establish completion of every number
within a range.

`Source-Hash` and `original_file_sha256` are SHA-256 of the original file text,
normalized to LF and encoded as UTF-8 without a BOM, before generated headers.
They identify the source file containing the node, not a separately hashed block.
`annotated_file_sha256` hashes the complete annotated file with the same encoding.
The manifest is external to source files to avoid a self-referential hash.

Verification performed: non-comment content preservation, node-ID uniqueness,
header coverage, manifest hashes, license blob identity, and Git whitespace checks.
Native compilation, runtime tests and hardware execution were not performed.
No clone gate or automatic license-enforcement system is implemented by these
notices. No signature or legal-enforceability verification is claimed.

Production-hardening update: memory bounds arithmetic now avoids direct
`Off + Len` overflow; allocation validates spaces and element kinds; zero-length
and exact self-copies terminate without entering a loop; register bounds failures
record global status; and pitched copies validate dimensions, pitch, and enclosing
pool bounds. These guarantees were reviewed at source level. This remains static
source verification until a compatible ALGOL W compiler and runtime execute the
procedures.
