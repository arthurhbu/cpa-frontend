import styles from './Home.module.css'; 

function Home(){
    return(
        <div className={styles.home}>
            <div className={styles.inicio}>
                <h1><span>Comissão Própria de Avaliação - CPA</span></h1>
                <p>Bem-vindo ao Sistema de Geração de Relatórios da CPA-UEM. Este site foi desenvolvido pela Comissão Própria de Avaliação (CPA) da Universidade Estadual de Maringá (UEM) com o objetivo de facilitar a geração e o acesso a relatórios detalhados e precisos. Nossa plataforma permite a coleta, armazenamento e análise de dados de forma eficiente, oferecendo ferramentas intuitivas e robustas para apoiar decisões estratégicas e melhorar continuamente a qualidade acadêmica e administrativa da UEM.</p>
            </div>
        </div>
    );
}

export default Home
