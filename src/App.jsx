import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dropdown from './components/Dropdown'
import { options, options2, monthDayMap } from './constants/dropDownConstants'

function App() {
   
  const [monthValue, setMonthValue] = useState(0)

  const [yearValue, setYearValue] = useState(0)

  const [monthDay, setMonthDay] = useState(monthDayMap);

  const handleMonthChange = (e) => {
    setMonthValue(e.target.value)
  }

  const handleYearChange = (e) => {
    const year = e.target.value;
    setYearValue(year)
    const isLeap = year % 4 === 0 ? true : false;

    const updatedMonthDayMap = monthDayMap.map((month)=>{
      if(month.value === '2' && isLeap){
        return {...month, label: '29'}
      }
      return month
    })

    setMonthDay(updatedMonthDayMap)
  }

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '20px', backgroundColor: ' #751aff', display: 'flex', borderWidth: '3px', borderStyle: 'solid', borderColor: 'black', justifyContent: 'center' }}>
        <Dropdown options={options} dropdownValue={monthValue} handleChange={handleMonthChange}/>
        <Dropdown options={options2} dropdownValue={yearValue} handleChange={handleYearChange}/>
      </div>
    </>
  )
}

export default App
