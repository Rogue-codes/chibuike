import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
function Footer() {
  const variants = {
    show: { opacity: 1, y: "0%" },
    hide: { opacity: 0, y: "-10%" },
    transition: { duration: 1, delay: 0.5 },
  };

  const scrollRef = useRef(null);
  return (
    <Container>
      <motion.p
        variants={variants}
        initial="hide"
        whileInView="show"
        transition={{ duration: 1 }}
        ref={scrollRef}
      >
        CHIBUIKE DARAOJIMBA
      </motion.p>
      <List>
        <motion.ul
          variants={variants}
          initial="hide"
          whileInView="show"
          transition={{ duration: 1 }}
          ref={scrollRef}
        >
          <li>+27634632178</li>
          <li>
            <a href="mailTo:chibuikedaraojimba@gmail.com">
              chibuikedaraojimba@gmail.com
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/chibuikedaraojimba">
              LinkedIn
            </a>
          </li>
        </motion.ul>

        <motion.ul
          variants={variants}
          initial="hide"
          whileInView="show"
          transition={{ duration: 1 }}
          ref={scrollRef}
        >
          {" "}
          <li>9600 Great Hills Trail, Suite </li>
          <li>150W</li>
          <li>Pretoria, South Africa</li>
        </motion.ul>
      </List>

      <motion.p
        variants={variants}
        initial="hide"
        whileInView="show"
        transition={{ duration: 1 }}
        ref={scrollRef}
      >
        Chibuike Daraojimba is a Greater Project Manager and a Business Analyst®
        based in Pretoria, South Africa.
      </motion.p>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #2c2c2c;
  p {
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
    color: #fff;
    padding: 3%;
    font-size: 2vw;
  }
`;
const List = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
  }
  width: 100%;
  height: 30vh;
  display: flex;
  gap: 5%;
  padding: 3%;
  ul {
    @media (max-width: 768px) {
      margin-top: 5%;
    }
    list-style-type: none;
    li {
      @media (max-width: 768px) {
        font-size: 1.3rem;
      }
      font-size: 1.4vw;
      color: #fff;
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
`;
