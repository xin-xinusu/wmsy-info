import React, { useContext, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';


import { TVariant, TWeight, Typography } from "../Typography";
import { 
  CategoryLearn,
} from "./LearnStyles";
import { LearnHeader } from "./LearnHeader";

import { COLORS, Pages, upperCaseFirst } from "../../utils";
import { useRouter } from "next/router";

import { replaceSpaceWithDash, stripCharactersAndDash, linkToLearnPage } from './learn-utils';


const LearnArticle = ({article, category}) => {

  const router = useRouter();

  // BreadCrumbs 
  const categoryUrl = stripCharactersAndDash(replaceSpaceWithDash(category.title.toLowerCase()))
  const articleUrl = article.id
  console.log('article :>> ', article, categoryUrl, articleUrl);

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
      <div className="row">
        <div 
          onClick={()=>linkToLearnPage(router )}
        >
          {upperCaseFirst(router.asPath.split('/').filter(item => item !== '')[0])} &gt;
        </div>
        <div 
          onClick={()=>linkToLearnPage(router, `/${categoryUrl}`)}
        >
          {category.title} &gt;
        </div>
        <div style={{ color: COLORS.PRIMARY_GRAY }}>{article.title}</div>
      </div>

      <h1>
        {article.title}
      </h1>

      <ReactMarkdown
        children={article.markdown} 
        rehypePlugins={[rehypeRaw]}
        skipHtml={false}
      />
    </CategoryLearn>
  );
};

export default LearnArticle