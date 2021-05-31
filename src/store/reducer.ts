import * as actionTypes from "./actionTypes"

const initialState: VotingState = {
  votes: [
    {
      id: 1,
      fruit: "Apple",
      voter: "Derrick",
    },
    {
      id: 2,
      fruit: "Banana",
      voter: "Charles",
    },
  ],
}

const reducer = (
  state: VotingState = initialState,
  action: VotingAction
): VotingState => {
  switch (action.type) {
    case actionTypes.ADD_VOTE:
      const newArticle: IVote = {
        id: Math.random(), // not really unique
        fruit: action.vote.fruit,
        voter: action.vote.voter,
      }
      return {
        ...state,
        votes: state.votes.concat(newArticle),
      }
    case actionTypes.REMOVE_VOTE:
      const updatedArticles: IVote[] = state.votes.filter(
        vote => vote.id !== action.vote.id
      )
      return {
        ...state,
        votes: updatedArticles,
      }
  }
  return state
}

export default reducer