import React, { useState } from 'react'

function Dropdown(props) {

  const options = props.options
  return (
      <div className='dropdown-container'>
        <label htmlFor='dropdown' hidden>Select Month:</label>
        <select id='dropdown' value={props.dropdownValue} onChange={props.handleChange}>
          {options.map((option, index) => {
            return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
            )
          })}
        </select>
      </div>
  )
}

export default Dropdown
