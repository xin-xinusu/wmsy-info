import React, { useContext, useState } from 'react'
import Image from 'next/image'
import LearnContext from '../../contexts/learn.context'

import { TVariant, TWeight, Typography } from "../Typography";
import { LearnCard } from "./LearnCard";
import { 
  CategoryLearn,
  DotSpacer,
  LearnSections,
  LearnCategoryArticleTitle,
  LearnCategoryArticleDisplay,
  LearnCoverBanner,
  LearnCategoryTitle,
  LearnSubTitle
} from "./LearnStyles";

import RightArrow from '../../../assets/svg/RightArrow.svg'

import { COLORS, Pages, WMSY_COVER_BANNER } from "../../utils";
import { useRouter } from "next/router";

import { linkToLearnPage } from './learn-utils';


export const LearnCategory = ({category}) => {

  const router = useRouter();
  const goToComingSoon = () => router.push(Pages.COMING_SOON);

  return (
    <>
      <CategoryLearn>
        <LearnCoverBanner backgroundImage={category.categoryImg ? category.categoryImg  : WMSY_COVER_BANNER} />
        {/* Category Module */}
        <LearnCategoryTitle>
          {category.icon}
          <Typography
            variant={TVariant.L}
            weight={TWeight.BOLD}
          >
            {category.title}
          </Typography>
        </LearnCategoryTitle>
        <LearnSubTitle>
          <Typography
            variant={TVariant.M}
          >
            {category.subTitle}
          </Typography>
          <DotSpacer>•</DotSpacer>
          <Typography
            variant={TVariant.B}
          >
            {category.articles.length === 1 ? `${category.articles.length} Article` : `${category.articles.length} Articles` }
          </Typography>
        </LearnSubTitle>

        {/* Category Module */}
        <LearnCategoryArticleDisplay>
          <LearnCategoryArticleTitle>
            <Typography
              variant={TVariant.L}
              weight={TWeight.BOLD}
            >
              {category.articleBoxTitle}
            </Typography>
          </LearnCategoryArticleTitle>
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
