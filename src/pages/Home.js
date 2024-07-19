import styles from './Home.module.css'; 
import {Link} from 'react-router-dom';

function Home(){
    return(
        <div className={styles.home}>
            <div className={styles.inicio}>
                <p className={styles.tituloInicio}>Comissão Própria de Avaliação  CPA</p>
                <p className={styles.intro}>Bem-vindo ao Sistema de Geração de Relatórios da CPA-UEM. Este site foi desenvolvido pela Comissão Própria de Avaliação (CPA) da Universidade Estadual de Maringá (UEM) com o objetivo de facilitar a geração e o acesso a relatórios detalhados e precisos. Nossa plataforma permite a coleta, armazenamento e análise de dados de forma eficiente, oferecendo ferramentas intuitivas e robustas para apoiar decisões estratégicas e melhorar continuamente a qualidade acadêmica e administrativa da UEM.</p>
            </div>
            <div className={styles.sessions}>
                <div className={styles.sessionBox}>
                    <p className={styles.tag}>Tutorial</p>
                    <p className={styles.resume}>Tutorial mostrando como inserir e gerar um relatório.</p>
                    <Link to='/tutorial'>
                        <button type='button' className={styles.homeButton}>Ir para Tutorial</button>
                    </Link>
                </div>
                <div className={styles.sessionBox}>
                    <p className={styles.tag}>Inserir Arquivo</p>
                    <p className={styles.resume}>Inserir arquivo CSV para leitura e geração de dados.</p>
                    <Link to='/importar'>
                        <button type='button' className={styles.homeButton}>Inserir Csv</button>
                    </Link>
                </div>
                <div className={styles.sessionBox}>
                    <p className={styles.tag}>Gerar relatório</p>
                    <p className={styles.resume}>Gerar os relatórios após leitura do CSV e ter gerados os dados</p>
                    <Link to='/gerar_relatorio'>
                        <button type='button' className={styles.homeButton}>Gerar Relatório</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home
