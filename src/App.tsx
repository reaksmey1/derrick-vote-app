import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import "./styles.css"

import { Vote } from "./components/Vote"
import { Result } from "./components/Result"
import { AddVote } from "./components/AddVote"
import { VotesList } from "./components/VotesList"
import { addVote, removeVote } from "./store/actionCreators"
import { Dispatch } from "redux"

const App: React.FC = () => {
  const votes: IVote[] = useSelector(
    (state: VotingState) => state.votes,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const saveVote = React.useCallback(
    (vote: IVote) => dispatch(addVote(vote)),
    [dispatch]
  )

  return (
    <main>
      <h1>My Votes</h1>
      <AddVote saveVote={saveVote} />
      <Result total={40} />
      <VotesList votes={votes} />
      <div className="result-wrapper">
        {votes.map((vote: IVote) => (
          <Vote
            key={vote.id}
            vote={vote}
            removeVote={removeVote}
          />
        ))}
      </div>
    </main>
  )
}

export default App
