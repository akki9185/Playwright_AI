---
name: blast
description: B.L.A.S.T. (Blueprint, Link, Architect, Stylize, Trigger) protocol and A.N.T. 3-layer architecture execution guide for deterministic, self-healing automation.
---

# B.L.A.S.T. Framework & A.N.T. Architecture

Use this skill when executing deterministic automation tasks using B.L.A.S.T.

## Protocol Checklist
1. **Memory Files**: Ensure `task_plan.md`, `findings.md`, `progress.md`, `gemini.md` exist in `.agents/blast-framework/`.
2. **Phase 1 (Blueprint)**: Answer 5 Discovery Questions & define Data Schemas in `gemini.md` before writing tools.
3. **Phase 2 (Link)**: Test credentials and API connections with minimal verification scripts in `tools/`.
4. **Phase 3 (Architect)**: 
   - Layer 1: SOPs in `architecture/`
   - Layer 2: Navigation / Decision routing
   - Layer 3: Atomic Python scripts in `tools/`
5. **Phase 4 (Stylize)**: Format payloads & build clean UI/UX if needed.
