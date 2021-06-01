import * as React from "react"
import { removeVote } from "../store/actionCreators"
import { Vote } from "../components/Vote"

type MyProps = {
  votes: IVote[]
}

type MyState = {
  filteredVotes: IVote[];
};

export class VotesList extends React.Component <MyProps, MyState>  {

  constructor(props: any) {
    super(props);

    this.state = {
      filteredVotes: props.votes
    }; 
  }

  handleClick = () => {
    const { filteredVotes } = this.state
    const filtered = filteredVotes.filter(t=>t.fruit ==='Apple');
    this.setState({ filteredVotes: filtered})
  }

  render() {
    const { filteredVotes } = this.state
    return (
      <div className="result-wrapper">
        <button onClick={this.handleClick}>
          Add vote
        </button>
        {filteredVotes.map((vote: IVote) => (
          <Vote
            key={vote.id}
            vote={vote}
            removeVote={removeVote}
          />
        ))}
      </div>
    )
  }
}
