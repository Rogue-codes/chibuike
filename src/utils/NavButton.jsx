import React from 'react'
import styled from 'styled-components'

function NavButton({content}) {
  return (
    <Container>{content}</Container>
  )
}

export default NavButton

const Container = styled.button`
    width: 10vw;
    height: 7vh;
    background: #bb836a;
    font-size: 1.5vw;
    font-weight: 700;
    color: #fff;
    border: none;
`