import styled from 'styled-components'
import {Card} from "react-bootstrap";

export const styledCollectionPreview = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const styledCollectionItem = styled(Card)`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
`;
export const styledImage = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;

`;
export const styledName = styled.span`
      width: 90%;
      margin-bottom: 15px;
`;
export const styledPrice = styled.span`
      width: 10%;

`;
export const styledCollectionFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    `
;
export const styledPreview = styled.div`
   display: flex;
    justify-content: space-between;
`;
export const styledTitle = styled.h1`
    font-size: 28px;
    margin-bottom: 25px;
`;