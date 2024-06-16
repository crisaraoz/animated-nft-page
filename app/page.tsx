"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./Components/Hero/Hero";
import styled from "styled-components";
import Fullpage from "./Components/FullPage/FullPage";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <>
    <Hero />
    <MainStyled>
      <Fullpage />
    </MainStyled>
    <Footer />
    </>
  );
}


const MainStyled = styled.main`
  min-height: 100vh;
  width: 100%;

  .cards {
    position: absolute;
    display: grid;
    grid-template-columns: repeat(5, 30rem);
    gap: 4rem;
  }

  .video {
    padding: 2rem;
    background-color: #161616;
    border-radius: 1rem;
    iframe {
      border: none;
      width: 100%;
      height: 52rem;
    }
  }
`;