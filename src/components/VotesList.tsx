import * as React from 'react'
import { removeVote } from '../store/actionCreators'
import { Vote } from '../components/Vote'

type MyProps = {
  votes: IVote[]
}

type MyState = {
  filteredVotes: IVote[]
}

export class VotesList extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props)

    this.state = this.getInitialState()
  }

  componentDidUpdate(nextProps: any) {
    const { votes } = this.props
    if (nextProps.votes !== votes) {
     if (votes) {
      this.setState({ filteredVotes: votes })
     }
    }
   }

  getInitialState() {
    return {
      filteredVotes: this.props.votes
    }
  }

  handleClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { filteredVotes } = this.getInitialState()
    if (event.target.value !== '0') {
      const filtered = filteredVotes.filter(
        (t) => t.fruit === event.target.value
      )
      this.setState({ filteredVotes: filtered })
    } else {
      this.setState({ filteredVotes: filteredVotes })
    }
  }

  render() {
    const { filteredVotes } = this.state
    const { votes } = this.props;
    return (
      <div className='result-wrapper'>
        <select name='PreviousReceiver' onChange={this.handleClick}>
          <option value='0'>Filter Fruits</option>
          <option value='Apple'>Apple</option>
          <option value='Banana'>Banana</option>
          <option value='watermelon'>Watermelon</option>
        </select>
        {/* <button onClick={this.handleClick}>Add vote</button> */}
        {filteredVotes.map((vote: IVote) => (
          <Vote key={vote.id} vote={vote} removeVote={removeVote} />
        ))}
      </div>
    )
  }
}
