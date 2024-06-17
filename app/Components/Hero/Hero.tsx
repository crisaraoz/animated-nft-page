"use client";
import React, { useRef, useState } from "react";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import Button from "../Button/Button";
import styled from "styled-components";
import { FaRocket, FaWallet, FaBars, FaTimes } from "react-icons/fa";
import { Abril_Fatface } from "next/font/google";
import monkey from "../../../public/images/monkey.png";
import hover3d from "@/app/utils/hover";

const abril = Abril_Fatface({
    subsets: ["latin"],
    weight: "400",
  });

export default function Hero() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const hero = useRef<HTMLDivElement>(null);
    const hoverHero = hover3d(hero, {
        x: 30,
        y: -40,
        z: 30,
      });
    
      const imageHover = hover3d(hero, {
        x: 20,
        y: -5,
        z: 11,
      });

      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    <HeaderStyled ref={hero}>
      <nav>
        <div className="logo">
          <Image src={logo} alt="logo" width={36} />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className="input">
          <input type="text" placeholder="Search" />
        </div>
        <div className={`nav-items ${isMenuOpen ? "open" : ""}`}>
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
        </div>
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
              style={{
                transform: imageHover.transform,
              }}
            />
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: relative;

    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }

    .menu-icon {
      display: none;
      cursor: pointer;
      font-size: 1.5rem;
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
      list-style: none;

      li {
        transition: all 0.2s ease-in-out;
        &:hover {
          color: white;
          transform: scale(1.1);
        }
      }

      @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        position: absolute;
        top: 100%;
        left: 0;
        background: #161616;
        padding: 1rem 0;
        border-top: 1px solid var(--color-border);
        display: none;

        &.open {
          display: flex;
        }

        li {
          margin: 0.5rem 0;
        }
      }
    }

    @media (max-width: 768px) {
      .menu-icon {
        display: block;
      }

      .input {
        display: none;
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
      p {
        font-size: 1rem;
        line-height: 1.5;
      }
      .buttons {
        display: flex;
        gap: 1rem;
        margin-top: 1.5rem;
        flex-wrap: wrap;
        justify-content: center;
      }
    }

    .image-content {
      .image {
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
    }

    @media (min-width: 769px) {
      flex-direction: row;

      .text-content {
        text-align: left;
      }
    }
  }
`;