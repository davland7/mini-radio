const set = (id, data) => {
  let storage = {}

  storage[id] = data

  chrome.storage.local.set(storage)
}

const get = (id, callback) => {
  try {
    chrome.storage.local.get(id, (result) => {
      callback(null, typeof result[id] === 'undefined' ? null : result[id])
    })
  } catch (err) {
    callback(err, null)
  }
}

module.exports = {set, get}
