import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import img from "../../assets/ch1.jpeg";
function Fourth() {
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
  const [isLoaded, setIsLoaded] = useState(false);
  const scrollRef = useRef(null);
  const variants = {
    show: { opacity: 1, y: "0%" },
    hide: { opacity: 0, y: "-10%" },
    transition: { duration: 1, delay: 0.5 },
  };
  return (
    <Container>
      <motion.p
        variants={variants}
        initial="hide"
        transition={{ duration: 1 }}
        whileInView="show"
        ref={scrollRef}
      >
        Let me help you manage your projects.
      </motion.p>
      <Image
        initial={false}
        whileInView={
          isLoaded
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        ref={scrollRef}
      >
        <img src={img} alt="" onLoad={() => setIsLoaded(true)} />
      </Image>
    </Container>
  );
}

export default Fourth;

const Container = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5%;
    height: auto;
  }
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2%;

  p {
    @media (max-width: 768px) {
      font-size: 2rem;
      width: 100%;
      font-weight: 800;
    }
    margin: 5%;
    font-size: 3vw;
    width: 40%;
    font-family: "Kanit", sans-serif;
  }
`;
const Image = styled(motion.div)`
  @media (max-width: 768px) {
    width: 100%;
  }
  width: 40%;
  height: 90%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
