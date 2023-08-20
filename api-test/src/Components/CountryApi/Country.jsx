import React, { useEffect, useState } from 'react'
import CountryProps from './CountryProps'

const Country = () => {
  const [country ,setCountry] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(countryRespons => countryRespons.json())
        .then(countryData => setCountry(countryData))
    },[])
    const countrySlice = country.slice(0,20)
  return (
    <div>
      {
        countrySlice.map((countryItem)=> <CountryProps countryProps={countryItem}></CountryProps>)
      }
    </div>
  )
}

export default Country