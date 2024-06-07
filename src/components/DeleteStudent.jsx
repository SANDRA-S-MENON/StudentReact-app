import React from 'react'
import NavBar from './NavBar'

const DeleteStudent = () => {
  return (
    <div>
        <h1><center>Delete Student</center></h1>
        <NavBar/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form label">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <nutton className="btn btn-danger">Delete</nutton>
                </div>
            </div>
        </div>
        </div>
  )
}

export default DeleteStudent