/*the responsibility of the model is to store the state and implement logic that modifies state*/

const model = {
  makeList(newListName) {
    class List {
      constructor(name) {
        this._id = repository.listIDCounter
        this._name = name
        this._items = []
        this._description
        this._dueDate
      }
      get name() {
        return this._name
      }
      set name(newName) {
        if (newName === '') {
          throw 'Error: The list name cannot be empty'
        }
        this._name = newName
      }
      get items() {
        return this._items
      }
    }

    const newList = new List(newListName)

    return newList
  },
  makeItem(newItemName) {
    class Item {
      constructor(name) {
        this._name = name
      }
      get name() {
        return this._name
      }
      set name(newName) {
        if (newName === '') {
          throw 'Error: The item name cannot be empty'
        }
        this._name = newName
      }
    }

    const newItem = new Item(newItemName)

    return newItem
  },
  _selectedList: {},
  set selectedList(list) {
    this._selectedList = list
  },
  get selectedList() {
    return this._selectedList
  },
}

const repository = {
  _lists: [],
  set lists(lists) {
    this._lists = lists
    localStorage.setItem('lists', JSON.stringify(lists))
  },
  get lists() {
    this._lists = JSON.parse(localStorage.getItem('lists'))

    return this._lists
  },
  _listIDCounter: 0,
  get listIDCounter() {
    let oldID = JSON.parse(localStorage.getItem("listIDCounter"))
    if (typeof oldID === "undefined" || !oldID){
      this._listIDCounter++
      localStorage.setItem('listIDCounter', JSON.stringify(this._listIDCounter))
    } else {
      this._listIDCounter = parseInt(oldID)+1;
      localStorage.setItem('listIDCounter', JSON.stringify(this._listIDCounter));
    }
      return this._listIDCounter
  }
}

export { model, repository }
