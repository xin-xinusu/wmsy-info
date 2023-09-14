import styled from "@emotion/styled";
import { COLORS, DeviceDimensions } from "../../utils";

export const LearnHeaderHolder = styled.div`
  display: flex;
  flex-direction: column-reverse;
  background-color: ${COLORS.DARK_PURPLE};
  min-height: 370px;
  width: 100%;
  padding: 20px 40px;
  @media all and (min-width: ${DeviceDimensions.MinTabletWidth}) {
    ${'' /* padding: 40px 100px; */}
  }
`;

export const LearnSections = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 40px;
  padding: 40px;
  width: 90%;
`;

// Learn Card
export const LearnCardWrapper = styled.div`
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0px 3px ${COLORS.PRIMARY_GRAY};
  gap: 60px;
  align-items: center;
  cursor: pointer;
  @media all and (min-width: ${DeviceDimensions.MinTabletWidth}) {
    flex-direction: row;
  }
`;

export const LearnCardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  @media all and (min-width: ${DeviceDimensions.MinTabletWidth}) {
    text-align: initial;
  }
`;

export const FontInputHolder  = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  height: 25%;
  min-height: 55px;
  max-height: 60px;
  width: 90%;
  padding: 0 20px;
  margin-bottom: 50px;
  background-color: ${COLORS.PRIMARY_GRAY};
  color: white;
  transition-duration: 0.35s;
  margin-top: 30px;
  @media all and (min-width: ${DeviceDimensions.MinTabletWidth}) {
    text-align: initial;
    ${'' /* width: 97.5%; */}
  }
  ${'' /* &:focus-within {
    background-color: white;
  } */}
`

export const FontInput = styled.input`
  color: ${COLORS.DARK_PURPLE};
  height: 100%;
  width: 100%;
  background-color: transparent;
  border: none;
  padding-left: 20px;
  outline: none;
  font-size: 1.25rem;
  transition-duration: 0.35s;
  ${'' /* &:focus {
    background-color: white;
  } */}
  &::placeholder {
    color: ${COLORS.LILAC};
  }
`

export const CategoryLearn = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 40px;
  width: 90%;
  padding-top: 120px;
  @media all and (max-width: ${DeviceDimensions.MinTabletWidth}) {
    text-align: initial;
    padding-top: 100px;
  }
`

export const LearnCategoryTitle = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;

  svg {
    margin-right: 25px;
  }
`

export const DotSpacer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 15px;
  opacity: 0.6;
`

export const LearnSubTitle = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: -20px;

  p {
    line-height: 30px;
  }
  
  span {
    line-height: 30px;
    opacity: 0.6;
  }
`

export const LearnCoverBanner = styled.div`
  background-image: url(${props => props.backgroundImage || 'default-image-url'});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  width: 100%;
  height: 500px;

  // Mobile devices (default to smaller padding and text size)
  @media (max-width: 600px) {
    height: 300px; 
  }

  // Tablet portrait
  @media (min-width: 600px) and (max-width: 900px) {
    height: 350px; 
  }

  // Tablet landscape and small desktops
  @media (min-width: 900px) and (max-width: 1200px) {
    height: 400px;
  }

  // Large desktops and other high-resolution devices
  @media (min-width: 1200px) {
    height: 500px; 
  }
`

export const LearnCategoryArticleTitle = styled.h3`
  width: 100%;
  padding: 15px 15px;
  font-size: 2rem;
  border-bottom: 1px solid ${COLORS.PRIMARY_GRAY};
  margin-bottom: 10px;
`

export const LearnCategoryArticleDisplay = styled.ul`
  padding: 10px;
  width: 100%;
  box-shadow: 0px 0px 3px ${COLORS.PRIMARY_GRAY};
  list-style: none;
  margin-bottom: 35px;

  li {
    padding: 15px;
    height: 50px;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    transition-duration: 0.5s;
  }

  span {
    padding: 15px;
    height: 50px;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    transition-duration: 0.5s;
  }

  li:hover {
    color: ${COLORS.WHITE};
    background-color: ${COLORS.LIGHT_PURPLE}
  }
`

// export const SearchIcons = styled.svg`
//   align-self: center;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   fill: ${(props) => props.fill || 'black'};
// `

export const ResultsHolder = styled.div`
  top: 50px;
  display: flex;
  flex-direction: column;
  align-self: center;
  position: absolute;
  margin-top: 250px;
  overflow: hidden;
  width: 77.5%;
  transition-duration: 0.5s;
  boxShadow: 0px 0px 2px black;
  justify-content: center; 
`

export const SearchResultsDrop = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  flex-direction: column;
  overflow-x: overflow;
`