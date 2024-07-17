import styles from './Home.module.css'; 

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
                </div>
                <div className={styles.sessionBox}>
                    <p className={styles.tag}>Inserir Arquivo</p>
                    <p className={styles.resume}>Inserir arquivo CSV para leitura e geração de dados.</p>
                </div>
                <div className={styles.sessionBox}>
                    <p className={styles.tag}>Gerar relatório</p>
                    <p className={styles.resume}>Gerar os relatórios após leitura do CSV e ter gerados os dados</p>
                </div>
            </div>
        </div>
    );
}

export default Home
