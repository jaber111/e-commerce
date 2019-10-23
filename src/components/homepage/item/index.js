import React from 'react'
import {withRouter} from 'react-router-dom'
import styled from "styled-components";
const Cadre = styled.div`
  height: 110px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color:white;
  opacity:0.7;
  position:absolute;
`
const Item = ({title,history,linkUrl,match})=>{
    return(
        <Cadre onClick={()=>history.push(`${match.url}${linkUrl}`)}>
            <h1>{title.toUpperCase()}</h1>
            <span>SHOP NOW</span>
        </Cadre>
    )
}
export default withRouter(Item);