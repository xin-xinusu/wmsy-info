import React, { useContext, useState } from 'react'

import LearnContext from '../../contexts/learn.context'

import { TVariant, TWeight, Typography } from "../Typography";
import { LearnCard } from "./LearnCard";
import { 
  CategoryLearn,
  LearnSections,
  LearnCategoryArticleDisplay
} from "./LearnStyles";
import { LearnHeader } from "./LearnHeader";

import RightArrow from '../../../assets/svg/RightArrow.svg'

import { COLORS, Pages } from "../../utils";
import { useRouter } from "next/router";

import { replaceDashWithSpace, replaceSpaceWithDash, stripCharactersAndDash, linkToLearnPage } from './learn-utils';


export const LearnCategory = ({category}) => {

  const router = useRouter();
  const goToComingSoon = () => router.push(Pages.COMING_SOON);

  return (
    <>
      <LearnHeader />
      <CategoryLearn>
        
        {/* Category Module */}
        {category.icon}
        <h1>{category.title}</h1>
        <p>{category.subTitle}</p>
        <span>{category.articles.length === 1 ? `${category.articles.length} article` : `${category.articles.length} articles` }</span>

        {/* Category Module */}
        <LearnCategoryArticleDisplay>
          <h3>{category.articleBoxTitle}</h3>
          {
            category.articles.length > 0 
              ? category.articles.map((article, i) => 
                <li
                  key={i}
                  onClick={()=> linkToLearnPage(router, `${router.query.category}/${article.id}`)}
                >
                  {article.title}
                  <RightArrow fill={COLORS.PRIMARY_GRAY} />
                </li>
              )
              : <span>The author has not uploaded any articles for this category yet</span>
          }
        </LearnCategoryArticleDisplay>
      </CategoryLearn>
    </>
  );
};
