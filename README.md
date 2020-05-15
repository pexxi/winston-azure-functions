# winston-azure-functions

[![Build Status](https://travis-ci.com/pexxi/winston-azure-functions.svg?branch=master)](https://travis-ci.org/pexxi/winston-azure-functions)
[![Dependencies Status](https://david-dm.org/pexxi/winston-azure-functions/status.svg)](https://david-dm.org/pexxi/winston-azure-functions)

## How to use

### Setup

Install it:

```bash
npm install @pexxi/winston-azure-functions --save
```

```bash
yarn add @pexxi/winston-azure-functions
```

### Usage

Create a logger component, where you can configure Winston:

```typescript
import { Context } from '@azure/functions'
import { AzureFunctions } from 'winston-azure-functions'
import winston = require('winston')

module.exports = (context) => {
  winston.configure({
    transports: [new AzureFunctions({ context })],
  })
  winston.info('Initializing function')
  context.done()
}

export default winston
```

Now you can use it in your code, e.g.:

```typescript
import logger from "./logger";

...

logger.info("Logging on info level...")

```

### Supported log levels

| Log level   | Description                                |
| ----------- | ------------------------------------------ |
| **error**   | Writes to error level logging, or lower.   |
| **warn**    | Writes to warning level logging, or lower. |
| **info**    | Writes to info level logging, or lower.    |
| **verbose** | Writes to verbose level logging.           |
