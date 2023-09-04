import { useRouter } from "next/router";
import { TVariant, TWeight, Typography } from "../Typography";
import { LearnCardText, LearnCardWrapper } from "./LearnStyles";
import { Pages } from '../../utils';
import { replaceDashWithSpace, replaceSpaceWithDash, stripCharactersAndDash, linkToLearnPage } from './learn-utils';

export const LearnCard = ({ icon, title, text, onClick }) => {

  // Creat Router Object 
  const router = useRouter();

  const createLinkString = stripCharactersAndDash(replaceSpaceWithDash(title.toLowerCase()))
  
  return (
    <LearnCardWrapper onClick={()=>linkToLearnPage(router, createLinkString)}>
      {icon}
      <LearnCardText>
        <Typography variant={TVariant.M} weight={TWeight.BOLD}>
          {title}
        </Typography>
        <Typography variant={TVariant.S} weight={TWeight.LIGHT}>
          {text}
        </Typography>
      </LearnCardText>
    </LearnCardWrapper>
  );
};
