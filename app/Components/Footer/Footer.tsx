"use client";

import React from "react";
import styled from "styled-components";
import logo from "../../../public/logo.svg";
import footer from "../../utils/footer";
import Image from "next/image";

import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

function Footer() {
  return (
    <FooterStyled>
      <nav>
        <div className="logo-con">
          <div className="logo">
            <Image src={logo} width={36} alt="logo" />
          </div>
          <div className="input">
            <input type="text" placeholder="Subscribe here..." />
            <button>&#8594;</button>
          </div>
          <p>
            Create, Sell And Collect Truly Rare Digital Artworks. Powered By
            Blockchain Technology.
          </p>
          <div className="socials">
            <AiFillGithub />
            <AiFillTwitterCircle />
            <AiFillInstagram />
            <BsDiscord />
            <AiFillLinkedin />
          </div>
        </div>
        <div className="links">
          {footer.map((item: any, index: number) => {
            return (
              <div key={index}>
                <h4>{item.title}</h4>
                <ul>
                  {item.links.map((text: any, index: number) => {
                    return (
                      <li key={index}>
                        <a href="">{text.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </nav>
      <p className="rights">
        <a href="">©{new Date().getFullYear()} Cristian Araoz. All rights reserved.</a>
        <a href="">Privacy policy | Terms of service</a>
      </p>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  position: relative;
  z-index: 10;
  padding: 3rem 1rem 0 5rem;
  background-color: var(--color-bg);
  border-top: 1px solid var(--color-border);

  nav {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .logo-con {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      width: 100%;

      .input {
        position: relative;
      }

      .input input {
        width: 100%;
        padding: 1rem 0.8rem;
        border-radius: 8px;
        background-color: #161616;
        border: 1px solid var(--color-border);
        &::placeholder {
          color: var(--color-border);
          font-weight: 500;
        }
      }

      .input button {
        position: absolute;
        right: 1rem; 
        top: 50%;
        transform: translateY(-50%);
        background: transparent;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
          color: white;
          transform: translateY(-50%) translateX(0.5rem);
        }
      }

      .socials {
        display: flex;
        gap: 1rem;
        font-size: 1.3rem;
        svg {
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          &:hover {
            color: white;
          }
        }
      }

      .logo {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }

    .links {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 2rem;
      
      h4 {
        font-size: 1rem;
        margin-bottom: 1rem;
      }

      li:not(:last-child) {
        margin-bottom: 0.5rem;
      }

      a {
        transition: all 0.3s ease-in-out;
        &:hover {
          color: white;
        }
      }
    }
  }

  .rights {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 2rem;
    padding: 1rem 0;
    border-top: 1px solid var(--color-border);

    a {
      margin: 0.5rem 0;
    }
  }

  @media (min-width: 768px) {
    padding: 5rem 10rem 0 10rem;

    nav {
      flex-direction: row;
      justify-content: space-between;
      gap: 3rem;

      .logo-con {
        width: 50%;
      }

      .links {
        flex: 1;
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .rights {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export default Footer;