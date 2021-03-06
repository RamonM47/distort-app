import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getSuggestions } from '../../services/apiService'
import SuggestionResultsPage from '../../pages/SuggestionResultsPage/SuggestionResultsPage'
import './SearchForm.css'



const SearchForm = (props) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    type: '',
  })

const [suggestions, setSuggestions] = useState([])

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      getSuggestions(formData.name, formData.type)
      .then(suggestionData => {
        setSuggestions(suggestionData)
      })
      navigate(`/${type === 'movie' || type === 'podcast' ? type + 's' : type}`)
    } catch (err) {
      console.log(err)
    }
    
  }
  const { name, type } = formData

  const isFormInvalid = () => {
    return !(name && type)
  }

  return (
    <>
      <form
        class='searchForm'
        autoComplete="off"
        onSubmit={handleSubmit}
        > 
        
        <input 
          class='inputlst'
          placeholder="Enter a name"
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
        />
        <select 
        class='typelst'
        name="type" 
        placeholder="Select Type"
        onChange={handleChange}
        >
            <option value="">Select Category</option>
            <option value="movie">Movie</option>
            <option value="music">Music</option>
            <option value="podcast">Podcast</option>
        </select>
          <button 
            class='buttonfrm'
            disabled={isFormInvalid()}>
            🔎
          </button>
      </form>
    <SuggestionResultsPage suggestions={suggestions} />
    </>
  );
}

export default SearchForm