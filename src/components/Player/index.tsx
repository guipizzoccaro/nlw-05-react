import styles from './styles.module.scss';

export function Player() {


    return (
        <div className={styles.playerContainer}>
            <header>
                <img src="./playing.svg" alt="" />
                <strong>Tocando Agora</strong>
            </header>

            <div className={styles.emptyPlayer}>
                <strong>Selecione um podcast para ouvir</strong>
            </div>

            <footer className={styles.empty}>
                <div className={styles.progress}>
                    <span>00:00</span>
                    <div className={styles.slider}>
                        <div className={styles.emptySlider} />
                    </div>

                    <span>00:00</span>
                </div>


                <div className={styles.buttons}>
                    <button type="button">
                        <img src="/shuffle.svg" alt="Embaralhar" />
                    </button>

                    <button type="button">
                        <img src="/play-previous.svg" alt="Tocar música anterior" />
                    </button>

                    <button type="button" className={styles.playButton}>
                        <img src="/play.svg" alt="Tocar" />
                    </button>

                    <button type="button">
                        <img src="/play-next.svg" alt="Tocar próxima" />
                    </button>

                    <button type="button">
                        <img src="/repeat.svg" alt="Repetir" />
                    </button>

                </div>
            </footer>
        </div>
    );
}
// O next por padraod eixa a pasta public
    //e toda img que tem la pode ser usada desse jeito que ta ai oh /logo

// O module serve para que a folha de stilos seja apenas para um compenent expecifico 
    //ou seja não vai afetar nenhum outro da app