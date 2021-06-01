import * as React from 'react'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'

type Props = {
  vote: IVote
  removeVote: (vote: IVote) => void
}

export const Vote: React.FC<Props> = ({ vote, removeVote }) => {
  const [edit, setEdit] = React.useState(false)
  const dispatch: Dispatch<any> = useDispatch()

  const deleteVote = React.useCallback(
    (vote: IVote) => dispatch(removeVote(vote)),
    [dispatch, removeVote]
  )

  const handleToggleEdit = () => {
    setEdit(true)
  }

  const handleToggleCancel = () => {
    setEdit(false)
  }

  const renderButtons = () => {
    if (edit) {
      return (
        <div>
          <button onClick={() => deleteVote(vote)}>Delete</button>
          <button onClick={() => deleteVote(vote)}>Save</button>
          <button onClick={() => handleToggleCancel()}>Cancel</button>
        </div>
      )
    }

    return <button onClick={() => handleToggleEdit()}>Edit</button>
  }

  return (
    <div className='Vote'>
      <div>
        <h1>{vote.fruit}</h1>
        <p>{vote.voter}</p>
      </div>
      {renderButtons()}
    </div>
  )
}
