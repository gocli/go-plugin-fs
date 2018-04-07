const plugin = require('../lib/plugin')

describe('Plugin', () => {
  it('expose Go plugin API', () => {
    expect(plugin).toHaveProperty('FsPlugin')
    expect(plugin).toHaveProperty('install')
    expect(plugin.FsPlugin).toBe(plugin.install)
  })

  it('extends given object', () => {
    const go = {}
    const result = plugin.install(go)

    expect(go).toBe(result)

    expect(go).toHaveProperty('fs')
    expect(go).toHaveProperty('copy')
    expect(go).toHaveProperty('copySync')
    expect(go).toHaveProperty('move')
    expect(go).toHaveProperty('moveSync')
    expect(go).toHaveProperty('remove')
    expect(go).toHaveProperty('removeSync')
    expect(go).toHaveProperty('writeFile')
    expect(go).toHaveProperty('writeFileSync')
    expect(go).toHaveProperty('readFile')
    expect(go).toHaveProperty('readFileSync')
    expect(go).toHaveProperty('createDir')
    expect(go).toHaveProperty('createDirSync')

    expect(typeof go.copy).toBe('function')
    expect(typeof go.copySync).toBe('function')
    expect(typeof go.move).toBe('function')
    expect(typeof go.moveSync).toBe('function')
    expect(typeof go.remove).toBe('function')
    expect(typeof go.removeSync).toBe('function')
    expect(typeof go.writeFile).toBe('function')
    expect(typeof go.writeFileSync).toBe('function')
    expect(typeof go.readFile).toBe('function')
    expect(typeof go.readFileSync).toBe('function')
    expect(typeof go.createDir).toBe('function')
    expect(typeof go.createDirSync).toBe('function')
  })
})
