/*the responsibility of the controller is to glue the code together,
to make sure events that result from the user's actions affect the model to update the state*/
import { model } from "./model"
import { view } from "./view"

const controller = {
  init: function (firstList) {
    this.setOpenList(firstList)
    document.getElementById('add-list').addEventListener('click', this.addList)
    document.getElementById('add-item').addEventListener('click', this.addItem)
  },
  addList: function () {
    const List = model.makeList()
    let list = new List('NEW LIST FROM BUTTON')

    model.addList(list)

    view.displayLists(model.getLists())
  },
  addItem: function () {
    let openList = controller.getOpenList()

    const Item = model.makeItem()
    let item = new Item('NEW ITEM FROM BUTTON')

    openList.addItem(item)

    view.displayItems(openList)
  },
  _openList: {},
  getOpenList: function () {
    return this._openList
  },
  setOpenList: function (list) {
    this._openList = list

    return this._openList
  },
}

export { controller }
