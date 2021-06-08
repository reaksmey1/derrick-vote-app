import * as React from 'react'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'

type Props = {
  vote: IVote
  removeVote: (vote: IVote) => void
  saveVote: (vote: IVote) => void
}

export const Vote: React.FC<Props> = ({ vote, removeVote, saveVote }) => {
  const [edit, setEdit] = React.useState(false)
  const dispatch: Dispatch<any> = useDispatch()
  const [updatedVote, setUpdatedVote] = React.useState({
    fruit: '',
    firstName: '',
    lastName: ''
  })

  const deleteVote = React.useCallback(
    (vote: IVote) => dispatch(removeVote(vote)),
    [dispatch, removeVote]
  )

  const storeVote = React.useCallback(
    (vote: IVote) => dispatch(saveVote(vote)),
    [dispatch, saveVote]
  )

  const handleVoteData = (e: React.FormEvent<HTMLInputElement>) => {
    setUpdatedVote({
      ...updatedVote,
      [e.currentTarget.id]: e.currentTarget.value
    })
  }

  const updateVote = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(updatedVote)
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    updatedVote.firstName !== ''
      ? (vote.firstName = updatedVote.firstName)
      : null
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    updatedVote.lastName !== '' ? (vote.lastName = updatedVote.lastName) : null
    storeVote(vote)
    handleToggleCancel()
  }

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
          <button onClick={updateVote}>Save</button>
          <button onClick={() => handleToggleCancel()}>Cancel</button>
        </div>
      )
    }

    return <button onClick={() => handleToggleEdit()}>Edit</button>
  }

  // Will put task on the screen depending on editing mode
  const renderVotes = () => {
    // if is editing - show text input box
    if (edit) {
      return (
        <div>
          <form onSubmit={updateVote}>
            <input
              id='fruit'
              type='text'
              defaultValue={vote.fruit}
              onChange={handleVoteData}
              readOnly
            />
            <input
              id='firstName'
              type='text'
              defaultValue={vote.firstName}
              onChange={handleVoteData}
            />
            <input
              id='lastName'
              type='text'
              defaultValue={vote.lastName}
              onChange={handleVoteData}
            />
          </form>
        </div>
      )
    }

    // if not editing - just show text
    return (
      <div>
        <h1>{vote.fruit}</h1>
        <p>{vote.firstName}</p>
        <p>{vote.lastName}</p>
      </div>
    )
  }

  return (
    <div className='Vote'>
      {renderVotes()}
      {renderButtons()}
    </div>
  )
}
