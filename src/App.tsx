import * as React from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import './styles.css'

import { Result } from './components/Result'
import { AddVote } from './components/AddVote'
import { addVote } from './store/actionCreators'
import { Dispatch } from 'redux'
import { VotesList } from './components/VotesList'

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
      <div className='grid-container1'>
        <AddVote saveVote={saveVote} />
      </div>
      <div className='grid-container'>
        <Result votes={votes} />
      </div>
      <div className='grid-container'>
        <VotesList votes={votes} />
      </div>
    </main>
  )
}

export default App
