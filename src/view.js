/*the responsibility of the view is to update the display when the state in the model changes*/

import { model } from './model'
import { controller } from './controller'

const view = {
  init(lists) {
    let selectedList = lists[0]
    let itemsContainer = document.getElementById('items-ul')
    let listsContainer = document.getElementById('lists-ul')
    let itemsHeader = document.getElementById('items-header')
    let addListButton = document.getElementById('add-list')

    addListButton.addEventListener('click', function () {
      let inputName = prompt('Enter list name')

      let newList = model.makeList(inputName)
      lists.push(newList)
      selectedList = newList
      model.updateRepository(lists)
      view.updateListsDisplay(
        lists,
        selectedList,
        listsContainer,
        itemsHeader,
        itemsContainer,
      )
    })
    this.updateListsDisplay(
      lists,
      selectedList,
      listsContainer,
      itemsHeader,
      itemsContainer,
    )
  },
  updateListsDisplay(
    lists,
    listToOpen,
    listsContainer,
    itemsHeader,
    itemsContainer,
  ) {
    let selectedList

    this.emptyDisplay(listsContainer)

    if (!listToOpen) {
      throw 'Error: updateListsDisplay did not receive a selectedList'
    }

    if (lists.length < 1) {
      this.displayNoLists(listsContainer)
      selectedList = null
    } else {
      selectedList = listToOpen

      this.makeAddItemButton(selectedList, itemsHeader, lists)

      for (let list in lists) {
        this.makeDisplayListName(
          lists[list],
          listsContainer,
          selectedList,
          lists,
        )
      }

      this.displayItems(selectedList, itemsContainer)
    }
  },
  displayNoLists(container) {
    const messageLastChild = container.parentNode
    const message = document.createElement('p')

    message.classList.add('no-lists')
    message.textContent = 'No lists'
    messageLastChild.appendChild(message)
  },
  emptyDisplay(container) {
    container.replaceChildren()
  },
  displayItems(list, container) {
    let associatedList = list
    let items = associatedList._items

    this.emptyDisplay(container)

    for (let item of items) {
      this.makeDisplayItemName(item)
    }
  },
  displayNoItems() {
    const messageLastChild = document.getElementById('items-ul').parentNode
    const message = document.createElement('p')

    message.classList.add('no-items')
    message.textContent = 'No items'
    messageLastChild.appendChild(message)
  },
  makeDisplayListName(list, container, selectedList, lists) {
    const li = document.createElement('li')
    li.list = list
    li.textContent = list._name
    li.classList.add('list-name')

    li.addEventListener('click', (e) => {
      let eventTarget = e.target
      let listsContainer = document.getElementById('lists-ul')
      let itemsHeader = document.getElementById('items-header')
      let itemsContainer = document.getElementById('items-ul')

      if (eventTarget.list !== selectedList) {
        selectedList = eventTarget.list

        this.updateListsDisplay(
          lists,
          selectedList,
          listsContainer,
          itemsHeader,
          itemsContainer,
        )
      }
    })

    container.appendChild(li)

    return li
  },
  makeDisplayItemName(item) {
    const display = document.getElementById('items-ul')
    const li = document.createElement('li')
    li.textContent = item._name
    li.classList.add('list-name')
    display.appendChild(li)
  },
  makeAddItemButton(list, container, lists) {
    let existingButton = document.getElementById('add-item')

    if (existingButton) {
      container.removeChild(existingButton)
    }

    const addItemButton = document.createElement('button')
    addItemButton.setAttribute('type', 'button')
    addItemButton.textContent = '+'
    addItemButton.id = 'add-item'
    addItemButton.associatedList = list
    addItemButton.addEventListener('click', function () {
      let inputName = prompt('Enter item name')
      let newItem = model.makeItem(inputName)
      list._items.push(newItem)
      model.updateRepository(lists)
      view.makeDisplayItemName(newItem)
    })
    container.appendChild(addItemButton)
  },
  displayDeleteButton() {
    const container = document.getElementById('lists-div')
    const deleteButton = document.createElement('button')
    deleteButton.textContent = '-'
    deleteButton.setAttribute('type', 'button')
    deleteButton.addEventListener('click', function () {
      const listToDelete = view.getOpenList()
      const newLists = model.removeList(listToDelete)

      if (newLists.length < 1) {
        container.remove(deleteButton)
      }

      view.displayLists(newLists)
    })
    container.appendChild(deleteButton)
  },
}

export { view }
