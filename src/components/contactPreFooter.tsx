import React, { useEffect, useRef } from "react";
import styled from "styled-components";

// Extendendo a interface Window
declare global {
  interface Window {
    totalPurchases: number;
  }
}

const ExtContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.main};
  pointer-events: none;
  @media (max-width: 1100px) {
    grid-template-columns: 0fr 4fr;
    
  margin-left: 2rem;
  }
`;
const ExtContainer2 = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  pointer-events: none;
`;
const BottomLine = styled.div`
  height: 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.footerLineHard};
  margin-left: 3rem;
  margin-right: 3rem;
  width: calc(100% - 5rem);

  @media (max-width: 1100px) {
    margin-left: 2rem;
  }
  @media (max-width: 600px) {
    width: calc(100% - 4rem);
  }
`;
const ArtContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-left: 1px solid ${({ theme }) => theme.colors.footerLine};
  
`;
const ArtDiv = styled.div`
  text-align: initial;
  text-justify: initial;
  text-indent: initial;
  text-transform: none;
  line-height: normal;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  letter-spacing: normal;
  word-spacing: normal;
  white-space: normal;
  pointer-events: auto;
  font-family: monospace;
  line-height: 8px;
  margin-left: 50%;
  margin-right: 50%;
`;
const FooterLeft = styled.div`
  margin-bottom: 0;
  pointer-events: none;
`;

interface FooterProps {
  WantText: string;
  ContactText: string;
  onContactClick: () => void;
}

const ContactPreFooter: React.FC<FooterProps> = ({
  WantText,
  ContactText,
  onContactClick,
}) => {
  const donutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function renderizarRosquinha() {
      const containerAscii = donutRef.current;

      if (!containerAscii) {
        return;
      }

      let anguloA = 0; // Ângulo de rotação A
      let anguloB = 0; // Ângulo de rotação B
      const constanteK2 = 7;
      const constanteK3 = 50; // Aumentado para mais detalhes
      const constanteK4 = 40; // Ajuste de fator de escala
      const raioR1 = 1.0;
      const raioR2 = 2.5;

      const caracteresLuminancia = ".,-~:;=!*#R@";

      function gerarPosicoesSemente() {
        const sementes: number[] = [];
        const quantidadeSementes = 20; // Número de sementes
        const espacamentoSementes = Math.floor(
          (constanteK3 * constanteK3) / quantidadeSementes
        );

        for (let i = 0; i < quantidadeSementes; i++) {
          sementes.push(i * espacamentoSementes);
        }

        return sementes;
      }

      const sementesPredefinidas = gerarPosicoesSemente();
      let posicoesSementes: number[] = [];

      function inicializarSementes(total: number) {
        const maximoSementes = sementesPredefinidas.length;
        const sementesParaColorir = Math.min(total, maximoSementes);
        posicoesSementes = sementesPredefinidas.slice(0, sementesParaColorir);
      }

      function aguardarTotalCompras(callback: () => void) {
        if (typeof window.totalPurchases !== "undefined") {
          callback();
        } else {
          setTimeout(() => aguardarTotalCompras(callback), 100);
        }
      }

      aguardarTotalCompras(() => {
        inicializarSementes(window.totalPurchases);
        renderizarFrame();
      });

      function renderizarFrame() {
        let tela = Array(constanteK3 * constanteK3).fill(" ");
        let bufferZ = Array(constanteK3 * constanteK3).fill(0);

        for (let theta = 0; theta < Math.PI * 2; theta += 0.07) {
          // Ajuste do tamanho do passo
          for (let phi = 0; phi < Math.PI * 2; phi += 0.02) {
            const cosTheta = Math.cos(theta);
            const sinTheta = Math.sin(theta);
            const cosPhi = Math.cos(phi);
            const sinPhi = Math.sin(phi);

            const circuloX = raioR2 + raioR1 * cosTheta;
            const circuloY = raioR1 * sinTheta;

            const x =
              circuloX *
                (Math.cos(anguloB) * cosPhi +
                  Math.sin(anguloA) * Math.sin(anguloB) * sinPhi) -
              circuloY * Math.cos(anguloA) * Math.sin(anguloB);
            const y =
              circuloX *
                (Math.sin(anguloB) * cosPhi -
                  Math.sin(anguloA) * Math.cos(anguloB) * sinPhi) +
              circuloY * Math.cos(anguloA) * Math.cos(anguloB);
            const z =
              constanteK2 +
              Math.cos(anguloA) * circuloX * sinPhi +
              circuloY * Math.sin(anguloA);

            const inversoZ = 1 / z;
            const posX = Math.floor(
              constanteK3 / 2 + constanteK4 * inversoZ * x
            );
            const posY = Math.floor(
              constanteK3 / 2 - constanteK4 * inversoZ * y
            );

            if (
              posX < 0 ||
              posX >= constanteK3 ||
              posY < 0 ||
              posY >= constanteK3
            )
              continue;

            const indice = posX + posY * constanteK3;

            const luminancia =
              cosPhi * cosTheta * Math.sin(anguloB) -
              Math.cos(anguloA) * cosTheta * sinPhi -
              Math.sin(anguloA) * sinTheta +
              Math.cos(anguloB) *
                (Math.cos(anguloA) * sinTheta -
                  cosTheta * Math.sin(anguloA) * sinPhi);

            if (luminancia > 0 && inversoZ > bufferZ[indice]) {
              bufferZ[indice] = inversoZ;
              const valorLuminancia = Math.floor(luminancia * 8);
              const luminanciaLimitada = Math.max(
                0,
                Math.min(valorLuminancia, caracteresLuminancia.length - 1)
              );
              const caractere = caracteresLuminancia[luminanciaLimitada];

              if (posicoesSementes.includes(indice)) {
                tela[indice] = `<span class="semente">${caractere}</span>`;
                console.log(
                  `Semente colorida no índice: ${indice} (x: ${posX}, y: ${posY})`
                );
              } else {
                tela[indice] = caractere;
              }
            }
          }
        }

        if (containerAscii != null) {
          containerAscii.innerHTML = tela.reduce((acumulador, caractere, i) => {
            acumulador += caractere;
            if ((i + 1) % constanteK3 === 0) acumulador += "<br>";
            return acumulador;
          }, "");

          anguloA += 0.03; // Rotação mais lenta
          anguloB += 0.02;
          requestAnimationFrame(renderizarFrame);
        }
      }

      renderizarFrame();
    }

    renderizarRosquinha();
  }, []);

  return (
    <ExtContainer2>
      <ExtContainer>
        <FooterLeft></FooterLeft>
        <ArtContainer>
          <ArtDiv id="ascii-art" ref={donutRef}></ArtDiv>
        </ArtContainer>
      </ExtContainer>
      <BottomLine />
    </ExtContainer2>
  );
};

export default ContactPreFooter;
