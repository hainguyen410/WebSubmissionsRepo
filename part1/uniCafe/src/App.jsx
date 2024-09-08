import { useState } from 'react'


const Title = ({text}) => {
  return (<h1>{text}</h1>)
}

const Button = ({onClick, text}) => {
  return (<button onClick={onClick}>{text}</button>)
}

const StatisticLine = ({text, count}) => {
  return (<tr>
    <td>{text}</td>
    <td>{count}</td>
  </tr>)
}


const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad;
  const average = all === 0 ? 0 : (good - bad) / all;
  const positive = all === 0 ? 0 : (good/all)*100+"%";

  if (all === 0) {
    return (<p>No feedback given</p>)
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" count={good}/>
          <StatisticLine text="neutral" count={neutral}/>
          <StatisticLine text="bad" count={bad}/>
          <StatisticLine text="all" count={all}/>
          <StatisticLine text="average" count={average}/>
          <StatisticLine text="positive" count={positive}/>
        </tbody>
      </table>
    </div>
  )
}
// }

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  //count clicks
  const onClickGood = () => {
    const updatedGood = good+1
    setGood(updatedGood);
  }
  const onClickNeutral = () => {
    const updatedNeutral = neutral+1;
    setNeutral(updatedNeutral);
  }
  const onClickBad = () => {
    const updatedBad = bad+1;
    setBad(updatedBad);
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
      />

      
    </div>
  )
}

export default App