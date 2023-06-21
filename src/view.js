/*the responsibility of the view is to update the display when the state in the model changes*/

import { model, repository } from './model'
import { controller } from './controller'

const view = {
  init(lists) {
    this.setUpButtons(lists)
    this.updateListsDisplay(lists)
  },
  setUpButtons(lists) {
    this.addListButton.addEventListener('click', function () {
      let inputName = prompt('Enter list name')

      let newList = model.makeList(inputName)
      lists.push(newList)
      model.selectedList = newList
      repository.lists = lists
      view.updateListsDisplay(lists)
    })

    this.addItemButton.associatedList = model.selectedList
    this.addItemButton.addEventListener('click', function () {
      let inputName = prompt('Enter item name')
      let newItem = model.makeItem(inputName)
      let list = model.selectedList
      list._items.push(newItem)
      repository.lists = lists
      view.makeDisplayItemName(newItem)
    })

    this.deleteListButton.addEventListener('click', function () {
      let lists = repository.lists
      let selectedList = model.selectedList
      let selectedIndex = lists.findIndex(
        (list) => list._id === selectedList._id,
      )

      if (selectedIndex !== -1) {
        lists.splice(selectedIndex, 1)
      }

      repository.lists = lists

      view.updateListsDisplay(repository.lists)
    })
  },
  updateListsDisplay(lists) {
    let container = view.listsContainer
    let listToOpen = model.selectedList

    this.emptyDisplay(container)

    if (!listToOpen) {
      throw 'Error: updateListsDisplay did not receive a selectedList'
    }

    if (lists.length < 1) {
      this.displayNoLists(view.listsContainer)
      model.selectedList = null
    } else {
      model.selectedList = listToOpen

      //this.makeAddItemButton(lists)
      //this.makeDeleteButton()

      for (let list in lists) {
        this.makeDisplayListName(lists[list], lists)
      }

      this.displayItems(model.selectedList)
    }
  },
  displayNoLists() {
    const messageLastChild = view.listsContainer.parentNode
    const message = document.createElement('p')

    message.classList.add('no-lists')
    message.textContent = 'No lists'
    messageLastChild.appendChild(message)
  },
  emptyDisplay(container) {
    container.replaceChildren()
  },
  displayItems(list) {
    let associatedList = list
    let items = associatedList._items
    let container = view.itemsContainer

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
  makeDisplayListName(list, lists) {
    const li = document.createElement('li')
    li.list = list
    li.textContent = list._name
    li.classList.add('list-name')

    li.addEventListener('click', (e) => {
      let eventTarget = e.target

      if (eventTarget.list !== model.selectedList) {
        model.selectedList = eventTarget.list

        this.updateListsDisplay(lists)
      }
    })

    view.listsContainer.appendChild(li)

    return li
  },
  makeDisplayItemName(item) {
    const display = document.getElementById('items-ul')
    const li = document.createElement('li')
    li.textContent = item._name
    li.classList.add('list-name')
    display.appendChild(li)
  },
  /*makeAddItemButton(list, lists) {
    let existingButton = document.getElementById('add-item')

    if (!existingButton) {
      const addItemButton = document.createElement('button')
      addItemButton.setAttribute('type', 'button')
      addItemButton.textContent = '+'
      addItemButton.id = 'add-item'
      addItemButton.associatedList = list
      addItemButton.addEventListener('click', function () {
        let inputName = prompt('Enter item name')
        let newItem = model.makeItem(inputName)
        list._items.push(newItem)
        repository.lists = lists
        view.makeDisplayItemName(newItem)
      })
      view.itemsHeader.appendChild(addItemButton)
    }
  },
  makeDeleteButton() {
    let existingButton = document.getElementById('delete-list')

    if (!existingButton) {
      const deleteListButton = document.createElement('button')
      deleteListButton.setAttribute('type', 'button')
      deleteListButton.textContent = '-'
      deleteListButton.id = 'delete-list'
      deleteListButton.addEventListener('click', function () {})
      view.listsHeader.appendChild(deleteListButton)
    }
  },*/
  listsHeader: document.getElementById('lists-header'),
  listsContainer: document.getElementById('lists-ul'),
  itemsHeader: document.getElementById('items-header'),
  itemsContainer: document.getElementById('items-ul'),
  addListButton: document.getElementById('add-list'),
  addItemButton: document.getElementById('add-item'),
  deleteListButton: document.getElementById('delete-list'),
}

export { view }
