import React from 'react'
import Link from "next/link";

import { 
  ResultsHolder,
  SearchResultsDrop
} from './LearnStyles'

export const SearchResults = ({ results }) => {

  return (
    <ResultsHolder>
      <SearchResultsDrop
        style={{
          height: `${results && results.length > 0 ? 'auto' : '0'}`,
        }}
      >
        {
          results && results.length > 0 
            ? results.map((result, i) => 
              <Link 
                href={`/learn/${result.item.title.toLowerCase().replace(/ /g, "-").replace(/[^a-zA-Z0-9-]/g, "")}`}
                style={{
                  padding: '10px 15px',
                  height: '40px'
                }}
                className="column"
              >
                <p style={{lineHeight: '0.5rem'}}>{result.item.title}</p>
                <p style={{lineHeight: '0.5rem'}}>{result.item.subTitle}</p>
              </Link>
            )
            : null
        }
      </SearchResultsDrop>
    </ResultsHolder>
  )
}

// export default SearchResults