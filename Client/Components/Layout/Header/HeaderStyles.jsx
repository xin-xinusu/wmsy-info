import styled from "@emotion/styled";
import { DeviceDimensions } from "../../../utils/window";

import Image from "next/image";
import { COLORS } from "../../../utils/constants";

export const HeaderContainer = styled.header`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  background-color: ${COLORS.TRANSPARENT};
  padding: 30px 30px;

  display: grid;
  grid-template-columns: 0.5fr 2fr 0.5fr;
  grid-template-rows: 1fr;
  grid-auto-columns: 1fr;
  grid-auto-flow: row;

  justify-content: space-between;
  align-items: center;

  a {
    color: inherit;
    text-decoration: inherit;
  }

  input {
    @media all and (min-width: ${DeviceDimensions.MinLaptopWidth}) {
      display: none;
    }
  }
  svg {
    @media all and (min-width: ${DeviceDimensions.MinLaptopWidth}) {
      display: none;
    }
    cursor: pointer;
  }

  @media all and (min-width: ${DeviceDimensions.MinLaptopWidth}) and (max-width: ${DeviceDimensions.MaxLaptopWidth}) {
    padding: 50px 50px;
    grid-template-columns: 0.3fr 1.7fr 0.5fr;
  }

  @media all and (min-width: ${DeviceDimensions.MinDesktopWidth}) {
    padding: 50px 100px;
    grid-template-columns: 0.3fr 1.7fr 0.7fr;
  }
`;

export const HamburgerContainer = styled.div`
  display: flex;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;

  @media all and (min-width: ${DeviceDimensions.MinLaptopWidth}) {
    justify-content: flex-start;
  }
`;

export const NavMenuContainer = styled.nav`
  display: flex;

  gap: 15px;
  margin: 0 100px;

  a {
    color: inherit;
    text-decoration: inherit;
  }

  @media all and (max-width: ${DeviceDimensions.MaxTabletWidth}) {
    display: none;
  }

  @media all and (min-width: ${DeviceDimensions.MinLaptopWidth}) and (max-width: ${DeviceDimensions.MaxLaptopWidth}) {
    gap: 25px;
  }
  @media all and (min-width: ${DeviceDimensions.MinDesktopWidth}) and (max-width: ${DeviceDimensions.MaxDesktopWidth}) {
    gap: 45px;
  }
  @media all and (min-width: ${DeviceDimensions.MinLargeScreen}) {
    gap: 75px;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 50px;
`;

export const PCVisibleContainer = styled.div`
  white-space: nowrap;
  display: none;

  @media all and (min-width: ${DeviceDimensions.MinLaptopWidth}) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  div {
    display: none;

    @media all and (min-width: ${DeviceDimensions.MinLaptopWidth}) {
      display: block;
    }
  }
`;

export const MobileVisibleContainer = styled.div`
  div,
  button {
    display: none;

    @media all and (max-width: ${DeviceDimensions.MaxTabletWidth}) {
      display: block;
    }
  }
`;

export const UserIconContainer = styled.div`
  position: relative;
  height: 40px;
  width: 40px;
  cursor: pointer;
`;

export const UserIcon = styled(Image)`
  border-radius: 50%;
`;

export const ClickableSection = styled.div`
  cursor: pointer;
`;
