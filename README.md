# CodeTracker


### Status

[![npm version](https://badge.fury.io/js/code-tracker.svg)](https://badge.fury.io/js/code-tracker)
[![Build Status](https://travis-ci.com/CodeTracker-17/code-tracker.svg?branch=main)](https://travis-ci.com/CodeTracker-17/code-tracker)
[![codecov](https://codecov.io/gh/CodeTracker-17/code-tracker/branch/main/graph/badge.svg?token=ZQZQZQZQZQ)](https://codecov.io/gh/CodeTracker-17/code-tracker)
[![Netlify Status](https://api.netlify.com/api/v1/badges/0260fdd0-f667-464d-8e3b-98d6c46cfbf8/deploy-status)](https://app.netlify.com/sites/code-tracker-docs/deploys)

CodeTracker is a TypeScript library that helps developers track, manage, and report lines of code across different files in a project. It offers utilities to track individual files, update file statistics, and retrieve code metrics.

## Features

- 🧾 **Track Individual Files**: Easily add and manage files and their lines of code.
- 🔄 **Update & Remove Files**: Convenient methods to update or remove tracked files.
- 📊 **Retrieve Code Metrics**: Get total lines of code, file details, average lines per file, etc.
- ✨ **Utility Functions**: Batch operations, filtering, reporting, and more.
- 💪 **Type Safety with TypeScript**: Written in TypeScript for enhanced development experience.

## Installation

```bash
npm install code-tracker
```

## Usage

Here's a simple example of how to use CodeTracker:

```typescript
import codeTracker, { trackCodeUsage, getCodeMetrics } from 'code-tracker';

// Track a file
trackCodeUsage('example.ts', 200);

// Get code metrics
const metrics = getCodeMetrics();
console.log(metrics.totalLinesOfCode); // Outputs: 200
```

See the [API Documentation]() for more detailed information on each method. **Coming soon!**

## Contributing

We welcome contributions! Please see our [CONTRIBUTING.md]() file for details on how to get involved.

## Versioning & Backward Compatibility

CodeTracker follows Semantic Versioning (SemVer) and strives to maintain backward compatibility. See our [versioning policy]() for more information.

## Support & Community

Need help or have questions? Join our [community forum]() or open an issue on [GitHub]().

## License

CodeTracker is licensed under the MIT License - see the [LICENSE.md]() file for details.
```
