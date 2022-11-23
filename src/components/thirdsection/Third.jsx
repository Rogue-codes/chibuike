import { motion } from "framer-motion";
import React, { useRef } from "react";
import styled from "styled-components";

function Third() {
  const scrollRef = useRef(null);
  const variants = {
    hide: { opacity: 0, x: "-100%" },
  };
  return (
    <Container>
      <Top
        viewport={{ once: true }}
        initial="hide"
        transition={{ duration: 1, delay: 1 }}
        variants={variants}
        whileInView={{ opacity: 1, x: "0%" }}
        ref={scrollRef}
      >
        <h2>Who you work with matters.</h2>
        <h2>See why Organizations choose Chibuike.</h2>
      </Top>
      <Bottom>
        <Card
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          variants={variants}
          whileInView={{ opacity: 1 }}
          ref={scrollRef}
        >
          <h2>15 Years in Technology</h2>
          <p>
            Before transitioning into Project management, Chibuike had a
            successful, 15-year career in Data Analysis and Business
            development.
          </p>
        </Card>
        <Card
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 2 }}
          variants={variants}
          whileInView={{ opacity: 1 }}
          ref={scrollRef}
        >
          <h2>Tech Savy</h2>
          <p>
            Chibuike holds a Bachelor’s degree in Communication Technology
            Management University of Pretoria. His knowldege in Technology is
            soo vast and robust
          </p>
        </Card>
        <Card
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          variants={variants}
          whileInView={{ opacity: 1 }}
          ref={scrollRef}
        >
          <h2>Unparalleled Negotiation</h2>
          <p>
            As an analyst, Chibuike builds financial models, perform valuations
            and financial/business analysis, manage client, and stakeholders
          </p>
        </Card>
        <Card
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          variants={variants}
          whileInView={{ opacity: 1 }}
          ref={scrollRef}
        >
          <h2>Complimentary Home Staging</h2>
          <p>
            With an accreditation in professional home staging (ASP®), Chibuike
            offers complimentary styling and photography services with all
            listings.
          </p>
        </Card>
      </Bottom>
    </Container>
  );
}

export default Third;

const Container = styled.div`
  width: 100%;
  height: auto;
  background: #2c2c2c;
  padding: 2%;
`;
const Top = styled(motion.div)`
  width: 100%;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5%;
  h2 {
    @media (max-width: 768px) {
      font-size: 2.5rem;
      text-align: center;
    }
    font-size: 3vw;
    letter-spacing: 5px;
    font-family: "Kanit", sans-serif;
    font-style: italic;
    color: #f2d9d2;
    font-weight: 600;
  }
`;
const Bottom = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
  }
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2%;
`;
const Card = styled(motion.div)`
  @media (max-width: 768px) {
    width: 100%;
    padding: 5%;
  }
  width: 49%;
  height: auto;
  background: #fff;
  margin-bottom: 2%;
  padding: 2%;
  h2 {
    @media (max-width: 768px) {
      font-size: 1.8rem;
      width: 100%;
    }
    font-size: 2vw;
    margin: 5% 0%;
    font-family: "Kanit", sans-serif;
  }
  p {
    @media (max-width: 768px) {
      font-size: 1.5rem;
      line-height: 35px;
    }
    font-size: 1.52vw;
    margin: 5% 0%;
    line-height: 40px;
  }
`;
