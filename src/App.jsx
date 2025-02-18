import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dropdown from './components/Dropdown'
import { months, year, monthDayMap } from './constants/dropDownConstants'

function App() {
   
  const [monthValue, setMonthValue] = useState(1)
  const [yearValue, setYearValue] = useState(2010)
  const [monthDay, setMonthDay] = useState(monthDayMap)
  const [dayValue, setDayValue] = useState(1)
  const [days, setDays] = useState([{value: '1', label: '1'}])
  const[maxDays, setMaxDays] = useState(31);
  

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

  console.log("MonthDay:",monthDay)

  useEffect(() => {
    setMaxDays(monthDay[monthValue - 1].label);
    const dayOptions = Array.from({ length: maxDays }, (_, i) => ({
      value: (i + 1).toString(),
      label: (i + 1).toString(),
    }));

    setDays(dayOptions);  // state update

  }, [monthValue, monthDay, maxDays]);  // re-run whenever monthValue, monthDay or maxDays change

  // log days in a separate useEffect or after the state update
  useEffect(() => {
      console.log("Days:", days);
  }, [days]);  // log when days state is updated
  
 
  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '20px', backgroundColor: ' #751aff', display: 'flex', borderWidth: '3px', borderStyle: 'solid', borderColor: 'black', justifyContent: 'center' }}>
        <Dropdown options={months} dropdownValue={monthValue} handleChange={handleMonthChange}/>
        <Dropdown options={year} dropdownValue={yearValue} handleChange={handleYearChange}/>
        <Dropdown
          options={days}
          dropdownValue={dayValue}
          handleChange={(e) => setDayValue(e.target.value)}
        />
      </div>
    </>
  )
}

export default App
