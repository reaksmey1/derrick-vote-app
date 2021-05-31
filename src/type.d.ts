interface IVote {
  id: number
  fruit: string
  voter: string
}

type VotingState = {
  votes: IVote[]
}

type VotingAction = {
  type: string
  vote: IVote
}

type DispatchType = (args: VotingAction) => VotingAction