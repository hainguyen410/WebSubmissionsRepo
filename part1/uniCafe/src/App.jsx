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

const Statistics = ({good, neutral, bad, all, average, positive, setAverage, setPositive}) => {
  

  // calculate average score
  const updatedAverage = (good - bad)/all;
  setAverage(updatedAverage);

  //calculate positive score
  const updatedPositive = (good/all)*100 + "%";
  setPositive(updatedPositive);

  //rendering statistics
  if (all === 0) {
    return (<p>No feedback given</p>)
  } else {
  return (
    <div>
      <Display text="good" count={good}/>
      <Display text="neutral" count={neutral}/>
      <Display text="bad" count={bad}/>
      <Display text="all" count={all}/>
      <Display text="average" count={average}/>
      <Display text="positive" count={positive}/>
      
    </div>
  )
}
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  //count clicks
  const onClickGood = () => {
    const updatedGood = good+1
    setGood(updatedGood);
    const updatedAll = updatedGood+neutral+bad;
    setAll(updatedAll);
  }
  const onClickNeutral = () => {
    const updatedNeutral = neutral+1;
    setNeutral(updatedNeutral);
    const updatedAll = good+updatedNeutral+bad;
    setAll(updatedAll);
    
  }
  const onClickBad = () => {
    const updatedBad = bad+1;
    setBad(updatedBad);
    const updatedAll = good+neutral+updatedBad;
    setAll(updatedAll);
    
  }

  return (
    <div>
      <Title text="give feedback"/>

      <Button onClick={onClickGood} text="good"/>
      <Button onClick={onClickNeutral} text="neutral"/>
      <Button onClick={onClickBad} text="bad"/>

      <Title text="statistics"/>
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        all={all} 
        average={average}
        positive={positive}
        setAverage={(updatedAverage)=>setAverage(updatedAverage)}
        setPositive={(updatedPositive)=>setPositive(updatedPositive)}
      />

      
    </div>
  )
}

export default App