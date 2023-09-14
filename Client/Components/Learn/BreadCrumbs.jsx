import React from 'react'
import { useRouter } from "next/router";

import { 
  ArrowSeparated,
  BreadCrumb,
  BreadCrumbsHolder
} from './BreadCrumbsStyles'

import { replaceSpaceWithDash, stripCharactersAndDash, linkToLearnPage } from './learn-utils';
import { COLORS, Pages, upperCaseFirst } from "../../utils";

export const BreadCrumbs = ({ category, article}) => {
  const router = useRouter();

  // BreadCrumbs 
  const categoryUrl = stripCharactersAndDash(replaceSpaceWithDash(category.title.toLowerCase()))
  const articleUrl = article.id

  return (
    <BreadCrumbsHolder>
      <BreadCrumb
        onClick={()=>linkToLearnPage(router )}
      >
        {upperCaseFirst(router.asPath.split('/').filter(item => item !== '')[0])} 
        <ArrowSeparated>&gt;</ArrowSeparated>
      </BreadCrumb>
      <BreadCrumb 
        onClick={()=>linkToLearnPage(router, `/${categoryUrl}`)}
      >
        {category.title}
      </BreadCrumb>
    </BreadCrumbsHolder>
  )
}

{/* <div style={{ color: COLORS.PRIMARY_GRAY }}>{article.title}</div> */}
