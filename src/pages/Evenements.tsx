import '../styles/style.css';
import '../styles/bootstrap.css';


function Evenements(){
    return(
<main id="Evenements">
    
    <main>
         <h1>Evenements</h1>
        <section className="container">
            <div>
                <div className="ratio ratio-16x9 video">
                    <video width="900" controls>
                        <source src="./images/photoSite/video-evenement.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div>
                    <h3 className="texte-descriptif"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint officia
                        natus sit ratione officiis unde ab
                        assumenda dolorem eius voluptas. Quo illo nemo ipsum sint eveniet quod? Similique, vel
                        consequuntur.</h3>
                </div>
            </div>

            <section className="row mt-2">
                <div className=" col-md-6 col-lg-4 ">
                    <div className="card" >
                        <img src="./images/photoSite/photosEvenements/entretien-embauche.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                of
                                the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 ">
                    <div className="card"  >
                        <img src="./images/photoSite/photosAccueil/thematique/shopping2.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                of
                                the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className=" col-md-6 col-lg-4 ">
                    <div className="card">
                        <img src="./images/photoSite/photosEvenements/capstone-events-4oK5BlObZXg-unsplash.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                of
                                the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className=" col-md-6 col-lg-4 ">
                    <div className="card" >
                        <img src="./images/photoSite/photosEvenements/festival2.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                of
                                the card's content.
                            
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" col-md-6 col-lg-4 ">
                    <div className="card" >
                        <img src="./images/photoSite/photosEvenements/estee-janssens-zni0zgb3bkQ-unsplash.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                of
                                the card's content.
                            
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" col-md-6 col-lg-4 ">
                    <div className="card" >
                        <img src="./images/photoSite/photosEvenements/entretien-embauche2.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                of
                                the card's content.
                            
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <h3 className="texte-descriptif"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint officia
                    natus sit ratione officiis unde ab
                    assumenda dolorem eius voluptas. Quo illo nemo ipsum sint eveniet quod? Similique, vel
                    consequuntur.</h3>
            </div>

            <div className="inscription-evenement">
                <button className="btn btn-color" type="submit">S'inscrire à un événement</button>
            </div>

            <div className="table-responsive">   
                <h3 className="h3_agenda">Nos prochains évènements</h3>       
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="col1-tab">Lorem ipsum dolor sit amet.</td>
                      <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, et.  </td>
                    </tr>
                    <tr>
                        <td className="col1-tab">Lorem ipsum dolor sit amet.</td>
                      <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, et.  </td>
                      </tr>
                      <tr>
                        <td className="col1-tab">Lorem ipsum dolor sit amet.</td>
                        <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, et.  </td>
                      </tr>
                      <tr>
                        <td className="col1-tab">Lorem ipsum dolor sit amet.</td>
                      <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, et.  </td>
                      </tr>
                  </tbody>
                </table>
                </div>

                <div className="inscription-evenement">
                    <button className="btn btn-color" type="submit">Voir tous nos évènements</button>
                </div>

            
        </section>
    </main>
    </main>
    

    )
}

export default Evenements;