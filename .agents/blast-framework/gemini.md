# Project Constitution - B.L.A.S.T. Framework

## Data Schemas
*(To be defined after Discovery Phase)*

### Input Payload Schema
```json
{}
```

### Output Payload Schema
```json
{}
```

## Behavioral Rules
- Prioritize reliability over speed.
- Deterministic business logic, no LLM hallucinations for data execution.
- SOPs must be updated in `architecture/` before code changes.

## Architectural Invariants
- **Layer 1 (Architecture)**: Technical SOPs in `architecture/*.md`.
- **Layer 2 (Navigation)**: Routing & decision making.
- **Layer 3 (Tools)**: Deterministic Python scripts in `tools/`. `.env` for secrets, `.tmp/` for intermediate data.
