//Importer les outils react & reactRouter
import React from "react";
//Importer les éléments du projet
import Banner from './Header/banner';
import Footer from './Footer/footer';

function Layout({children}) {
    return(
        <div>
            <Banner />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
export default Layout;