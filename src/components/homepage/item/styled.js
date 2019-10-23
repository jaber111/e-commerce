import styled from 'styled-components'

export const StyledItem = styled.div`
  background-image: url(${props=>props.img});
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
   margin: 0 7.5px 15px;
   &:hover{
   cursor : pointer;
   transform : scale(1.1);
   transition: transform 6s cubic-bezier(0.25,0.45,0.45,0.95);
   overflow: hidden;
   }
`;
