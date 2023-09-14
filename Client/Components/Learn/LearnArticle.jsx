import React, { useContext, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import { TVariant, TWeight, Typography } from "../Typography";
import { 
  CategoryLearn,
  LearnCoverBanner,
} from "./LearnStyles";
import { LearnHeader } from "./LearnHeader";

import { BreadCrumbs } from './BreadCrumbs';
import { ScrollToTop } from '../ScrollToTop/ScrollToTop';

import { COLORS, Pages, upperCaseFirst, WMSY_COVER_BANNER } from "../../utils";

const LearnArticle = ({article, category}) => {

  

  // {category.title} linkToLearnPage(`/${categoryUrl}`)
  // {article.title} linkToLearnPage(`/${categoryUrl}/${articleUrl}`)

  // {
  //   urlMapping.map((url, i )=> <>
  //     <div>{url}</div>
  //     {
  //       urlMappingCount - 2 >= i 
  //         ? <span 
  //           className="breadcrumb-spacing-symbol"
  //           style={{ margin: '0 15px'}}
  //         >
  //           &gt;
  //         </span>
  //         : null 
  //     }
  //   </>)
  // }

  return (
    <CategoryLearn>
      {/* breadcrumbs */}
      <BreadCrumbs 
        article={article} 
        category={category}
      />

      {/* Banner image */}
      <LearnCoverBanner backgroundImage={category.categoryImg ? category.categoryImg  : WMSY_COVER_BANNER} />

      <Typography 
        variant={TVariant.L}
        weight={TWeight.BOLD}
      >
        {article.title}
      </Typography>

      <Typography>
        <div style={{ lineHeight: '2.5rem'}}>
          <ReactMarkdown
            children={article.markdown} 
            rehypePlugins={[rehypeRaw]}
            skipHtml={false}
          />
        </div>
        
      </Typography>

      <Typography
        variant={TVariant.M}
        weight={TWeight.XREGULAR}
      >
        <ScrollToTop scrollToTopText={'Back to top of article'} />  
      </Typography>     
      
    </CategoryLearn>
  );
};

export default LearnArticle