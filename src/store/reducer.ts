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

let nextVoteId = 2

const reducer = (
  state: VotingState = initialState,
  action: VotingAction
): VotingState => {
  switch (action.type) {
    case actionTypes.ADD_VOTE:
      const newVote: IVote = {
        id: ++nextVoteId,
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
  }
  return state
}

export default reducer
