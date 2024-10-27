import TextField from '@mui/material/TextField';
import './App.css'
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const[principle,setPrinciple]=useState("")
  const[year,setYear]=useState("")
  const[rate,setRate]=useState("")
  const[interest,setInterest]=useState(0)
  const[isPrincipleInputValid,setisPrincipleInputValid]=useState(false)
  const[isYearInputValid,setisYearInputValid]=useState(false)
  const[isRateInputValid,setisRateInputValid]=useState(false)

  const handleValidation=(tag)=>{
    const{name,value}=tag
    console.log(name,value);
    console.log(!!value.match(/^[0-9]*.?[0-9]+/));
    
    // if valid
    if(!!value.match(/^\d*.?\d+/)){
      if(name=='principle'){
        setPrinciple(value)
        setisPrincipleInputValid(false)
      }
      else if(name=='Year'){
        setYear(value)
        setisYearInputValid(false)
      }
      else{
        setRate(value)
        setisRateInputValid(false)
      }
    }
    // invalid
    else{
      if(name=='principle'){
        setPrinciple(value)
        setisPrincipleInputValid(true)
      }
      else if(name=='Year'){
        setYear(value)
        setisYearInputValid(true)
      }
      else{
        setRate(value)
        setisRateInputValid(true)
      }
    }
  }

  const handleCalculate=(e)=>{
    e.preventDefault()
    console.log("click handled");
    setInterest((principle*rate*year)/100)
  }

  const handleReset=()=>{
    setPrinciple("")
    setYear("")
    setRate("")
    setInterest("")
    setisPrincipleInputValid(false)
    setisYearInputValid(false)
    setisRateInputValid(false)
  }

  return (
    <>
      <div style={{minHeight:"100vh",width:"100%"}} className="d-flex justify-content-center align-items-center bg-primary">
        <div className="box bg-info p-5 rounded ">
          <h1 className='text-danger fw-bolder' style={{textDecoration:'underline'}}>Simple-Interest-Calculator</h1>
          <p className='text-center'>Calculate your simple interest with us</p>
          <div className="d-flex justify-content-center align-items-center p-5 rounded bg-warning">
            <h1 className='text-danger'>&#8377; {interest}</h1>
          </div>
          <div className="mt-5">
            <form className='border rounded p-3 d-flex flex-column'>
              <TextField id="principle" name='principle' value={principle} label="Principle Amount" variant="outlined"  onChange={e=>handleValidation(e.target)}/>
                {isPrincipleInputValid&&<div className="mb-2 text-danger fw-bolder">*Invalid input</div>}

              <TextField id="Year" name='Year' value={year} label="Year" variant="filled"   onChange={e=>handleValidation(e.target)}/>
                {isYearInputValid&&<div className="mb-2 text-danger fw-bolder">*Invalid input</div>}

              <TextField id="Rate" name='Rate' value={rate} label="Rate of Interest" variant="standard"   onChange={e=>handleValidation(e.target)}/>
                {isRateInputValid&&<div className="mb-2 text-danger fw-bolder">*Invalid input</div>}

            </form>
          </div>
          <div className="mt-3 d-flex justify-content-between">
            
            <Button variant="contained" type='submit' onClick={handleCalculate}>Calculate</Button>
            <Button variant="outlined" onClick={handleReset}>Reset</Button>
          </div>
        </div>
  
      </div>








    </>
  )
}

export default App
