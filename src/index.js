import { model } from './model'
import { view } from './view'

window.onload = function () {
  //load further HTML based on the model state
  view.init()
}

window.model = model