import '../styles/style.css';
import '../styles/bootstrap.css';
import NavAdmin from '../components/NavAdmin';



function AjoutCommerce() {
    return (
        <main id="AjoutCommerce"> 
        <NavAdmin/>
        <section className="container" id="AjoutCommerce">
            <form>
                <div className="mb-3">
                    <label htmlFor="nom" className="htmlForm-label">Nom</label>
                    <input type="password" className="htmlForm-control" id="nom" placeholder="Entrez le nom du commerce" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="adresse" className="htmlForm-label">Adresse </label>
                    <input type="text" className="htmlForm-control" id="adresse" placeholder="Entrez la rue du commerce" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="codepostal" className="htmlForm-label">Code Postal </label>
                    <input type="text" className="htmlForm-control" id="codepostal" placeholder="Entrez le code postal" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="ville" className="htmlForm-label">Ville </label>
                    <input type="text" className="htmlForm-control" id="ville" placeholder="Entrez la ville" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="url" className="htmlForm-label">Url du site </label>
                    <input type="text" className="htmlForm-control" id="ville" placeholder="Entrez l'url du site" aria-describedby="emailHelp"/>
                </div>
                   <div className="mb-3">
                    <label htmlFor="image" className="htmlForm-label">Image !!!!A REVOIR POUR AJOUTER UNE IMAGE EN PIECE JOINTE!!! </label>
                    <input type="image" className="htmlForm-control" id="image" aria-describedby="emailHelp"/>
                </div>
                <div className="htmlForm-group">
                    <label htmlFor="descriptif">Descriptif</label>
                    <textarea className="htmlForm-control" id="descriptif"  placeholder="Rédigez le descriptif du commerce" required></textarea>
                <br/>
                </div>
   </form>
                <button type="button" className="btn btn-outline-primary" >Ajouter le commerce</button>
                    
        </section>
    </main>
    )
}
export default AjoutCommerce;