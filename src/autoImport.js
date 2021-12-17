const VALID_FILE_NAME = /\.\/components\/(Base[A-Z]\w+\.(vue|js))$/

const components = import.meta.globEager("./components/*.vue")

export function autoComponentsRegister(register) {
  Object.entries(components).forEach(([path, definition]) => {
    const [, fileName] = VALID_FILE_NAME.exec(path) || []

    if (!fileName) return

    const componentName = fileName.replace(/\.\w+$/, "")
    register(componentName, definition.default)
  })
}
