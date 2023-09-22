import React, { useEffect, useContext, useState } from 'react'
import { useRouter } from 'next/router';

import { HeaderVariant } from "../../../../Client/Components/Layout";
import { TitlePages } from "../../../../Client/utils";

import { Layout } from "../../../../Client/Components/Layout/Layout";
import LearnContext from '../../../../Client/contexts/learn.context'

import LearnArticle from "../../../../Client/Components/Learn/LearnArticle";
import { Loading } from '../../../../Client/Components/Loading/Loading'

const ArticlePage = () => {
  const router = useRouter();
  const { learnModules } = useContext(LearnContext)

  const [category, setCategory] = useState(null)
  const [article, setArticle] = useState(null)

  useEffect(() => {
    if(router.query.category){
      const shortHandCheck = router.query.category.replace(/-/g, " ");
      setCategory(learnModules.find(module => module.title.replace(/[^a-zA-Z0-9- ]/g, "").toLowerCase() === shortHandCheck))

      console.log('category :>> ', category);
    } else {
      setArticle(null)
    }
  }, [router.query]);

  useEffect(() => {
    if(category){
      const idCheck = Number(router.query.id);
      console.log('idCheck :>> ', idCheck);
      setArticle(category.articles.find(article => article.id === idCheck))
      console.log('article :>> ', article);
    } else {
      setArticle(null)
    }
  }, [category]);

  return (
    <Layout
      title={`${TitlePages.LEARN.split(' ')[0]} ${category && category.title ? `| ${category.title}` : '' }`} 
      variant={HeaderVariant.DARK}
    >
      {
        article 
          ? <LearnArticle 
            article={article}
            category={category}  
          />
          : <Loading variant="fullHeight" />
      }
    </Layout>
  )
}

export default ArticlePage