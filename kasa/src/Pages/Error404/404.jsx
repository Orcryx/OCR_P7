//Importer les outils react & reactRouter
import { NavLink } from "react-router-dom";
//Importer un style 
import '../../../src/Utils/Style/404.css';

function Error404() {

return (
    <div id="box404">
      <h1 className='titre404'>404</h1>
      <p className="message404 policePrimary">Oups ! La page que vous demandez n'existe pas.</p>
      <NavLink to="/" className="linkToHome" >Retourner sur la page d'accueil</NavLink>
    </div>
  );
}

export default Error404;