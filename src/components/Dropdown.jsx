import React, { useState } from 'react'

function Dropdown() {

  const [dropdownValue, setDropdownValue] = useState("Jan")
  const handleChange = (e) => {
    setDropdownValue(e.target.value)
    console.log(e.target.value)
  }

  return (
      <div className='dropdown-container'>
        <label htmlFor='dropdown' hidden>Select Month:</label>
        <select id='dropdown' value={dropdownValue} onChange={handleChange}>
          <option value='option1'>Jan</option>
          <option value='option2'>Feb</option>
          <option value='option3'>Mar</option>
          <option value='option4'>Apr</option>
          <option value='option5'>May</option>
          <option value='option6'>Jun</option>
          <option value='option7'>Jul</option>
          <option value='option8'>Aug</option>
          <option value='option9'>Sep</option>
          <option value='option10'>Oct</option>
          <option value='option11'>Nov</option>
          <option value='option12'>Dec</option>
        </select>
      </div>
  )
}

export default Dropdown
