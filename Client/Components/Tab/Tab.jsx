import { COLORS } from "../../utils/constants";
import { isBold } from "../../utils/strings";
import { TVariant, Typography } from "../Typography";
import { TabContainer, TabOption } from "./TabStyles.js";

export const Tab = ({
  options,
  selectedTab,
  setSelectedTab,
  fontSize = TVariant.XM,
}) => {
  const handleTabSelection = (option) => () => {
    setSelectedTab(option);
  };

  const getColor = (selectedTab, myTab) => {
    if (selectedTab === myTab) {
      return COLORS.DARK_PURPLE;
    }
    return COLORS.LILAC_GREY;
  };

  return (
    <TabContainer>
      {options.map((option) => (
        <TabOption
          onClick={handleTabSelection(option)}
          selected={selectedTab === option}
          key={option}
        >
          <Typography
            variant={fontSize}
            color={getColor(selectedTab, option)}
            weight={isBold(selectedTab === option)}
          >
            {option}
          </Typography>
        </TabOption>
      ))}
    </TabContainer>
  );
};
