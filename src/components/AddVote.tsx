import * as React from 'react'
import kiwifruit from '../images/kiwi.svg'
import watermelon from '../images/watermelon.svg'
import orange from '../images/orange.svg'
import cherry from '../images/cherries.svg'
import apple from '../images/apple.svg'
import grape from '../images/grape.svg'
import pear from '../images/pear.svg'
import banana from '../images/banana.svg'

type Props = {
  saveVote: (article: IVote | any) => void
}

export const AddVote: React.FC<Props> = ({ saveVote }) => {
  const [vote, setVote] = React.useState<IVote | {}>()

  const handleVoteData = (e: React.FormEvent<HTMLInputElement>) => {
    setVote({
      ...vote,
      [e.currentTarget.id]: e.currentTarget.value
    })
  }

  const addNewVote = (e: React.FormEvent) => {
    e.preventDefault()
    saveVote(vote)
  }

  return (
    <form onSubmit={addNewVote} className='Add-vote'>
      <div className='fruit orange'>
        <label htmlFor='orange'>
          <input
            type='radio'
            value='orange'
            id='fruit'
            // checked={vote.fruit === 'orange'}
            // onChange={this.onValueChange}
          />
          Orange
          <img src={orange} alt='orange' />
        </label>
      </div>
      <div className='fruit watermelon'>
        <label htmlFor='watermelon'>
          <input
            type='radio'
            value='watermelon'
            id='fruit'
            //checked={this.state.selectedOption === "Female"}
            // onChange={this.onValueChange}
          />
          Watermelon
          <img src={watermelon} alt='watermelon' />
        </label>
      </div>
      <div className='fruit kiwifruit'>
        <label htmlFor='kiwifruit'>
          <input
            type='radio'
            value='kiwifruit'
            id='fruit'
            //checked={this.state.selectedOption === "Other"}
            //onChange={this.onValueChange}
          />
          Kiwifruit
          <img src={kiwifruit} alt='kiwifruit' />
        </label>
      </div>
      <div className='fruit cherry'>
        <label htmlFor='cherry'>
          <input
            type='radio'
            value='cherry'
            id='fruit'
            //checked={this.state.selectedOption === "Male"}
            // onChange={this.onValueChange}
          />
          Cherry
          <img src={cherry} alt='cherry' />
        </label>
      </div>
      <div className='fruit apple'>
        <label htmlFor='apple'>
          <input
            type='radio'
            value='apple'
            id='fruit'
            //checked={this.state.selectedOption === "Male"}
            // onChange={this.onValueChange}
          />
          Apple
          <img src={apple} alt='apple' />
        </label>
      </div>
      <div className='fruit grape'>
        <label htmlFor='grape'>
          <input
            type='radio'
            value='grape'
            id='fruit'
            //checked={this.state.selectedOption === "Male"}
            // onChange={this.onValueChange}
          />
          Grape
          <img src={grape} alt='grape' />
        </label>
      </div>
      <div className='fruit pear'>
        <label htmlFor='pear'>
          <input
            type='radio'
            value='pear'
            id='fruit'
            //checked={this.state.selectedOption === "Male"}
            // onChange={this.onValueChange}
          />
          Pear
          <img src={pear} alt='pear' />
        </label>
      </div>
      <div className='fruit banana'>
        <label htmlFor='banana'>
          <input
            type='radio'
            value='banana'
            id='fruit'
            //checked={this.state.selectedOption === "Male"}
            // onChange={this.onValueChange}
          />
          Banana
          <img src={banana} alt='banana' />
        </label>
      </div>
      <div className='item4'>
        <input
          type='text'
          id='firstName'
          placeholder='First Name'
          onChange={handleVoteData}
        />
      </div>
      <div className='item5'>
        <input
          type='text'
          id='lastName'
          placeholder='Last Name'
          onChange={handleVoteData}
        />
      </div>
      <div className='item6'>
        <button disabled={vote === undefined ? true : false}>Add vote</button>
      </div>
    </form>
  )
}
