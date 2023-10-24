import React from 'react'
import { IModelDefinitions } from '@afx/interfaces/global.iface'

// declaring interface Action for Model (Required)
export type IActionTest = {
  updateState: (state: Partial<IStateTest>) => void
  resetValues: () => void
}

// declaring interface State for Model (Required)
export type IStateTest = {
  counting: number
}

const listMenuModels: IModelDefinitions<IStateTest, IActionTest> = {
  name: 'testing',
  model: (put, getStates, getActions) => ({
    state: {
      counting: 0
    },
    actions: {
      async resetValues() {
        return new Promise(resolve => {
          return setTimeout(() => {
            resolve(
              put({
                counting: 0
              })
            )
          }, 2000)
        })
      },
      async updateState({ ...payload }) {
        put({ ...payload })
      }
    }
  })
}

export default listMenuModels
