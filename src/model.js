/*the responsibility of the model is to store the state and implement logic that modifies state*/

const model = {
  _lists: [],
  getLists: function () {
    if (this._lists.length < 1) {
      this.addDefaultList()
    }
    return this._lists
  },
  addList: function (list) {
    this._lists.push(list)
  },
  makeList: function () {
    return class {
      constructor(name) {
        this.name = name
        this.items = []
        this.description
        this.dueDate
        this.isComplete = false
      }
      addItem(item) {
        this.items.push(item)
      }
    }
  },
  makeItem: function () {
    return class {
      constructor(name) {
        this.name = name
        this.isComplete = false
      }
    }
  },
  addDefaultList: function () {
    const List = this.makeList()
    this.addList(new List('DEFAULT'))
  },
}

export { model }
