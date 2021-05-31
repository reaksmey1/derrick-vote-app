import * as React from "react"
import ProgressBar from "@ramonak/react-progress-bar";

type Props = {
  total: number
}

export const Result: React.FC<Props> = ({ total }) => {

  return (
    <div className="result">
      <div>
        Apple
        <ProgressBar className="progressBar" completed={total} bgColor="red" />
      </div>
      <div>
        Banana
        <ProgressBar className="progressBar" completed="60" bgColor="green" />
      </div>
      <div>
        Orange
        <ProgressBar className="progressBar" completed="30" bgColor="orange" />
      </div>
    </div>
  )
}
