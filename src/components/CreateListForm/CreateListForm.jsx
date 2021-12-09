import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { createList } from '../../services/listService'


const List = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    createdBy: props.user._id,
    list: []
  })
  

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
        createList(formData)
    
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
    >
    <div>
    <h4>Name of New List</h4>
    <input
      type="text"
      autoComplete="off"
      placeholder='name of new list'
      id="name"
      value={props.name}
      name="name"
      onChange={handleChange}
      /> 
    </div>
    <input
      type="text"
      autoComplete="off"
      placeholder='description'
      id="description"
      value={props.description}
      name="description"
      onChange={handleChange}
      />
    <button>Create List</button>
    {<Link to='/' ><button>Cancel</button></Link>}
    </form>
  );
}


export default List