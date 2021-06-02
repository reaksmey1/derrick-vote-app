import * as React from "react"
import ProgressBar from "@ramonak/react-progress-bar";

type MyProps = {
  votes: IVote[]
}

type MyState = {
  appleResult: number,
  bananaResult: number,
  orangeResult: number,
}

export class Result extends React.Component<MyProps, MyState> {

  constructor(props: any) {
    super(props)

    this.state = this.getInitialState()
  }

  calculateFruit = (fruit: any) => {
    const { votes } = this.props
    const filteredFruit = votes.filter(
      (t) => t.fruit === fruit
    )
    const result = (filteredFruit.length * 100) / votes.length
    return Number(result.toFixed(2));
  }

  getInitialState() {
    return {
      appleResult: this.calculateFruit('Apple'),
      bananaResult: this.calculateFruit('Banana'),
      orangeResult: this.calculateFruit('Orange')
    }
  }

  componentDidUpdate(nextProps: any) {
    const { votes } = this.props
    if (nextProps.votes !== votes) {
     if (votes) {
      this.setState({ appleResult: this.calculateFruit('Apple') })
      this.setState({ bananaResult: this.calculateFruit('Banana') })
      this.setState({ orangeResult: this.calculateFruit('Orange') })
     }
    }
   }

  render() {

    const { appleResult, bananaResult, orangeResult} = this.state;

    return (
      <div className="result">
        <div>
          Apple
          <ProgressBar className="progressBar" completed={appleResult} bgColor="red" />
        </div>
        <div>
          Banana
          <ProgressBar className="progressBar" completed={bananaResult} bgColor="green" />
        </div>
        <div>
          Orange
          <ProgressBar className="progressBar" completed={orangeResult} bgColor="orange" />
        </div>
      </div>
    )
  }
}
