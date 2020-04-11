import Head from "next/head";
import styles from "./index.module.scss";

const Home = () => (
    <div>
        <Head>
            <title>Valentin Cassus - Développeur & Web Designer 👾</title>
            <link href="/favicon.png" role="icon" />
        </Head>

        <main className={styles.layout}>
            <div className={styles.header}>
                <img src="/logo.svg" width={150} />
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

                <p
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        fontWeight: 800,
                        fontSize: "1.15rem",
                    }}
                >
                    voir plus
                </p>
            </div>

            <div className={styles.about}>
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
            </div>
        </main>
    </div>
);

export default Home;