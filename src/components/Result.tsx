import * as React from 'react'
import ProgressBar from '@ramonak/react-progress-bar'

type MyProps = {
  votes: IVote[]
}

type MyState = {
  appleResult: number
  bananaResult: number
  orangeResult: number
  watermelonResult: number
  kiwifruitResult: number
  cherryResult: number
  grapeResult: number
  pearResult: number
}

export class Result extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props)

    this.state = this.getInitialState()
  }

  calculateFruit = (fruit: any) => {
    const { votes } = this.props
    const filteredFruit = votes.filter((t) => t.fruit === fruit)
    const result = (filteredFruit.length * 100) / votes.length
    return Number(result.toFixed(2))
  }

  calculateTotalVotes = (fruit: any) => {
    const { votes } = this.props
    const filteredFruit = votes.filter((t) => t.fruit === fruit)
    const result = filteredFruit.length
    return Number(result)
  }

  getInitialState() {
    return {
      appleResult: this.calculateFruit('Apple'),
      bananaResult: this.calculateFruit('Banana'),
      orangeResult: this.calculateFruit('Orange'),
      watermelonResult: this.calculateFruit('Watermelon'),
      kiwifruitResult: this.calculateFruit('Kiwifruit'),
      cherryResult: this.calculateFruit('Cherry'),
      grapeResult: this.calculateFruit('Grape'),
      pearResult: this.calculateFruit('Pear')
    }
  }

  componentDidUpdate(nextProps: any) {
    const { votes } = this.props
    if (nextProps.votes !== votes) {
      if (votes) {
        this.setState({ appleResult: this.calculateFruit('Apple') })
        this.setState({ bananaResult: this.calculateFruit('Banana') })
        this.setState({ orangeResult: this.calculateFruit('Orange') })
        this.setState({ watermelonResult: this.calculateFruit('Watermelon') })
        this.setState({ kiwifruitResult: this.calculateFruit('Kiwifruit') })
        this.setState({ cherryResult: this.calculateFruit('Cherry') })
        this.setState({ grapeResult: this.calculateFruit('Grape') })
        this.setState({ pearResult: this.calculateFruit('Pear') })
      }
    }
  }

  render() {
    const {
      appleResult,
      bananaResult,
      orangeResult,
      watermelonResult,
      kiwifruitResult,
      cherryResult,
      grapeResult,
      pearResult
    } = this.state
    return (
      <div className='result'>
        <div>
          Orange total votes:
          {this.calculateTotalVotes('Orange')}
          <ProgressBar
            className='progressBar'
            completed={orangeResult}
            bgColor='orange'
            labelColor='black'
          />
        </div>
        <div>
          Watermelon total votes:
          {this.calculateTotalVotes('Watermelon')}
          <ProgressBar
            className='progressBar'
            completed={watermelonResult}
            bgColor='green'
            labelColor='black'
          />
        </div>
        <div>
          Kiwifruit total votes:
          {this.calculateTotalVotes('Kiwifruit')}
          <ProgressBar
            className='progressBar'
            completed={kiwifruitResult}
            bgColor='#66ff99'
            labelColor='black'
          />
        </div>
        <div>
          Cherry total votes:
          {this.calculateTotalVotes('Cherry')}
          <ProgressBar
            className='progressBar'
            completed={cherryResult}
            bgColor='#ff6699'
            labelColor='black'
          />
        </div>
        <div>
          Apple total votes:
          {this.calculateTotalVotes('Apple')}
          <ProgressBar
            className='progressBar'
            completed={appleResult}
            bgColor='red'
            labelColor='black'
          />
        </div>
        <div>
          Grape total votes:
          {this.calculateTotalVotes('Grape')}
          <ProgressBar
            className='progressBar'
            completed={grapeResult}
            bgColor='purple'
            labelColor='black'
          />
        </div>
        <div>
          Pear total votes:
          {this.calculateTotalVotes('Pear')}
          <ProgressBar
            className='progressBar'
            completed={pearResult}
            bgColor='#99ff99'
            labelColor='black'
          />
        </div>
        <div>
          Banana total votes:
          {this.calculateTotalVotes('Banana')}
          <ProgressBar
            className='progressBar'
            completed={bananaResult}
            bgColor='#cccc00'
            labelColor='black'
          />
        </div>
      </div>
    )
  }
}
