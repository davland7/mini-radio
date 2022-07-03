const API = chrome || browser

const setStorage = (id, data) => {
  let storage = {}

  storage[id] = data

  API.storage.local.set(storage)
}

const getStorage = (id, callback) => {
  try {
    API.storage.local.get(id, (result) => {
      callback(null, typeof result[id] === 'undefined' ? null : result[id])
    })
  } catch (err) {
    callback(err, null)
  }
}

const getMessage = (id) => {
  return API.i18n.getMessage(id)
}

const getManifest = () => {
  return API.runtime.getManifest()
}

export { setStorage, getStorage, getMessage, getManifest }
