import { useState } from 'react'


const Title = ({text}) => {
  return (<h1>{text}</h1>)
}

const Button = ({onClick, text}) => {
  return (<button onClick={onClick}>{text}</button>)
}

const Display = ({text, count}) => {
  return (<p>
    {text} {count}
  </p>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onClickGood = () => {
    setGood(good+1);
    console.log(good);
  }
  const onClickNeutral = () => {
    setNeutral(neutral+1);
  }
  const onClickBad = () => {
    setBad(bad+1);
  }

  return (
    <div>
      <Title text="give feedback"/>
      

      <Button onClick={onClickGood} text="good"/>
      <Button onClick={onClickNeutral} text="neutral"/>
      <Button onClick={onClickBad} text="bad"/>

      <Title text="statistics"/>

      <Display text="good" count={good}/>
      <Display text="neutral" count={neutral}/>
      <Display text="bad" count={bad}/>
    </div>
  )
}

export default App