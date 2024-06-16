"use client";
import React, { useRef } from "react";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import Button from "../Button/Button";
import styled from "styled-components";
import { FaRocket, FaWallet } from "react-icons/fa";
import { Abril_Fatface } from "next/font/google";
import monkey from "../../../public/images/monkey.png";

const abril = Abril_Fatface({
    subsets: ["latin"],
    weight: "400",
  });

export default function Hero() {
    const hero = useRef<HTMLDivElement>(null);

  return (
    <HeaderStyled ref={hero}>
      <nav>
        <div className="logo">
          <Image src={logo} alt="logo" width={36} />
        </div>
        <div className="input">
          <input type="text" placeholder="Search" />
        </div>
        <ul className="nav-items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Auctions</a>
          </li>
          <li>
            <a href="#">Marketplace</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <Button name="Connect wallet" icon={<FaWallet />}/>
        </ul>
      </nav>
      {/* Header Content */}
      <div className="header-content">
        <div className="text-content">
          <h1 className={abril.className}>
            Buy, collect, and sell extraordinary NFTs
          </h1>
          <p>
            Acquire expertise in navigating the rapidly evolving and
            exhilarating NFT landscape, unveil the highly sought-after NFTs, and
            comprehend the possible advantages and disadvantages of acquiring,
            amassing, and vending these exceptional digital assets.
          </p>
          <div className="buttons">
            <Button
              name="Get Started"
              background="#f2994a"
              color="#fff"
              border="1px solid #f2994a"
              icon={<FaRocket />}
            />
            <Button name="Learn More" />
          </div>
        </div>
        <div className="image-content">
          <div
            className="image"
          >
            <Image
              src={monkey}
              width={600}
              height={600}
              alt="hero"
            />
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  nav {
    padding: 0 2rem;
    min-height: 10vh;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }

    .input {
      flex: 2;
      display: flex;
      justify-content: center;
      input {
        width: 55%;
        padding: 0.6rem 0.8rem;
        border-radius: 8px;
        background-color: #161616;
        border: 1px solid var(--color-border);
        &::placeholder {
          color: var(--color-border);
          font-weight: 500;
        }
      }
    }

    .nav-items {
      display: flex;
      align-items: center;
      gap: 2rem;
      li {
        transition: all 0.2s ease-in-out;

        &:hover {
          color: white;
          transform: scale(1.1);
        }
      }
    }
 
  @media (max-width: 768px) {
      flex-direction: column;
      .nav-items {
        gap: 1rem;
        margin-top: 1rem;
      }
      .input {
        width: 100%;
        input {
          width: 80%;
        }
      }
    }
}
  .header-content {
    padding: 0 2rem 2rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    min-height: calc(100vh - 10vh);
    flex-direction: column;
    .text-content {
        text-align: center;
      > h1 {
        font-size: clamp(2rem, 5vw, 4rem);
        color: #f2994a;
        transition: all 0.01s linear;
        padding-bottom: 1rem;
      }

      .buttons {
        display: flex;
        gap: 1rem;
        margin-top: 1.5rem;
        flex-wrap: wrap;
        justify-content: center;
      }
    }

    .image-content .image {
      padding: 1rem;
      border-radius: 8px;
      background-color: var(--color-bg);
      border: 1px solid var(--color-border);

      img {
        border-radius: 8px;
        max-width: 100%;
        height: auto;
      }
    }
    @media (min-width: 769px) {
      flex-direction: row;
      .text-content {
        text-align: left;
      }
    }
  }
`;