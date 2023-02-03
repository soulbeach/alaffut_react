import '../styles/style.css';
import '../styles/bootstrap.css';


function Connexion() {
    return (
        <main id="Connexion">
            <main>
                <h1>Rebonjour !</h1>
                <section className="container formContact">
                    <form className="formContact" action="">

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Adresse email</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                                placeholder="Entrez votre adresse mail" required />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Mot de passe</label>
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Entrez votre mot de passe" />
                        </div>

                        <div className="inscription-evenement">
                            <button className="btn btn-color btn-form" type="submit">S'inscrire</button>
                        </div>

                    </form>
                </section>

            </main>
        </main>
    )
}
export default Connexion;