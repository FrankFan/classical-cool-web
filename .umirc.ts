export default {
  npmClient: 'yarn',
  hash: true,

  // fix ERROR: Big integer literals are not available in the configured target environment ("chrome80", "es2015")
  jsMinifier: 'terser',
}
