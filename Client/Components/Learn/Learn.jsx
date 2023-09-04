import React, { useContext, useState } from 'react'

import LearnContext from '../../contexts/learn.context'

import { TVariant, TWeight, Typography } from "../Typography";
import { LearnCard } from "./LearnCard";
import { LearnSections } from "./LearnStyles";
import { LearnHeader } from "./LearnHeader";

import { COLORS, Pages } from "../../utils";
import { useRouter } from "next/router";

export const Learn = () => {

  const { learnModules } = useContext(LearnContext)

  const router = useRouter();
  const goToComingSoon = () => router.push(Pages.COMING_SOON);

  return (
    <>
      <LearnHeader
        title="Everything you need to succeed with WMSY"
      />
      <LearnSections>
        {
          learnModules.length > 0 
            ? learnModules.map((module, i) =>
              <LearnCard
                key={i}
                title={module.title}
                text={module.subTitle}
                icon={module.icon}
              />
            )
            : goToComingSoon()
        }
      </LearnSections>
    </>
  );
};
