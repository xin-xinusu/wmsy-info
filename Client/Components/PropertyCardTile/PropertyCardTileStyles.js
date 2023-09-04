import styled from "@emotion/styled";
import Image from "next/image";
import { COLORS } from "../../utils/constants";

export const PCTWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  box-shadow: 0px 4px 4px ${COLORS.BOX_SHADOW};
`;

export const PCTImageWrapper = styled.div`
  height: 188px;
  cursor: pointer;
`;

export const PCTImageContainer = styled.div`
  height: 188px;
  position: relative;
  z-index: 0;
`;

export const PCTImage = styled(Image)`
  object-fit: cover;
`;

export const PCTText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 7px;
  padding: 20px 20px 12px 20px;
  cursor: default;
`;

export const PCTRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PCTButton = styled.button`
  all: unset;
  width: 100%;
  height: 44px;
  background-color: ${COLORS.DARK_PURPLE};
  text-align: center;
  margin-top: auto;
  border-radius: 2px;
  cursor: pointer;
`;

export const FeaturedSignStyle = styled.span`
  display: flex;
  background-color: ${COLORS.DARK_PURPLE};
  width: auto;
  height: auto;
  position: absolute;
  padding: 4px 11px;
  margin: 19px 0px 0px 23px;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const NewListingSignStyle = styled.span`
  display: flex;
  background-color: white;
  width: auto;
  height: auto;
  position: absolute;
  padding: 4px 11px;
  margin: 158px 0px 12px 23px;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const PCTPropertyName = styled.div`
  display: flex;
  white-space: nowrap;
  max-width: 67%;
  cursor: pointer;
`;

export const PCTRightText = styled.div`
  text-align: right;
`;
