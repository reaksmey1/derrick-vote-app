import * as React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, Store } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import App from './App'
import reducer from './store/reducer'

function saveToLocalStorage(state: VotingState) {
  try {
    const existingVotes = JSON.stringify(state)
    localStorage.setItem('votes', existingVotes)
  } catch (e) {
    console.warn(e)
  }
}

// load string from localStarage and convert back in to an Object
// invalid output must be undefined
function loadFromLocalStorage() {
  try {
    const existingVotes = localStorage.getItem('votes')
    if (existingVotes === null) return undefined
    return JSON.parse(existingVotes)
  } catch (e) {
    console.warn(e)
    return undefined
  }
}

const store: Store<VotingState, VotingAction> & {
  dispatch: DispatchType
} = createStore(reducer, loadFromLocalStorage(), applyMiddleware(thunk))

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
store.subscribe(() => saveToLocalStorage(store.getState()))

const rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
