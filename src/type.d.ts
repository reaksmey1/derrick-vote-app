interface IVote {
  id: number
  fruit: string
  firstName: string
  lastName: string
}

type VotingState = {
  votes: IVote[]
}

type VotingAction = {
  type: string
  vote: IVote
}

type DispatchType = (args: VotingAction) => VotingAction
