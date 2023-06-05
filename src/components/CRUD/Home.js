import React from 'react'
import './Employee/Navbar'
import { Navbar } from './Employee/Navbar'
import { Route, Routes } from 'react-router-dom'
import { EmployeeList } from "./Employee/EmployeeList";
import { EmployeeForm } from "./Employee/EmployeeForm"


function Home() {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <Routes>
                <Route path="/" element={<EmployeeList />} />
                <Route path="/create-employee" element={<EmployeeForm />} />
                <Route path="/edit-employee/:id" element={<EmployeeForm />} />
            </Routes>
        </div>
    </div>
  )
}

export default Home