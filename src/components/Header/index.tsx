import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';


import styles from './styles.module.scss';

export function Header() {
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    });

    return (
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Logo Podcastr" />

            <p>O melhor para você ouvir, sempre</p>

            <span>{currentDate}</span>
        </header>
    );
}
// O next por padraod eixa a pasta public
    //e toda img que tem la pode ser usada desse jeito que ta ai oh /logo

// O module serve para que a folha de stilos seja apenas para um compenent expecifico 
    //ou seja não vai afetar nenhum outro da app