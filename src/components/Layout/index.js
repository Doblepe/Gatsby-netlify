import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, darkTheme, lightTheme } from '../../styles/GlobalStyles'

export const index = ({  children }) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyles />
            <header>            </header>
            <main>{children}</main>
            <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <button onClick={() => {
                    document.body.scrollTop = 0; // For Safari
                    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera   
                }}>Volver Arriba</button>
            </footer>
        </ThemeProvider>
    )
}
export default index


