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
  data?: any
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
        <label>
          <input
            type='radio'
            value='Orange'
            id='fruit'
            name='fruit'
            // checked={vote.fruit === 'orange'}
            onChange={handleVoteData}
          />
          Orange
          <img src={orange} alt='orange' />
        </label>
      </div>
      <div className='fruit watermelon'>
        <label>
          <input
            type='radio'
            value='Watermelon'
            id='fruit'
            name='fruit'
            //checked={this.state.selectedOption === "Female"}
            onChange={handleVoteData}
          />
          Watermelon
          <img src={watermelon} alt='watermelon' />
        </label>
      </div>
      <div className='fruit kiwifruit'>
        <label>
          <input
            type='radio'
            value='Kiwifruit'
            id='fruit'
            name='fruit'
            //checked={this.state.selectedOption === "Other"}
            onChange={handleVoteData}
          />
          Kiwifruit
          <img src={kiwifruit} alt='kiwifruit' />
        </label>
      </div>
      <div className='fruit cherry'>
        <label>
          <input
            type='radio'
            value='Cherry'
            id='fruit'
            name='fruit'
            //checked={this.state.selectedOption === "Male"}
            onChange={handleVoteData}
          />
          Cherry
          <img src={cherry} alt='cherry' />
        </label>
      </div>
      <div className='fruit apple'>
        <label>
          <input
            type='radio'
            value='Apple'
            id='fruit'
            name='fruit'
            //checked={this.state.selectedOption === "Male"}
            onChange={handleVoteData}
          />
          Apple
          <img src={apple} alt='apple' />
        </label>
      </div>
      <div className='fruit grape'>
        <label>
          <input
            type='radio'
            value='Grape'
            id='fruit'
            name='fruit'
            //checked={this.state.selectedOption === "Male"}
            onChange={handleVoteData}
          />
          Grape
          <img src={grape} alt='grape' />
        </label>
      </div>
      <div className='fruit pear'>
        <label>
          <input
            type='radio'
            value='Pear'
            id='fruit'
            name='fruit'
            //checked={this.state.selectedOption === "Male"}
            onChange={handleVoteData}
          />
          Pear
          <img src={pear} alt='pear' />
        </label>
      </div>
      <div className='fruit banana'>
        <label>
          <input
            type='radio'
            value='Banana'
            id='fruit'
            name='fruit'
            //checked={this.state.selectedOption === "Male"}
            onChange={handleVoteData}
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
