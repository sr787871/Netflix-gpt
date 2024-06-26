import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className="fixed -z-10">
            <img className=" object-cover" src={BG_IMG_URL} alt="logo" />
        </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch