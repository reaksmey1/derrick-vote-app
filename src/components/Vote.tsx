import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"

type Props = {
  vote: IVote
  removeVote: (vote: IVote) => void
}

export const Vote: React.FC<Props> = ({ vote, removeVote }) => {
  const dispatch: Dispatch<any> = useDispatch()

  const deleteVote = React.useCallback(
    (vote: IVote) => dispatch(removeVote(vote)),
    [dispatch, removeVote]
  )

  return (
    <div className="Vote">
      <div>
        <h1>{vote.fruit}</h1>
        <p>{vote.voter}</p>
      </div>
      <button onClick={() => deleteVote(vote)}>Delete</button>
    </div>
  )
}
