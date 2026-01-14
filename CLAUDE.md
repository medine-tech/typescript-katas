# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Turborepo-based monorepo for TypeScript kata exercises. It uses npm workspaces with shared configuration packages.

## Commands

### Root-level commands
```bash
npm run build    # Build all apps and packages
npm run dev      # Start dev servers for all apps/packages
npm run test     # Run tests across all workspaces
npm run lint     # Lint all TypeScript/TSX files
npm run format   # Format code with Prettier
```

### Workspace-specific commands
```bash
npm run test -w katas    # Run tests only in katas app
npm run lint -w katas    # Lint only katas app
npm run lint -w ui       # Lint only ui package
```

### Running a single test file
```bash
npx jest path/to/file.test.ts --config apps/katas/jest.config.js
```

## Architecture

```
typescript-katas/
├── apps/
│   └── katas/           # Main kata exercises app (Jest + TypeScript)
└── packages/
    ├── tsconfig/        # Shared TypeScript configs (base, nextjs, react-library)
    ├── ui/              # Shared React component library
    └── eslint-config-custom/  # Shared ESLint configuration
```

### How shared configs work
- `packages/tsconfig/` exports three configs: `base.json`, `nextjs.json`, `react-library.json`
- Apps extend these via `"extends": "tsconfig/nextjs.json"` in their tsconfig.json
- ESLint config is shared via `eslint-config-custom` package, extended with `"extends": ["custom"]`

## Code Style

- No semicolons (configured in `.prettierrc.json`)
- ESLint extends `turbo` and `prettier` configs
- TypeScript strict mode enabled
