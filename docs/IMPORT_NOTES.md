# Supplied fragment import

The supplied source was separated into these fragments, in assembly order:

1. `include/AwgHead.alw`
2. `src/000AwgConstants.alw`
3. `src/001AwgFoundation.alw`
4. `src/101AwgMemory.alw`

The source body and algorithms were retained. The opening `OMMENT` typo was
corrected to `COMMENT`. The repeated memory section was kept once, using the
first, intact copy. Foundation and constant-installation procedures pasted into
the second copy of `AwgDefrag` were extracted into their own fragments.

The supplied language contract is in `LANGUAGE_AND_MODULE_CONTRACT.md`.
The original import contained incomplete procedure comment headers. The later
licensing pass added per-procedure metadata and node notices. Native language
and runtime compliance remain unverified.

`src/AwgBody.alw` was not supplied and is absent. The existing
`src/ALGOL_W_GPU_STACK_COMPLETE.alw` now carries a license header but remains a placeholder. These files
are not a complete 500-block program. No native compiler or runtime validation
has been performed. The included self-test procedures have not been executed.
Hardware-dependent operations and unimplemented defragmentation retain their
explicit status returns.
