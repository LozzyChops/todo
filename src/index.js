import './styles.css'
import { model, repository } from './model'
import { view } from './view'
import { controller } from './controller'

window.onload = () => {
  let lists = controller.checkForLocalStorage()
  controller.setSelectedList(lists[0])
  view.init(lists)
}

//DEBUGGING
window.model = model
window.view = view
window.controller = controller
window.repository = repository
