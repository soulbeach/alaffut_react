import '../styles/style.css';
import '../styles/bootstrap.css';



function AjoutEvenements() {
    return (
        <main>
        <section className="container">
            <form>
                <div className="mb-3">
                    <label htmlFor="nom" className="htmlFormm-label">Nom</label>
                    <input type="password" className="htmlFormm-control" id="nom" placeholder="Entrez le nom de l'évènement" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="htmlFormm-label">Date de l'évènement</label>
                    <input type="date" className="htmlFormm-control" id="date"  required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="adresse" className="htmlFormm-label">Adresse </label>
                    <input type="text" className="htmlFormm-control" id="adresse" placeholder="Entrez l'adresse de l'évènement" aria-describedby="emailHelp"
                        required/>
                </div>
                <div className="htmlFormm-group">
                    <label htmlFor="descriptif">Descriptif</label>
                    <textarea className="htmlFormm-control" id="descriptif"  placeholder="Rédigez le descriptif de l'évènement" required></textarea>
                <br/>
                </div>
                <div className="mb-3">
                    <label htmlFor="nbplace" className="htmlFormm-label">Nombre de places</label>
                    <input type="number" className="htmlFormm-control" id="nbplace" placeholder="entrez le nombre de places pour l'évènement"  required/>
                </div>
                <button type="button" className="btn btn-outline-primary" >Ajouter l'évènement</button>
                 </form>   
        </section>
    </main>
    )
}
export default AjoutEvenements;