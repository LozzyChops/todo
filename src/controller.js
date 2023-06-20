/*the responsibility of the controller is to glue the code together,
to make sure events that result from the user's actions affect the model to update the state*/

import { model, repository } from './model'
import { view } from './view'

const controller = {
  setUpLocalStorage: function () {
    const lists = [model.makeList('DEFAULT')]
    repository.lists = lists

    return lists
  },
}

export { controller }
