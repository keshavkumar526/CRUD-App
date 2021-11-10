import React,{useState,useContext} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios"
import { Context } from '../context';


export default function BasicTextFields(props) {


    const { dispatch } = useContext(Context)

    const [name,setName]=useState('')
    const [username,setUsername]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    const [website,setWebsite]=useState('')

    function handleName(event){
        setName(event.target.value)
    }
    function handleUsername(event){
        setUsername(event.target.value)
    }
    function handlePhone(event){
        setPhone(event.target.value)
    }
    function handleEmail(event){
        setEmail(event.target.value)
    }
    function handleWebsite(event){
        setWebsite(event.target.value)
    }
    const create = () => {
        const data={
            name,
            username,
            phone,
            email,
            website
        }

        axios.post('http://localhost:3000/posts', data)
          .then((response) => {
            props.close()
            dispatch({ type: "CHANGE" })
              //
            })
       }


  return (
    <div> 
      <TextField onChange={handleName} label="Name" variant="outlined" />
      <TextField onChange={handleUsername} label="Username" variant="outlined" />
      <TextField onChange={handlePhone} label="Phone" variant="outlined" />
      <TextField onChange={handleEmail} label="Email" variant="outlined" />
      <TextField onChange={handleWebsite} label="Website" variant="outlined" />
      <Button  sx={{margin: "10px", padding: "5px"}} onClick={create} variant="contained">ADD</Button>
    </div>
  );
}