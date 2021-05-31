import * as React from "react"

type Props = {
  saveVote: (article: IVote | any) => void
}

export const AddVote: React.FC<Props> = ({ saveVote }) => {
  const [vote, setVote] = React.useState<IVote | {}>()

  const handleVoteData = (e: React.FormEvent<HTMLInputElement>) => {
    setVote({
      ...vote,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewVote = (e: React.FormEvent) => {
    e.preventDefault()
    saveVote(vote)
  }

  return (
    <form onSubmit={addNewVote} className="Add-vote">
      <input
        type="text"
        id="fruit"
        placeholder="Fruit"
        onChange={handleVoteData}
      />
      <input
        type="text"
        id="voter"
        placeholder="Voter"
        onChange={handleVoteData}
      />
      <button disabled={vote === undefined ? true : false}>
        Add vote
      </button>
    </form>
  )
}