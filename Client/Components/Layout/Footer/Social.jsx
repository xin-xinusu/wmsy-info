import Link from "next/link";
import Discord from "../../../../assets/svg/Discord.svg";
import Instagram from "../../../../assets/svg/Instagram.svg";
import LinkedIn from "../../../../assets/svg/LinkedIn.svg";
import Twitter from "../../../../assets/svg/Twitter.svg";
import { COLORS, DISCORD_URL, Pages, TWITTER_URL } from "../../../utils";
import { SocialContainer } from "./FooterStyles.js";

export const Social = () => {
  return (
    <SocialContainer>
      <Link href={TWITTER_URL} target="_blank">
        <Twitter />
      </Link>
      <Link href={Pages.COMING_SOON} target="_blank">
        <Instagram />
      </Link>
      <Link href={DISCORD_URL} target="_blank">
        <Discord fill={COLORS.WHITE} width="20" height="16" />
      </Link>
    </SocialContainer>
  );
};

