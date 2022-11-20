import React from 'react'
import styled from 'styled-components'

function Button({content}) {
  return (
    <Container>{content}</Container>
  )
}

export default Button
const Container = styled.button`
        @media (max-width: 768px) {
    font-size: 1.3rem;
    width: 100%;
    margin-bottom: 5%;
    height: 10vh;
}
    width: 40%;
    height: 8vh;
    background: #bb836a;
    color: #fff;
    font-weight: 600;
    border: none;
    font-size: 1.5vw;
    cursor: pointer;
`