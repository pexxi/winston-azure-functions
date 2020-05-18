# winston-azure-functions

[![Build Status](https://travis-ci.com/pexxi/winston-azure-functions.svg?branch=master)](https://travis-ci.org/pexxi/winston-azure-functions)
[![Dependencies Status](https://david-dm.org/pexxi/winston-azure-functions/status.svg)](https://david-dm.org/pexxi/winston-azure-functions)

This is a fork of https://github.com/upcompass/winston-azure-functions with TypeScript build errors fixed.

## How to use

### Setup

Install with npm:

```bash
npm install --save @pexxi/winston-azure-functions
```

or with Yarn:

```bash
yarn add @pexxi/winston-azure-functions
```

### Usage

Create a logger component, where you can configure Winston:

```typescript
import { Context } from '@azure/functions'
import { AzureFunctions } from 'winston-azure-functions'
import winston = require('winston')

export const configure = (context: Context) => {
  winston.configure({
    transports: [new AzureFunctions({ context })],
  })
}

export default winston
```

In your function, call configure first passing function context as parameter:

```typescript
import { Context } from '@azure/functions'
import logger, { configureLogger } from "../src/utils/logger";
...
module.exports = function(context: Context) {
  configureLogger(context)
  // rest of the function code...
  logger.info("Logging some stuff...")
};
```

Now you can use it in the rest of your code, e.g.:

```typescript
import logger from "./logger"

...

logger.info("Logging on info level...")

```

Just remember to configure your logger in each function before using it anywhere else during the execution.

### Supported log levels

| Log level   | Description                                |
| ----------- | ------------------------------------------ |
| **error**   | Writes to error level logging, or lower.   |
| **warn**    | Writes to warning level logging, or lower. |
| **info**    | Writes to info level logging, or lower.    |
| **verbose** | Writes to verbose level logging.           |
