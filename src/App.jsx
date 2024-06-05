
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App(){
  //states to hold data
  const [height,setHeight] = useState(0)
  const[weight,setWeight] = useState(0)
  const[index,setIndex] = useState(0)
  const [bmiMessage, setBmiMessage] = useState('')


 

  //conditional rentering
  
  const [isHeight,setIsHeight] =useState(true)
  const [isWeight, setIsWeight] =useState(true)

 const validate =(e)=>{
let name = e.target.name
let value = e.target.value

if(!!value.match(/^[0-9]*$/)){
  if(name =='height'){
    setHeight(value)
    setIsHeight(true)
  }
  else{
    setWeight(value)
    setIsWeight(true)
  }
}
else{
  if(name =='height'){
   /* setHeight(value)*/
    setIsHeight(false)
  }
  else{
   /* setWeight(value)*/
    setIsWeight(false)
  }
}

 }
 const handleReset=()=>{
  setHeight(0)
  setWeight(0)
  setIsHeight(true)
  setIsWeight(true)
   setIndex('') 
  
  setBmiMessage('')
  bmiMessage('')

}
 
const calculate = () => { 
  if (height && weight) { 
      const heightInMeters = height / 100; 
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2); 
      setIndex(bmi); 

      let message = ''; 
      if (bmi < 18.5) { 
          message = 'You are Underweight'; 
      } else if (bmi >= 18.5 && bmi < 25) { 
          message = 'You are Normal weight'; 
      } else if (bmi >= 25 && bmi < 30) { 
          message = 'You are Overweight'; 
      } else { 
          message = 'You are Obese'; 
      } 
      setBmiMessage(message); 
  } else { 
      setBmiValue(''); 
      setBmiMessage(''); 
  } 
}; 

  return(
    <>
  
  <div className='d-flex justify-content-center align-items-center' style={{width:'100%',height:'100vh'}}>
    <div className='d-flex-column'>
    <h2 className='text-light fs-1 fw-bold ms-5 '>BMI Calculator</h2>
      <p className='fs-5 fw-bolder'>calculate BMI Index from your height and weight</p>
      <div className='mt-5 clex-column rouned shadow d-flex justify-content-center align-items-center p-4 '>
       <h2 >{index}</h2>
      
       </div>
       <div className='mt-3'>
       <p className='text-danger'> Result: <span className="bmi-message text-success">  {bmiMessage}</span> 
                    </p> 
       </div>

       <form className='mt-3'>

       <div className="mb-5">
       <TextField id="outlined-basic" value={height || ""}  label="Height in (cm)" name='height' onChange={(e)=>validate(e)} variant="outlined" className='w-100' />
      {!isHeight &&
       <p className='text-danger'>* Invalid Input</p>}
       </div>
       <div className="mb-3">
       <TextField id="outlined-basic" value={weight || ""} label="Weight in (kg)" name='weight' onChange={(e)=>validate(e)} variant="outlined" className='w-100' />
       {!isWeight &&
       <p className='text-danger'> * Invalid Input</p>}
       </div>
       <div className='d-flex w-100 justify-content-between'>
       <Button variant="contained" color="success" style={{width:'150px', height:'40px'}} onClick={calculate}>Calculate</Button>
        <Button variant="outlined" color="error" style={{width:'150px', height:'40px'}} onClick={handleReset}>Reset</Button>
       </div>
      
       </form>
    </div>
   


    
    </div>
     
</>
  
  );
}
  
export default App