# go-plugin-fs

[Go](https://www.npmjs.com/package/go) plugin to work with file system

## Usage

```bash
$ npm install go go-plugin-fs
```

```js
const go = require('go')
go.use(require('go-plugin-fs'))
```

## API

#### Copy files and directories

```js
/* promise */ go.copy(
  /* string */ sourcePath,
  /* string */ destinationPath,
  /* optional, object */ options,
  /* optional, function */ callback
)

// or

go.copySync(
  /* string */ sourcePath,
  /* string */ destinationPath,
  /* optional, object */ options
)
```

Read more details at [fs-extra#copy](https://github.com/jprichardson/node-fs-extra/blob/HEAD/docs/copy.md)

#### Move files and directories

```js
/* promise */ go.move(
  /* string */ sourcePath,
  /* string */ destinationPath,
  /* optional, object */ options,
  /* optional, function */ callback
)

// or

go.moveSync(
  /* string */ sourcePath,
  /* string */ destinationPath,
  /* optional, object */ options
)
```

Read more details at [fs-extra#move](https://github.com/jprichardson/node-fs-extra/blob/HEAD/docs/move.md)

#### Remove files and directories

```js
/* promise */ go.remove(
  /* string */ path,
  /* optional, function */ callback
)

// or

go.removeSync(
  /* string */ path
)
```

Read more details at [fs-extra#remove](https://github.com/jprichardson/node-fs-extra/blob/HEAD/docs/remove.md)

#### Write file

```js
/* promise */ go.writeFile(
  /* string */ destinationPath,
  /* string|buffer */ content,
  /* optional, object|string */ options,
  /* optional, function */ callback
)

// or

go.writeFileSync(
  /* string */ destinationPath,
  /* string|buffer */ content,
  /* optional, object|string */ options
)
```

Read more details at [fs-extra#outputFile](https://github.com/jprichardson/node-fs-extra/blob/HEAD/docs/outputFile.md)

#### Create directory

```js
/* promise */ go.createDir(
  /* string */ destinationPath,
  /* optional, function */ callback
)

// or

go.createDirSync(
  /* string */ destinationPath
)
```

Read more details at [fs-extra#ensureDir](https://github.com/jprichardson/node-fs-extra/blob/HEAD/docs/ensureDir.md)

#### Read file

```js
/* promise<string: content> */ go.readFile(
  /* string */ sourcePath,
  /* optional, object|string */ options,
  /* optional, function */ callback
)

// or

/* string: content */ go.readFileSync(
  /* string */ sourcePath,
  /* optional, object|string */ options
)
```

Read more details at [fs-extra#ensureDir](https://github.com/jprichardson/node-fs-extra/blob/HEAD/docs/ensureDir.md)

#### More

This plugin is based on [fs-extra](https://www.npmjs.com/package/fs-extra) created by [@jprichardson](https://github.com/jprichardson) and [@RyanZim](https://github.com/RyanZim). A huge thanks to these guys for their work!
Original instance of `fs-extra` is stored in `go.fs` and available for your purposes. To learn more about this library read the [docs](https://www.npmjs.com/package/fs-extra).

## Examples

### Copying boilerplate files

#### create-component.js

```js
var go = require('go')
go.use(require('go-plugin-fs'))

function createComponent (componentName) {
  var fileName = componentName
    .toLowerCase().replace(/[^a-z\d]+/g, '-').replace(/(^-|-$)/g, '')

  return go.copy('boilerplates/component-file.ext', 'app/components/' + fileName + '.ext')
}

module.exports = createComponent
```

## License

MIT © [Stanislav Termosa](https://github.com/termosa)

