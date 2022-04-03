import { Link } from "react-router-dom";
import Gorrion from "../../assets/gorrion.png";
import "./NotFoundPage.css";

export const NotFoundPage = () =>{
    
    return(
        <section className="error container-fluid">
            <div className="row">
                <h1>¡Apa! Parece que la página que buscás todavía no germinó</h1>
                <h2>Error 404</h2>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <p >Podés volver al inicio clickeando en la imágen.</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12"> 
                    <Link to={"/"}><img src={Gorrion} alt="Gorrión sobre planta"/></Link>
                </div>
            </div>
      </section>
    )
}