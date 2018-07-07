# go-plugin-fs [![npm](https://img.shields.io/npm/v/go-plugin-fs.svg?style=flat-square)](https://www.npmjs.com/package/go-plugin-fs) [![Travis](https://img.shields.io/travis/gocli/go-plugin-fs.svg?style=flat-square)](https://travis-ci.org/gocli/go-plugin-fs) [![Coveralls](https://img.shields.io/coveralls/github/gocli/go-plugin-fs.svg?style=flat-square)](https://coveralls.io/github/gocli/go-plugin-fs) [![Known Vulnerabilities](https://snyk.io/test/github/gocli/go-plugin-fs/badge.svg?style=flat-square)](https://snyk.io/test/github/gocli/go-plugin-fs) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-green.svg?style=flat-square)](https://github.com/gocli/go-plugin-fs)

[Go](https://www.npmjs.com/package/go) plugin to work with file system.

## Table of Contents

- [Usage](#usage)
  - [Installation](#installation)
  - [Quick Start](#quick-start)
  - [API Reference](#api-reference)
    - [copy](#copy)
    - [move](#move)
    - [remove](#remove)
    - [writeFile](#writefile)
    - [readFile](#readfile)
    - [createDir](#createdir)
- [Examples](#examples)
  - [Basic usage](#basic-usage)
  - [Read, process and write file](#read-process-and-write-file)
- [License](#license)

## Usage

### Installation

```bash
$ npm install go go-plugin-fs
```

```js
const go = require('go')
go.use(require('go-plugin-fs'))

// or

import { FsPlugin } from 'go-plugin-fs'
go.use(FsPlugin)
```

### Quick Start

FS Plugin is based on [fs-extra](https://www.npmjs.com/package/fs-extra) and it basically just exports several of its methods.
A huge thanks to [@jprichardson](https://github.com/jprichardson) and [@RyanZim](https://github.com/RyanZim) for such a cool tool!
Original instance of `fs-extra` is stored in `go.fs` and available for your purposes.
To learn more about this library read the [docs](https://www.npmjs.com/package/fs-extra).

```js
const go = require('go')
go.use(require('go-plugin-fs'))

go.copy('./path/to/source/file', './path/to/target/file')
```

### API Reference

#### copy

```
go.copy( source, target [ , options, callback ]): Promise
go.copySync( source, target [ , options ])
```

Read about fs-extra [copy](https://github.com/jprichardson/node-fs-extra/blob/5.0.0/docs/copy.md) and [copySync](https://github.com/jprichardson/node-fs-extra/blob/5.0.0/docs/copy-sync.md).

#### move

```
go.move( source, target [ , options, callback ]): Promise
go.moveSync( source, target [ , options ])
```

Read about fs-extra [move](https://github.com/jprichardson/node-fs-extra/blob/5.0.0/docs/move.md) and [moveSync](https://github.com/jprichardson/node-fs-extra/blob/5.0.0/docs/move-sync.md).

#### remove

```
go.remove( path [ , callback ]): Promise
go.removeSync( path )
```

Read about fs-extra [remove](https://github.com/jprichardson/node-fs-extra/blob/5.0.0/docs/remove.md) and [removeSync](https://github.com/jprichardson/node-fs-extra/blob/5.0.0/docs/remove-sync.md).

#### writeFile

```
go.writeFile( path, data [ , options, callback ]): Promise
go.writeFileSync( path, data [ , options ])
```

Read about fs-extra [outputFile](https://github.com/jprichardson/node-fs-extra/blob/5.0.0/docs/outputFile.md) and [outputFileSync](https://github.com/jprichardson/node-fs-extra/blob/5.0.0/docs/outputFile-sync.md).

#### readFile

```
go.readFile( path [ , options, callback ]): Promise
go.readFileSync( path [ , options ])
```

Read about NodeJS [readFile](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback) and [readFileSync](https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options).

#### createDir

```
go.createDir( path, data [ , options, callback ]): Promise
go.createDirSync( path, data [ , options ])
```

Read about fs-extra [ensureDir](https://github.com/jprichardson/node-fs-extra/blob/5.0.0/docs/ensureDir.md) and [ensureDirSync](https://github.com/jprichardson/node-fs-extra/blob/5.0.0/docs/ensureDir-sync.md).

## Examples

### Basic usage

```js
const newComponentName = 'new-component'
go.copy('./templates/component.js', `./src/components/${newComponentName}.js`)
```

### Read, process and write file

```js
const contributorsPath = './CONTRIBUTORS.md'
const newContributor = 'Chuck Norris'

go.readFile(contributorsPath)
  .then((content) => `${content}\n - ${newContributor}`)
  .then((content) => go.writeFile(contributorsPath, content))
```

## License

MIT © [Stanislav Termosa](https://github.com/termosa)

