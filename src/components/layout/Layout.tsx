import React, {ReactNode} from 'react'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ScrollToTop from "../utils/scrollToTop";

const Layout = ({children} : {children: ReactNode}) => {
    return (
        <>
            <Header/>
            <ScrollToTop/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout