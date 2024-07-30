import styles from './Importar.module.css';
import upload_logo from '../img/upload_logo.png';
import { useDropzone } from 'react-dropzone';
import {useMemo} from 'react';
import { useCallback, useState } from 'react';


const baseStyle = {
    backgroundColor: 'white',
    textAlign: 'center',
    maxWidth: '25em',
    minHeight: '30em',
    padding: '5em',
    width: '40%',
    borderWidth: '2px',
    borderRadius: '10px',
    borderColor: '#c5c4c4',
    borderStyle: 'dashed',
    transition: 'border .24s ease-in-out'
  };
  
  const focusedStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };



function Importar(){
    const [files, setFiles] = useState([])

    const onDrop = useCallback(acceptedFiles => {
        if(acceptedFiles?.length) { 
            console.log(acceptedFiles)
        }
    }, [])

    const {
        getRootProps, 
        acceptedFiles,
        getInputProps,
        isFocused, 
        isDragAccept,
        isDragReject,
    } = useDropzone({ 
            onDrop , 
            maxFiles: 1, 
            accept: {
                'text/csv': ['.csv'],
                'application/csv': [],
                'text/x-csv': [],
                'text/comma-separated-values': [],
                'text/x-comma-separated-values': []
            }})
    
    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);

    return(
        <div className={styles.importar}>
            <div className={styles.intro}>
                <p className={styles.titulo}>Inserir Arquivo</p>
                <p className={styles.infos}>
                    Inserir arquivo CSV para coletar e gerar novas informações importantes. O arquivo após ser inserido no banco será gerado novas informações utilizando um IA, talvez demore um pouco. A barra de processo será mostrado aqui. Importe um arquivo por vez para não gerar problemas.
                </p>
            </div>
            <div className={styles.sessionProcArq}>
                <div {...getRootProps({style})}>
                    <input {...getInputProps()}/>
                        <img src={upload_logo} alt='upload_logo' className={styles.responsiveLogo} />
                        <p className={styles.procurarArquivos__text}>Arraste e solte o arquivo ou</p>
                        <button className={styles.procurarButton}>Procurar</button>
                        <p className={styles.procurarArquivos_arqSuportados}>Arquivos suportados: CSV </p>
                </div>
            </div>
        </div>
    );
}

export default Importar
