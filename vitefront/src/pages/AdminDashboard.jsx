import React from 'react'
import axios from 'axios';
const AdminDashboard = () => {
  let array = [];
  axios.get('http://localhost:5001/auth/admin/get-users').then(res=>array.push(...res.data));
  console.log(array);
  return (
    <div>
      {array.map((ele)=>{
        // <div style={{border:"1px solid black",height:"3px",width:"3px"}}></div>
      <div key={ele._id}>
        <h1>{ele.email}</h1>
      </div>
      })}</div>
  )
}

export default AdminDashboard;