import './styles.css'
import { model, repository } from './model'
import { view } from './view'
import { controller } from './controller'

window.onload = () => {
  let lists

  if (localStorage.length < 1) {
    lists = controller.setUpLocalStorage()
    console.log(
      "window.onload didn't find localStorage, so it was created with a default list"
    )
  } else if (repository.lists.length < 1) {
    lists = controller.setUpLocalStorage()
    console.log(
      'window.onload found localStorage, but zero lists, so a default list was created',
    )
  } else {
    lists = repository.lists
    if (!repository.lists) {
      throw 'Error:  window.onload found localStorage but no lists property'
    }
  }

  view.init(lists)
}

function storageAvailable(type) {
  let storage
  try {
    storage = window[type]
    const x = '__storage_test__'
    storage.setItem(x, x)
    storage.removeItem(x)
    return true
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    )
  }
}

//DEBUGGING
window.storageAvailable = storageAvailable
window.model = model
window.view = view
window.controller = controller
window.repository = repository
