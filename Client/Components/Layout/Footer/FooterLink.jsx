import React from "react";
import Link from "next/link";
import { COLORS } from "../../../utils/constants";
import { Typography } from "../../Typography";

const FooterLink = ({ label, href }) => {
  return (
    <Typography color={COLORS.WHITE}>
      <Link href={href}>{label}</Link>
    </Typography>
  );
};

export default FooterLink
