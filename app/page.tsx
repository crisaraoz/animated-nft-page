"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./Components/Hero/Hero";
import styled from "styled-components";
import Fullpage from "./Components/FullPage/FullPage";
import Footer from "./Components/Footer/Footer";
import SectionLayout from "./Components/SectionLayout/SectionLayout";
import HorizontalWrapper from "./Components/HorizontalWrapper/HorizontalWrapper";
import Card from "./Components/Card/Card";
import { cards } from "./utils/cards";
import ZoomSection from "./Components/ZoomSection/ZoomSection";
import TextSection from "./Components/TextSection/TextSection";

export default function Home() {
  return (
    <>
    <Hero />
    <MainStyled>
      <SectionLayout>
        <HorizontalWrapper height="40rem" direction={-1400}>
        <div className="cards" style={{ right: 0 }}>
              {cards.map((card: any, index: number) => {
                return (
                  <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                );
              })}
            </div>
        </HorizontalWrapper>
      </SectionLayout>
      <Fullpage />
      <SectionLayout>
          <HorizontalWrapper height="40rem" direction={1400}>
            <div className="cards" style={{ right: 0 }}>
              {cards.map((card, index) => {
                return (
                  <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                );
              })}
            </div>
          </HorizontalWrapper>
      </SectionLayout>
      
      <SectionLayout>
          <TextSection />
        </SectionLayout>

      <SectionLayout>
          <ZoomSection></ZoomSection>
      </SectionLayout>
        
      <Footer />
    </MainStyled>
    </>
  );
}


const MainStyled = styled.main`
  min-height: 100vh;
  width: 100%;

  .cards {
    position: absolute;
    display: grid;
    grid-template-columns: repeat(5, 20rem);
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