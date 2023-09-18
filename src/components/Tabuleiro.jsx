import React from 'react';
import Pecas from '@/components/Pecas'
import styles from '@/styles/tabuleiro.module.css';

const Tabuleiro = () => {
  const renderizarquadrados = () => {
    const quadrados = [];

    for (let linha = 0; linha < 8; linha++) {
      for (let coluna = 0; coluna < 8; coluna++) {
        const isWhite = (linha + coluna) % 2 === 0;
        let corPeca = null;

        if ((linha < 3) && isWhite) {
          corPeca = 'red';
        } else if ((linha > 4) && isWhite) {
          corPeca = 'blue';
        }

        quadrados.push(
          <div
            key ={`${linha}-${coluna}`}
            className={`${styles.quadrados} ${isWhite ? styles.quadradoBranco : styles.quadradopreto}`}
          >
            {corPeca && <Pecas color={corPeca} />}
          </div>
        );
      }
    }

    return quadrados;
  };

  return <div className={styles.tabuleiro}>{renderizarquadrados()}</div>;
};

export default Tabuleiro;

