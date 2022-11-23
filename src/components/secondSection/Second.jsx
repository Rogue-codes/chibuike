import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function Second() {
  const variants = {
    hide: { opacity: 0, x: "-100%" },
    show: { opacity: 1, x: "0%" },
    hide2: { opacity: 0, x: "100%" },
    show2: { opacity: 1, x: "0%" },
  };
  return (
    <Container>
      <motion.h1
        whileInView="visible"
        viewport={{ once: true }}
        initial="hide2"
        animate="show2"
        transition={{ duration: 1, delay: 1 }}
        variants={variants}
      >
        You deserve a seamless project management experience.
      </motion.h1>
      <motion.p
        whileInView="visible"
        viewport={{ once: true }}
        initial="hide"
        animate="show"
        transition={{ duration: 1, delay: 1 }}
        variants={variants}
      >
        Hi I'm Chibuike, a certified project manager with vast experience in working in a corporate finance advisory services,
        management and investment management organization. My portfolio
        involves numerous projects in the mining, technology,
        telecommunications, financial services sectors
      </motion.p>
    </Container>
  );
}

export default Second;

const Container = styled(motion.div)`
  @media (max-width: 768px) {
    height: auto;
    padding-bottom: 5%;
    padding: 5% 5%;
  }
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10%;
  h1 {
    @media (max-width: 768px) {
      font-size: 1.8rem;
      width: 100%;
      text-align: left;
    }
    font-size: 4vw;
    width: 60%;
    text-align: center;
    font-family: "Kanit", sans-serif;
  }
  p {
    @media (max-width: 768px) {
      font-size: 1.8rem;
      margin-top: 5%;
      width: 100%;
      line-height: 40px;
      text-align: left;
    }
    font-size: 1.8vw;
    line-height: 30px;
    width: 80%;
    text-align: center;
  }
`;
