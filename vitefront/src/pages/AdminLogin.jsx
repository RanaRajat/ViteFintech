import React from 'react'
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import axios from 'axios';

function AdminLogin() {

  const auth=useContext(AuthContext);

  const navigate = useNavigate();
  const [form, setForm] = useState({
    user: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      "user": form.user ,
      "password": form.password
      }
    console.log(form.password);
  axios.post('http://localhost:5001/auth/admin/login',  payload)
  .then(function (response) {
    console.log(response);
    navigate("/admin-dashboard");
  })
   
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            User
            <input
              type="text"
              placeholder="user"
              value={form.user}
              onChange={handleChange}
              name="user"
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              type="password"
              placeholder="password"
              value={form.password}
              onChange={handleChange}
              name="password"
            />
          </label>
        </div>
        <div>
          <input type="submit" value="SUBMIT" />
        </div>
      </form>
    </div>
  );
}
export default AdminLogin;

