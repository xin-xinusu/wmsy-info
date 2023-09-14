import styled from "@emotion/styled";
import { COLORS } from "../../../utils/constants";
import { DeviceDimensions } from "../../../utils/window";

export const MenuContainer = styled.div`
  position: fixed;

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 10;
  width: 100%;
  height: 100%;
  padding: 30px 0;

  background-color: ${COLORS.WHITE};

  @media all and (min-width: ${DeviceDimensions.MinTabletWidth}) {
    width: 75%;
  }

  @media all and (min-width: ${DeviceDimensions.MinLaptopWidth}) {
    display: none;
  }
  z-index: 1000;
`;

export const LogoMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  width: 100%;
  margin-bottom: 30px;

  svg {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 30px;
  }
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5rem;

  width: calc(100% - 70px);
`;

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 25px;
  margin-top: 80px;
  cursor: pointer;
`;

export const LogoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  gap: 25px;
  width: calc(100% - 70px);
  margin-top: auto;
`;

export const MenuNavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MenuNavbarItem = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;

  gap: 30px;
  user-select: none;

  a {
    color: inherit;
    text-decoration: inherit;
  }
`;

export const HorizontalLine = styled.hr`
  border: 1px solid ${COLORS.MID_PURPLE};
`;
