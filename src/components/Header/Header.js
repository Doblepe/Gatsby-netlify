import React from 'react'
import { Link } from 'gatsby'
import Menu from '../Menu/Menu'
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width:960px;
    height: 70px;
    margin: 20px auto;
    @media screen and (min-width: 768px) {
        height: 120px
    }
`
export const Logo = styled.img`
max-width: 100px;
@media screen and (mmin-width: 768px){
    max-width: 250px;

}
`
export const Header = () => {
    const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            linkedIn
          }
        }
      }
    }
  `)

    // Set these values by editing "siteMetadata" in gatsby-config.js
    const author = data.site.siteMetadata?.author
    const social = data.site.siteMetadata?.social
    return (
        <Wrapper>
          <div>
            <Link to="/">
                <StaticImage
                    className="bio-avatar"
                    layout="fixed"
                    formats={["AUTO", "WEBP", "AVIF"]}
                    src="../images/IMG_8178-min.jpg"
                    width={50}
                    height={50}
                    quality={95}
                    alt="Profile picture"
                />
            </Link>
            {author?.name && (
                <p>
                    Written by <strong>{author.name}</strong> {author?.summary || null}
                    {` `}
                    <a href={`https://www.linkedin.com/${social?.linkedIn || ``}`}>
                        You should check me on LinkedIn
                    </a>
                </p>
            )}
            </div>
            <Menu />
          <div>Themebutton</div>
        </Wrapper>
    )
}
