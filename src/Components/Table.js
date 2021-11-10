import React, {useState, useEffect,useContext} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {Context} from "../context"
import UpdateComponent from './Update'
import axios from 'axios';


export default function BasicTable() {

  const [data, setData] = useState([])
  const [updateId,setUpdateId]= useState(null)
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    axios.get("http://localhost:3000/posts")
      .then(r => {
        setData(r.data)
      })
  }, [state])

  const onDelete = (id) => {
    axios.delete(`http://localhost:3000/posts/${id}`, {
      method: "DELETE"
    })
    dispatch({ type: "CHANGE" })
  }

  const onUpdate = (id) => {
    setUpdateId(id)
  }

  const updateDone =()=> {
    setUpdateId (null)
  }



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell sx={{ fontWeight: 700 }} align="center">Username</TableCell>
            <TableCell sx={{ fontWeight: 700 }} align="center">Email</TableCell>
            <TableCell sx={{ fontWeight: 700 }} align="center">Phone</TableCell>
            <TableCell sx={{ fontWeight: 700 }} align="center">Website</TableCell>
            <TableCell sx={{ fontWeight: 700 }} align="center">Update</TableCell>
            <TableCell sx={{ fontWeight: 700 }} align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {item.id=== updateId ? <UpdateComponent done={updateDone} item={item} /> :
              (<><TableCell>{item.name}</TableCell>
                 <TableCell align="center">{item.username}</TableCell>
                 <TableCell align="center">{item.email}</TableCell>
                 <TableCell align="center">{item.phone}</TableCell>
                 <TableCell align="center">{item.website}</TableCell>
                 <TableCell align="center"><Button onClick={() => onUpdate(item.id)} variant="contained">Update</Button></TableCell>
                 <TableCell align="center"><Button onClick={() => onDelete(item.id)} variant="contained">Delete</Button></TableCell>
                </>)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
