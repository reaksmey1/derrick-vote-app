import * as actionTypes from './actionTypes'

const initialState: VotingState = {
  votes: [
    {
      id: 1,
      fruit: 'Apple',
      firstName: 'Derrick',
      lastName: 'Harsono'
    },
    {
      id: 2,
      fruit: 'Banana',
      firstName: 'Charles',
      lastName: 'Harsono'
    }
  ]
}

const reducer = (
  state: VotingState = initialState,
  action: VotingAction
): VotingState => {
  switch (action.type) {
    case actionTypes.ADD_VOTE:
      const newVote: IVote = {
        id: Math.floor(Math.random() * 1000),
        fruit: action.vote.fruit,
        firstName: action.vote.firstName,
        lastName: action.vote.lastName
      }
      return {
        ...state,
        votes: state.votes.concat(newVote)
      }
    case actionTypes.REMOVE_VOTE:
      const updatedVotes: IVote[] = state.votes.filter(
        (vote) => vote.id !== action.vote.id
      )
      return {
        ...state,
        votes: updatedVotes
      }
    case actionTypes.SAVE_VOTE:
      // const oldVote: IVote[] = state.votes.filter(
      //   (vote) => vote.id === action.vote.id
      // )
      const foundIndex = state.votes.findIndex((x) => x.id === action.vote.id)
      const updatedVote: IVote[] = state.votes

      updatedVote[foundIndex] = action.vote

      return {
        ...state,
        votes: updatedVote
      }
  }
  return state
}

export default reducer
