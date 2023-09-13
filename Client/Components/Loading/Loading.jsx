import Image from 'next/image';
import { COLORS } from "../../utils/constants";
import { LoadingWrapper } from "./LoadingStyles";
import { LoadingVariant } from "./loading.standard";

export const Loading = ({ variant = LoadingVariant.FIT }) => {
  return (
    <LoadingWrapper variant={variant}>
      <Image
        src="/loading.gif"
        alt="Wmsy loader"
        width={150} // Set the width of the image
        height={150} // Set the height of the image
      />
    </LoadingWrapper>
  );
};

