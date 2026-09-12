# ALGOL W GPU Stack — Language and Module Contract

All computational source is ALGOL W. Fragments are concatenated in numeric order
after `include/AwgHead.alw` and closed by `src/AwgBody.alw`.

## Syntax rules

- Identifiers: letters and digits only. No underscores. Prefix `Awg`.
- Assignment `:=`. Equality `=`. Inequality `#`.
- Integer division `DIV`. Remainder `REM`.
- Logical `TRUE` `FALSE` `AND` `OR` `NOT`.
- Comments `COMMENT text;` — do not nest comments.
- Procedures: `PROCEDURE Name(...); BEGIN ... END;`
- Functions: `INTEGER PROCEDURE Name(...); BEGIN ... Name := value END;`
- Parameter modes: `VALUE` (in), `RESULT` (out), `VALUE RESULT` (in-out).
- Arrays already declared in `AwgHead.alw`. Do not redeclare them.
- Record classes already declared. Access fields as `Ref.Field`.
- `CASE` is 1-based. Prefer `IF` / `ELSE IF` for opcode dispatch.
- No `RETURN`. Functions assign to the function name.
- Do not emit a top-level `BEGIN` or `END.` — those belong to Head/Body.
- Do not use Python, C, CUDA, or pseudocode as the implementation.

## Globals (already declared)

Status: `StOk` `StErr` `StInvalid` `StOom` `StBounds` `StAlign` `StUnimpl`
`StHwDep` `StDim` `StOverflow` `StDivZero` `StDomain` `StAlias` `StLifetime`
`StBackend` `StNotInit` `StConflict` `StValidate` `StTimeout` `StMask`
`StNotReady` `StBusy` `StIo` `StFormat` `StVersion` `StNullRef` `StFull`
`StEmpty` `StCycle` `StPred` `StArity` `StOpcode` `StOperand` `StKernel`
`StLaunch` `StFence` `StQueue` `StGraph` `StPlan`

Pools: `AwgHostI` `AwgHostR` `AwgDevI` `AwgDevR` `AwgSharedR` `AwgLocalR`
`AwgConstR` `AwgIReg` `AwgFReg` `AwgPReg`

IR: `AwgOpCode` `AwgOpDst` `AwgOpSrc0` `AwgOpSrc1` `AwgOpSrc2` `AwgOpImm`
`AwgOpPred` `AwgOpSpace` `AwgOpFlags` `AwgPc` `AwgOpCount` `AwgHaltFlag`

Scratch: `AwgAcc` `AwgTileA` `AwgTileB` `AwgRedTmp` `AwgScanTmp` `AwgFuseTmp`

Call `AwgSetStatus(Code, BlockNo, Info)` to record errors.
Call `AwgBumpCycle` to advance the software cycle counter.
Call `AwgBumpTraffic(N)` to count memory words moved.

## Hardware honesty

If a procedure cannot perform real GPU work, it must either:

1. implement the semantics on the ALGOL W reference pools, or
2. set `Status := StHwDep` and leave device-side state unchanged.

Never claim GPU execution because a software test passed.

## Block header required on every procedure

```
COMMENT BLOCK nnn;
COMMENT Component: Name;
COMMENT Purpose: ...;
COMMENT Inputs: ...;
COMMENT Outputs: ...;
COMMENT Dependencies: ...;
COMMENT Hardware: none | required | interface-only;
```
