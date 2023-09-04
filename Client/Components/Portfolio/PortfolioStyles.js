import styled from "@emotion/styled";
import { COLORS, DeviceDimensions } from "../../utils";

export const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 7.5rem 1.875rem;
  gap: 2.5rem;
  width: 100%;

  @media all and (min-width: ${DeviceDimensions.MinLaptopWidth}) and (max-width: ${DeviceDimensions.MaxLaptopWidth}) {
    padding: 10rem 3.125rem;
  }
  @media all and (min-width: ${DeviceDimensions.MinDesktopWidth}) {
    padding: 10.125rem 6.25rem;
  }
`;

// Introduction

export const PortfolioCashSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 1.5rem;
  @media all and (max-width: ${DeviceDimensions.MaxTabletWidth}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

const getGap = ({ gap }) => (gap === "S" ? "0.5rem" : "1.5rem");

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getGap};
  padding: 0.8125rem 1.3125rem;
  box-shadow: 0 0px 3px ${COLORS.PRIMARY_GRAY};
  width: 100%;
`;

export const InfoHeader = styled.div`
  height: max-content;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  svg {
    cursor: pointer;
  }
`;

export const ValueCashSection = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
`;

export const ButtonsSection = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
`;

// Withdrawal file
export const WithdrawalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  white-space: pre-wrap;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: min-content;
  width: 40rem;
  @media all and (max-width: ${DeviceDimensions.MaxTabletWidth}) {
    width: 100%;
  }
`;

export const AddressSection = styled.div`
  display: inline-block;
  width: inherit;
  word-break: break-all;
  text-align: center;
  div {
    cursor: pointer;
  }
`;

export const ExtractInputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  input {
    font-size: 2rem;
  }
`;

export const WithdrawalButtonsSection = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  align-items: center;
  @media all and (max-width: ${DeviceDimensions.MaxMobileWidth}) {
    flex-direction: column;
  }
`;

// Cash Balance Info
export const CashBalanceInfoSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CashBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  text-align: left;
`;

export const CashRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Summary
export const SummarySection = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 1.5vw;
  @media all and (min-width: ${DeviceDimensions.MinTabletWidth}) and (max-width: ${DeviceDimensions.MaxTabletWidth}) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  @media all and (max-width: ${DeviceDimensions.MinTabletWidth}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    gap: 1rem;
  }
`;

export const ToolTip = styled.div`
  position: relative;
  :hover {
    div {
      visibility: visible;
    }
  }
`;



const getRightDirection = ({ direction }) =>
  direction === "left" ? "150%" : "-1500%";

const getLeftDirection = ({ direction }) =>
  direction === "left" ? "100%" : "-5.5%";

const getRotation = ({ direction }) =>
  direction === "left" ? "180deg" : "0deg";

export const TextInfo = styled.div`
  visibility: hidden;
  z-index: 1;
  content: "";
  position: absolute;
  top: -100%;
  right: ${getRightDirection};
  background: ${COLORS.DISABLED};
  width: 18rem;
  padding: 1.8rem 1.7rem;
  ::before {
    content: "";
    position: absolute;
    top: 1.5rem;
    left: ${getLeftDirection};
    border-width: 0.5rem;
    rotate: ${getRotation};
    border-style: solid;
    border-color: transparent ${COLORS.DISABLED} transparent transparent;
  }
  @media all and (max-width: ${DeviceDimensions.MaxTabletWidth}) {
    top: 120%;
    left: 100%;
    width: 13rem;
    margin-left: -10rem;
    padding: 1.3rem 1.2rem;

    ::before {
      rotate: 90deg;
      top: -1rem;
      left: 69%;
    }
  }
`;

// Vested Properties
export const NoVestedProperties = styled.div`
  margin: auto;
  margin-top: 2rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: center;
`;

export const VestedList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CardLineContainer = styled.div`
  margin-top: 1.5rem;
  box-shadow: 0px 4px 4px ${COLORS.BOX_SHADOW};
  font-family: var(--PRIMARY-FONT);
  box-sizing: border-box;
  width: 100%;
  vertical-align: middle;
  background-color: ${COLORS.WHITE};
  padding: 1.5rem 1.5rem 1.5rem 1.875rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const PropertySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

export const PropInfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1.5rem;
`;

export const PropertyNameSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  text-align: left;
  cursor: pointer;
  @media all and (max-width: ${DeviceDimensions.MaxTabletWidth}) {
    flex-direction: row;
    align-items: baseline;
    gap: 0.5rem;
  }
`;

export const ImageSection = styled.div`
  min-width: 15rem;
  min-height: 11rem;
  position: relative;
  background-color: ${COLORS.DISABLED};
  cursor: pointer;
  @media all and (min-width: ${DeviceDimensions.MinTabletWidth}) and (max-width: ${DeviceDimensions.MaxTabletWidth}) {
    min-width: 13rem;
    min-height: 9rem;
  }
  @media all and (max-width: ${DeviceDimensions.MinTabletWidth}) {
    display: none;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${COLORS.BLACK};
`;

export const Row = styled.div`
  display: flex;
  gap: 2.75rem;
  @media all and (max-width: ${DeviceDimensions.MaxTabletWidth}) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  @media all and (max-width: ${DeviceDimensions.MaxTabletWidth}) {
    flex-direction: row;
  }
`;

export const ViewTransaction = styled.div`
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
`;
