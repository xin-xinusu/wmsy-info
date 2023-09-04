import PuffLoader from "react-spinners/PuffLoader";
import { COLORS } from "../../utils/constants";
import { LoadingWrapper } from "./LoadingStyles";
import { LoadingVariant } from "./loading.standard";

export const Loading = ({ variant = LoadingVariant.FIT }) => {
  return (
    <LoadingWrapper variant={variant}>
      <PuffLoader color={COLORS.LIGHT_PURPLE} />
    </LoadingWrapper>
  );
};


