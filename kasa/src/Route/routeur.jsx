//Importer les outils react & reactRouter
import React from "react";
import{BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
//Importer les éléments du projet
import Layout from '../Layout/layout';
import APropos from '../Pages/Apropos/apropos';
import PageError404 from '../Pages/Error404/404';
import Accueil from '../Pages/Home/accueil';
import Fiche from '../Pages/Logement/ficheLogement';

function Routeur () {

    return (
        <BrowserRouter>
             <Layout>
                <Routes>
                    <Route element={<Navigate replace to="/accueil" />} path="/" />
                    <Route path="/accueil" element={<Accueil />}/>
                    <Route path="/logement/:lodgingId" element={<Fiche />}/>
                    <Route path="/a-propos" element={<APropos />}/>
                    <Route path="*" element={<PageError404 />}/>
                </Routes> 
            </Layout>
        </BrowserRouter>
    );
}

export default Routeur;
