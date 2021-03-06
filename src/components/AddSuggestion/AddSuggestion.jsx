import React, { useState } from 'react'

const AddSuggestion = ({suggestion}) => {
  const [formData, setFormData] = useState({
    Name: '',
    Type: '',
    wTeaser: '',
    wUrl: '',
    yUrl: ''
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
      setFormData({
        Name: suggestion.Name,
        Type: suggestion.Type,
        wTeaser: suggestion.wTeaser,
        wUrl: suggestion.wUrl,
        yUrl: suggestion.yUrl
    })
    
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
    >
        <button >Add To List</button>
    </form>
  );
}

export default AddSuggestion