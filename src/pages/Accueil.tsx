
import '../styles/style.css';
import '../styles/bootstrap.css';


function Accueil(){
    return(
        <div id="Accueil">
        <main>
        <div id="carouselExampleCaptions" className="carousel slide accueil_carousel" data-bs-ride="false">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                    className="active btn-slide" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className="btn-slide"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className="btn-slide"
                    aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./images/images/eliott-reyna-jCEpN62oWL4-unsplash.png" className="d-block w-100" alt="etudiants"/>
                    <div className="carousel-caption d-none d-md-block">

                    </div>
                </div>
                <div className="carousel-item">
                    <img src="./images/images/concert.png" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">

                    </div>
                </div>
                <div className="carousel-item">
                    <img src="./images/images/bonsPlans.png" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <button className="btn btn-carousel btn-outline-success search-button" type="submit"><a
                                className="nav-link" href="./lifeStyle.html">Aller voir les offres!</a></button>

                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span className="fleche-left carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span className="fleche-right carousel-control-next-icon" aria-hidden="true" style={{backgroundImage: `url("./images/images/Vectorfleche.png)`}}/>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </main>

    <main className="container">
        <div className="text-accueil">
            <h1>A l'affût</h1>

            <p> Dans notre site tu pourras trouver des réduction, des bons plans, des offres et beaucoup plus!
            </p>

        </div>


        <div className="container cat-accueil">
            <div className="row mt-5">
                <div className="col-md-12 col-12 rounded">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <figure className="hover-box bg-dark text-white">
                                <img src="./images/images/resto.png" alt="hover-box-first" className="w-100 img-thumbnail" />
                                <figcaption className="text-right">
                                    <h2 className="bg-accueil p-1 mb-1">Restaurants</h2>
                                    <h4>Aller voir la page</h4>
                                </figcaption>
                                <a href="./restaurants"></a>
                            </figure>
                        </div>
                        <div className="col-md-4 col-12">
                            <figure className="hover-box bg-dark text-white">
                                <img src="./images/images/evenement.png" alt="hover-box-second" className="w-100 img-thumbnail" />
                                <figcaption className="text-right">
                                    <h2 className="bg-accueil p-1 mb-1">Événements</h2>
                                    <h4>Aller voir la page</h4>
                                </figcaption>
                                <a href="./evenements"></a>
                            </figure>
                        </div>
                        <div className="col-md-4 col-12">
                            <figure className="hover-box bg-dark text-white">
                                <img src="./images/images/commerce1.png" alt="hover-box-third" className="w-100 img-thumbnail" />
                                <figcaption className="text-right">
                                    <h2 className="bg-accueil p-1 mb-1">Life Style</h2>
                                    <h4>Aller voir la page</h4>
                                </figcaption>
                                <a href="./lifeStyle"></a>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="container">
            <div className="row video">
                <div className="ratio ratio-16x9">
                    <video width="900" controls>
                        <source src="./images/photoSite/video-output-0D280D20-9DAB-46FE-8C8E-949BA5B874F8.mp4" type="video/mp4"/>
                    </video>
                </div>

            </div>
        </section>

     
    </main>

    </div>

    )
    
}

export default Accueil;