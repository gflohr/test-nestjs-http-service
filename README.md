# Testing the NestJS `HttpService`

## Description

This repository shows how to test the
[NestJS](https://github.com/nestjs/nest) `HttpService` with
[Jest](https://jestjs.io/).  It is a companion repository to the blog post
["Navigating the Testing Maze: Pitfalls in Testing NestJS Modules with the @nestjs/axios HttpService"](http://www.guido-flohr.net/testing-the-nestjs-http-service)
(not yet published).

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start Luxembourg
```

This lists all universities in Luxembourg.  Case is ignored.

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Licence

Copyright © 2024 Guido Flohr <guido.flohr@cantanea.com>, all rights reserved.

This library is free software. It comes without any warranty, to the extent
permitted by applicable law. You can redistribute it and/or modify it under
the terms of the Do What the Fuck You Want to Public License, Version 2, as
published by Sam Hocevar. See http://www.wtfpl.net/ for more details.
