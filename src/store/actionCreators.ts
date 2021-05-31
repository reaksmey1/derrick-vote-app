import * as actionTypes from "./actionTypes"

export function addVote(vote: IVote) {
  const action: VotingAction = {
    type: actionTypes.ADD_VOTE,
    vote,
  }

  return simulateHttpRequest(action)
}

export function removeVote(vote: IVote) {
  const action: VotingAction = {
    type: actionTypes.REMOVE_VOTE,
    vote,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: VotingAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}