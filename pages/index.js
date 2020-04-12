import Head from "next/head";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.scss";

const Home = () => (
    <div style={{ margin: 0, padding: 0 }}>
        <Head>
            <title>Valentin Cassus - Développeur & Web Designer 👾</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            ></meta>
            <link href="/favicon.png" role="icon" />
        </Head>

        <main className={styles.layout}>
            <div className={styles.header}>
                <img src="/logo.svg" width={200} />
            </div>

            <div className={styles.imgContainer}>
                <div className={styles.scrollIndicator} />
                <img
                    className={styles.heroImg}
                    src="/assets/heroweb.png"
                    alt="hero-img"
                />
            </div>

            <div className={styles.headline}>
                <p>Valentin Cassus, développeur / designer à Bordeaux.</p>
                <span>
                    Travaille en collaboration avec les entreprises pour créer
                    des identités visuelles, des sites web et du branding.
                </span>

                <div className={styles.circle}></div>
            </div>

            <div className={styles.work}>
                <div className={styles.titleOverlay}>
                    <p className={styles.big}>work</p>
                </div>

                <div className={styles.workDescription}>
                    <h2>Mon travail</h2>
                    <span>
                        J'aide les marques dans leur communication web et
                        graphique en mettant en place un pont entre elles et les
                        besoins de leurs utilisateurs.
                    </span>
                    <p>
                        J'aime l'idée de pouvoir être impliqué dans les
                        différentes phase du projet, qu'il s'agisse de la
                        création d'une identité visuelle, de web design ou
                        encore de packaging. Vous pouvez voir quelques uns des
                        projets que j'ai réalisé juste en dessous.
                    </p>
                </div>
            </div>

            <div style={{ marginBottom: "7%" }}>
                <div className={styles.cardPreview}>
                    <div>
                        <img src="/assets/mms-preview.png" alt="MMS Preview" />
                    </div>
                    <div>
                        <img src="/assets/SPA-preview.png" alt="SPA Preview" />
                    </div>
                    <div>
                        <img
                            src="/assets/mtogide-preview.png"
                            alt="Mtogide Preview"
                        />
                    </div>
                    <div>
                        <img
                            src="/assets/infinca_preview.png"
                            alt="Infinca Preview"
                        />
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                    }}
                >
                    <p
                        style={{
                            fontWeight: 800,
                            fontSize: "1.15rem",
                            color: "#6969ff",
                        }}
                    >
                        voir plus
                    </p>
                    <FontAwesomeIcon
                        style={{ color: "#6969ff", width: 15, marginLeft: 20 }}
                        icon={faChevronRight}
                    />
                </div>
            </div>

            <div className={styles.about}>
                <div className={styles.circle} />
                <div className={styles.aboutDescription}>
                    <h2>A propos</h2>
                    <span>
                        Passionné par mon travail, j'ai commencer en autodidacte
                        il y'a un peu plus de quatre ans avec les bases du code.
                    </span>
                    <p>
                        Afin de me professionnaliser, j'ai suivi une formation
                        sur Bordeaux de développement web / chef de projet en
                        2019.
                    </p>
                    <p>
                        Depuis, je me suis perfectionner dans les domaines du
                        design et du développement web, notamment avec React, ce
                        qui me permet d'intervenir dans des domaines très variés
                        comme la conception de logo ou la création d'un site
                        web.
                    </p>
                </div>

                <div className={styles.titleOverlay}>
                    <p className={styles.big}>about</p>
                </div>

                <div className={styles.timelineBar}>
                    <img src="/assets/timeline.png" alt="Timeline about" />
                </div>
            </div>

            <div className={styles.techno}>
                <div className={styles.circle} />
                <div className={styles.technoImg}>
                    <img
                        src="/assets/logos-technos/react.png"
                        alt="React logo"
                    />
                    <img
                        src="/assets/logos-technos/gatsby.png"
                        alt="Gatsby logo"
                    />
                    <img src="/assets/logos-technos/node.png" alt="Node logo" />
                    <img
                        src="/assets/logos-technos/mongo.png"
                        alt="Mongo DB logo"
                    />
                    <img
                        src="/assets/logos-technos/graphql.png"
                        alt="GraphQL logo"
                    />
                    <img
                        src="/assets/logos-technos/wordpress.png"
                        alt="Wordpress logo"
                    />
                    <img src="/assets/logos-technos/xd.png" alt="XD logo" />
                    <img
                        src="/assets/logos-technos/illustrator.png"
                        alt="Illustrator logo"
                    />
                    <img
                        src="/assets/logos-technos/photoshop.png"
                        alt="Photoshop logo"
                    />
                </div>
                <div className={styles.technoDescription}>
                    <h3>Technos que je sais utiliser</h3>

                    <p style={{ marginBottom: 40 }}>
                        Grâce à mon profil, je sais aussi bien utiliser React,
                        Gatsby ou Wordpress pour créer des sites web, qu'Adobe
                        XD, Photoshop ou Illustrator pour la création de
                        visuels.
                    </p>

                    <p>
                        <strong>Développement</strong> : React, Gatsby, Node JS,
                        HTML, CSS, JS, Wordpress, MongoDB, GrapQL.
                    </p>
                    <p style={{ marginTop: 30 }}>
                        <strong>Design</strong> : Illustrator, Photoshop, XD,
                        InDesign
                    </p>
                </div>
            </div>

            <div className={styles.contact}>
                <div className={styles.circle} />
                <p className={styles.bigContact}>Restons en contact</p>
                <p>
                    N'hésitez pas à me contacter pour démarrer un projet
                    ensemble.
                </p>
                <button>
                    <a href="mailto:cassusval@gmail.com?subject=Je%20souhaite%20commencer%20un%20projet!">
                        M'envoyer un mail
                    </a>
                </button>
            </div>
        </main>

        <footer className={styles.footer}>
            <div className={styles.infos}>
                <div>
                    <div>
                        <h4>Informations utiles</h4>
                        <ul>
                            <li>Mentions légales</li>
                            <li>Plan du site</li>
                        </ul>
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <p>Valentin Cassus</p>
                        <p>Bordeaux, France</p>
                        <a href="mailto:cassusval@gmail.com">
                            cassusval@gmail.com
                        </a>
                    </div>
                </div>
                <div>
                    <h4>Navigation</h4>
                    <ul>
                        <li>Accueil</li>
                        <li>A propos</li>
                        <li>Portfolio</li>
                    </ul>
                </div>
                <div>
                    <h4>Réseaux sociaux</h4>
                    <ul>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>
            <div className={styles.coffee}>
                <p>site web réalisé avec beaucoup de musique et de café</p>
            </div>
            <div className={styles.copy}>
                <p>
                    Copyright &copy; {new Date().getFullYear()} Valentin Cassus.
                    Tout droits réservés.
                </p>
            </div>
        </footer>
    </div>
);

export default Home;
