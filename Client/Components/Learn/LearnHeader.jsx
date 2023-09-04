import React, { useContext, useState } from 'react'
import Fuse from 'fuse.js'

import LearnContext from '../../contexts/learn.context'

import { SearchResults } from './SearchResults'

import { 
  LearnHeaderHolder,
  FontInputHolder,
  FontInput,
  SearchIcons
} from './LearnStyles'

import { COLORS } from '../../utils'
import { TVariant, TWeight, Typography } from "../Typography";

import CloseButtonIcon from '../../../assets/svg/CloseButton.svg'
import SearchIcon from '../../../assets/svg/Search.svg'

export const LearnHeader = ({ title }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [resultsArray, setResultsArray] = useState([])
  const { learnModules } = useContext(LearnContext)

  // Fuse Options
  const options = {
    includeScore: true,
    // Search in `title`, `subTitle` and in `articles markdowns` array
    keys: ['title', 'subTitle', 'articles.markdown']
  }

  // Fuse Instance
  const fuse = new Fuse(learnModules, options)

  const handleSearchInput = (e) => {
    // Set search context
    setSearchTerm(e.target.value)

    // Get result from Fuse search
    const result = fuse.search(searchTerm)

    if(searchTerm.length > 1 && result && result.length > 0){
      setResultsArray(result)
    } else {
      setResultsArray([])
    }
  }

  const handleClearIcon = () => {
    setSearchTerm('')
    setResultsArray([])
  }

  return (
    <LearnHeaderHolder>

      <Typography variant={TVariant.L} weight={TWeight.BOLD}>
        {title}
      </Typography>

      <FontInputHolder>
        <SearchIcon width="20" fill={COLORS.LILAC} />
        <FontInput 
          type="text"
          value={searchTerm}
          placeholder="Search WMSY"
          onChange={(e)=>handleSearchInput(e)}
        />
        {
          searchTerm !== ""
            ? <CloseButtonIcon
              width="15" 
              fill={COLORS.LILAC}
              onClick={handleClearIcon}
            />
            : null
        }
      </FontInputHolder>

      <SearchResults results={resultsArray} />

    </LearnHeaderHolder>
  );
};
