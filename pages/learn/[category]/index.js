import React, { useEffect, useContext, useState } from 'react'
import { useRouter } from 'next/router';

import { HeaderVariant } from "../../../Client/Components/Layout";
import { TitlePages } from "../../../Client/utils";

import { Layout } from "../../../Client/Components/Layout/Layout";
import LearnContext from '../../../Client/contexts/learn.context'

import { LearnCategory } from "../../../Client/Components/Learn/LearnCategory";

const index = () => {
  const router = useRouter();
  const [category, setCategory] = useState(null)
  const { learnModules } = useContext(LearnContext)

  useEffect(() => {

    if(router.query.category){
      const shortHandCheck = router.query.category.replace(/-/g, " ");
      setCategory(learnModules.find(module => module.title.replace(/[^a-zA-Z0-9- ]/g, "").toLowerCase() === shortHandCheck))
    } else {
      setCategory(null)
    }

    // const titleCheck = module.title.replace(/[^a-zA-Z0-9- ]/g, "").toLowerCase();
  }, [router.query]);

  return(
    <Layout 
      title={`${TitlePages.LEARN.split(' ')[0]} ${category && category.title ? `| ${category.title}` : '' }`} 
      variant={HeaderVariant.DARK}
    >
      {
        category 
          ? <LearnCategory category={category} />
          : 'No matching article category'
      }
    </Layout>
  )
}

export default index

