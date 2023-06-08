/*the responsibility of the view is to update the display when the state in the model changes*/

import { model } from './model'
import { controller } from './controller'

const view = {
  init: function () {
    let currentLists = model.getLists()
    let firstListInDisplay = currentLists[0]

    controller.init(firstListInDisplay)

    this.displayLists(currentLists)
  },
  displayLists: function (lists) {
    let listsToDisplay = lists
    const displayContainer = document.getElementById('lists-ul')

    //empty the displayContainer of previous lists
    displayContainer.replaceChildren()

    for (let list in listsToDisplay) {
      this.makeDisplayListName(listsToDisplay[list], displayContainer)
    }

    this.displayItems()
  },
  displayItems: function () {
    let listToOpen = controller.getOpenList()
    let itemsToDisplay = listToOpen.items
    const displayContainer = document.getElementById('items-ul')

    //empty the displayContainer of previous items
    displayContainer.replaceChildren()

    for (let item in itemsToDisplay) {
      view.makeDisplayItemName(itemsToDisplay[item], displayContainer)
    }
  },
  makeDisplayListName: function (list, display) {
    const li = document.createElement('li')
    li.list = list
    li.textContent = list.name
    li.classList.add('list-name')
    li.addEventListener('click', function (e) {
      controller.setOpenList(e.target.list)
    })
    li.addEventListener('click', this.displayItems)
    display.appendChild(li)
  },
  makeDisplayItemName: function (item, display) {
    const li = document.createElement('li')
    li.textContent = item.name
    li.classList.add('list-name')
    display.appendChild(li)
  },
}

export { view }
