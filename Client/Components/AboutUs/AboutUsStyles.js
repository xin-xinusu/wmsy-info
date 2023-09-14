import styled from "@emotion/styled";
import { COLORS, DeviceDimensions, extractField, ABOUT_US_IMAGE_PATH } from "../../utils";

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 8rem 1.875rem;
  gap: 2.5rem;
  background-color: ${COLORS.DARK_PURPLE};
  justify-content: flex-end;
  align-items: center;

  background-image: url(${ABOUT_US_IMAGE_PATH});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;

  @media all and (min-width: ${DeviceDimensions.MinLaptopWidth}) and (max-width: ${DeviceDimensions.MaxLaptopWidth}) {
    min-height: 50vh;
    padding: 10rem 3.125rem;
  }
  @media all and (min-width: ${DeviceDimensions.MinDesktopWidth}) {
    min-height: 50vh;
    padding: 10.125rem 6.25rem;
  }
`;

// export const TextContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 70%;
//   gap: 1.5rem;
//   button {
//     width: 50%;
//     @media all and (max-width: ${DeviceDimensions.MaxTabletWidth}) {
//       width: 80%;
//     }
//   }
// `;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.div`
  margin: auto;
  margin-top: 8.125rem;
  width: 70%;
  text-align: center;
`;

export const Row = styled.div`
  margin-top: 12.5rem;
  margin-bottom: 6.25rem;
  display: flex;
  gap: 2rem;
  justify-content: space-evenly;
  @media all and (max-width: ${DeviceDimensions.MaxTabletWidth}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const TextDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: ${props => props.width}%;
  gap: 2rem;
  @media all and (max-width: ${DeviceDimensions.MaxTabletWidth}) {
    flex-direction: column;
    align-items: center;
    width: calc(${props => props.width}% * 2);
    text-align: center;
  }
`;

export const EllipsesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 6.5rem 6rem;
  column-gap: 16rem;
  row-gap: 8.2rem;
  @media all and (max-width: ${DeviceDimensions.MaxDesktopWidth}) {
    column-gap: 15%;
  }
  @media all and (max-width: ${DeviceDimensions.MinDesktopWidth}) {
    column-gap: 6%;
  }
`;

export const SvgContainer = styled.div`
  width: ${props => props.width}rem;
  max-width: 300px;
  @media all and (max-width: ${DeviceDimensions.MinTabletWidth}) {
    width: calc(${props => props.width}rem * 0.6);
  }
`;

export const UnorderedBulletlist = styled.ul`
  padding: 30px 10%;
  align-self: center;
`

export const BulletLine = styled.li`
  padding:10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 400;
`