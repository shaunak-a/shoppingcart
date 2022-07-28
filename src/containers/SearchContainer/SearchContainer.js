import { TextField } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './SearchContainer.scss'

const SearchContainer = () => {
    return (
        <div className="search">
            <div className="search-container">
                <TextField 
                    type="search" 
                    placeholder=""
                    fullWidth
                />
                <SearchIcon />
            </div>
        </div>
    )
}

export default SearchContainer
