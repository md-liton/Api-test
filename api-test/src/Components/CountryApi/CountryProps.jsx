import React from 'react'
import './Country.css'

const CountryProps = (props) => {
    console.log(props.countryProps.name.common);
  return (
    <div style={{background:'green',padding:'15px 0',color:'#fff',margin:'10px',borderRadius:'10px'}}>
        <div>
        <h1>Region: {props.countryProps.region}</h1>
        <h3>Status: {props.countryProps.status}</h3>
        <h3>Common: {props.countryProps.name.common}</h3>
        </div>
    </div>
  )
}

export default CountryProps