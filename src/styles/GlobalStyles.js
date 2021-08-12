import {createGlobalStyle} from 'styled-components'
import NunitoRegular from '../fonts/NunitoRegular'
import NunitoBlack from '../fonts/NunitoBlack'
import { upperCase } from 'lodash'
import { NonNullComposer } from 'graphql-compose'

export const colors = {
    white: "#fff",
    darkGrey: '#1a1c20',
    deepDarkGrey: '#404040',
    bloueShade1: "#215873",
    blueShade2: "#215973",
    blueShade3: "#d1e1e9",
}
export const darkTheme = {
    colors: {
        backgound: colors.white,
        menuBackgound: colors. bloueShade3,
        textDark: colors.bloueShade1,
        textMain: colors.blueShade2,
        textSecondary: colors.deepDarkGrey
    }
}
export const lightTheme = {
    colors: {
        backgound: colors.darkGrey,
        menuBackgound: colors. bloueShade1,
        textDark: colors.blueShade3,
        textMain: colors.blueShade2,
        textSecondary: colors.blueShade3
    },
}
export const GlobalStyles = createGlobalStyle `
:root{
    --site-max-width: 1200px;
}@font-face {
    font-family:"Nunito Regular";
    src: 
    local(Nunito Regular), local("Nunito Regular),
    url(${NunitoRegular}) format('ttf');
    font-weight: 300;
    font-style: normal;
}
}@font-face {
    font-family:"Nunito Balck";
    src: 
    local(Nunito Black), local("Nunito Black),
    url(${NunitoBlack}) format('ttf');
    font-weight: 300;
    font-style: normal;
}
body {
    background: ${props => props.theme.colors.backgound};
    color: ${propos => props.theme.colors.textSecondary};
    font-family: "Nunito Regular", Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0 20px 80px 20px;
    transition: all 0.5s ease; 
}
main {
    max-widht: 960px,
    margin: 40px auto;
}
h1,h2,h3,h4,h5,h6 {
    color: ${props => props.theme.colors.textMain};
    font-family: "Nunito Black", Arial, Helvetica, sans-serif;
    transition: all 0.5s ease;
    letter-spacing: 1px;
}
p{
   font-size: 0.9rem;
   line-height 1.2;
   
   @media screen and (min-width: 768px ){
       font-size: 1.1rem;
       line-height: 1.5;
   }
}
h2{
    font-size: 1rem;
    tet-transform: upperCase;
    letter-spacing: 1.8px;

    @media scree and (min-widht: 768px) {
        font-size: 1.5rem;
    }
}
h3{
    font-size: 0.8rem;
    letter-spacing: 1.5px;
    margin: 30px 0 -15px 0;

    @media scree and (min-widht: 768px) {
        font-size: 1.2rem;
    }
}
a{
    text-decoration: none;
}
`