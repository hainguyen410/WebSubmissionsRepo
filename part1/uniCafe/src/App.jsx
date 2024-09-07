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
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  const goodScore = 1;
  const badScore = -1;
  const onClickGood = () => {
    const updatedGood = good+1
    setGood(updatedGood);
    const updatedAll = updatedGood+neutral+bad;
    setAll(updatedAll);
    setAverage((goodScore*updatedGood+badScore*bad)/updatedAll)
    setPositive((updatedGood/updatedAll)*100 + "%");
  }
  const onClickNeutral = () => {
    const updatedNeutral = neutral+1;
    setNeutral(updatedNeutral);
    const updatedAll = good+updatedNeutral+bad;
    setAll(updatedAll);
    setAverage((goodScore*good+badScore*bad)/updatedAll);
    setPositive((good/updatedAll)*100 + "%");
  }
  const onClickBad = () => {
    const updatedBad = bad+1;
    setBad(updatedBad);
    const updatedAll = good+neutral+updatedBad;
    setAll(updatedAll);
    setAverage((goodScore*good+badScore*updatedBad)/updatedAll)
    setPositive((good/updatedAll)*100 +"%");
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
      <Display text="all" count={all}/>
      <Display text="average" count={average}/>
      <Display text="positive" count={positive}/>
    </div>
  )
}

export default App