import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, darkTheme, lightTheme } from '../../styles/GlobalStyles'
import { Header } from '../Header/Header'


export const Layout = ({  children, title }) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyles />
            <Header />
            <main>{children}</main>
            <footer>
            <button onClick={() => {
                    document.body.scrollTop = 0; // For Safari
                    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera   
                }}>Volver Arriba</button>

                © {new Date().getFullYear()}, Built with
                {` `}
            </footer>
        </ThemeProvider>
    )
}
export default Layout


