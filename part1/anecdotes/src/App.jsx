import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (<button onClick={onClick}>
    {text}
  </button>)
}

const Title = ({text}) => {
  return (<h1>{text}</h1>)
}

const voteArray = Array(8).fill(0);
const copy = [... voteArray]


let mostVotedQuote = 0;
const App = () => {
  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  

  const [selected, setSelected] = useState(0)
  const [max, setMax] =useState(0);
  
  const randomNum = () => {
    const ranNum = Math.floor(Math.random() * anecdotes.length)
    setSelected(ranNum);
  }

  // Points array to vote
  
  //vote function
  const vote = () => {
    copy[selected] += 1;
    console.log(copy[selected]);
    console.log(copy)

    if (copy[selected] >= max) {
      setMax(copy[selected])
      mostVotedQuote = selected;
    }


  }
  
  return (
    <div>
      <Title text="Anecdote of the day"/>
      <p>{anecdotes[selected]}</p>
      <Button onClick={randomNum} text="next anecdotes"/>
      <Button onClick={vote} text="vote"/>

      <Title text="Anecdote with most votes"/>
      <p>{anecdotes[mostVotedQuote]}</p>
    </div>
  )
}

export default App