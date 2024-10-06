import React, { useEffect, useRef } from "react";
import styled from "styled-components";

declare global {
  interface Window {
    totalPurchases: number;
  }
}

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
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

const OphanimMeme = () => {
  const ophanimRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    function renderizarOphanim() {
      const containerAscii = ophanimRef.current;

      if (!containerAscii) {
        return;
      }

      let anguloA = 1;
      let anguloB = 2;
      let anguloA2 = 1;
      let anguloB2 = 2;
      let anguloA3 = 1;
      let anguloB3 = 2;
      const constanteK2 = 5.5;
      const constanteK3 = 60;
      const constanteK4 = 40;
      const raioR1 = 0.3;
      const raioR2 = 2.8; 
      const raioR1_2 = 0.4;
      const raioR2_2 = 2.2;
      const raioR1_3 = 0.35; 
      const raioR2_3 = 1.5;

      const caracteresLuminancia = ".,-~:;=!*#R@";

      function gerarPosicoesSemente() {
        const sementes: number[] = [];
        const quantidadeSementes = 20;
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

      function renderizarTorus(
        anguloA: number,
        anguloB: number,
        raioR1: number,
        raioR2: number,
        tela: any[],
        bufferZ: any[]
      ) {
        for (let theta = 0; theta < Math.PI * 2; theta += 0.07) {
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
              } else {
                tela[indice] = caractere;
              }
            }
          }
        }
      }

      function renderizarFrame() {
        let tela = Array(constanteK3 * constanteK3).fill(" ");
        let bufferZ = Array(constanteK3 * constanteK3).fill(0);

        renderizarTorus(anguloA, anguloB, raioR1, raioR2, tela, bufferZ); // First torus
        renderizarTorus(anguloA2, anguloB2, raioR1_2, raioR2_2, tela, bufferZ); // Second torus
        renderizarTorus(anguloA3, anguloB3, raioR1_3, raioR2_3, tela, bufferZ); // Third torus

        if (containerAscii != null) {
          containerAscii.innerHTML = tela.reduce((acumulador, caractere, i) => {
            acumulador += caractere;
            if ((i + 1) % constanteK3 === 0) acumulador += "<br>";
            return acumulador;
          }, "");

          anguloA += 0.03; // Rotation of the first torus
          anguloB += 0.02;

          anguloA2 += 0.04; // Rotation of the second torus
          anguloB2 += 0.03;

          anguloA3 += 0.05; // Rotation of the third torus
          anguloB3 += 0.04;
          requestAnimationFrame(renderizarFrame);
        }
      }

      renderizarFrame();
    }

    renderizarOphanim();
  }, []);

  return <ArtDiv id="ascii-art" ref={ophanimRef}></ArtDiv>;
};

export default OphanimMeme;
