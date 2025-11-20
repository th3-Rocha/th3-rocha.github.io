import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0.5rem 0;
`;

const Track = styled.div`
  display: flex;
  align-items: center;
  will-change: transform;
`;

const Item = styled.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 1.25rem;
  margin: 0 0.25rem;
  border-radius: 9999px;
  border: 1px solid ${({ theme }) => theme.colors.footerLine};
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 600;
  letter-spacing: 0.3px;
  cursor: default;
  user-select: none;
  font-size: clamp(0.85rem, 1.2vw, 1rem);
  transition: transform 0.25s ease, color 0.25s ease, border-color 0.25s ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

const STACKS = [
  "React",
  "Next.js",
  "NestJS",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Styled-Components",
  "CSS",
  "HTML5",
  "Node.js",
  "Express",
  "Prisma",
  "PostgreSQL",
  "MongoDB",
  "Python",
  "FastAPI",
  "Django",
  "C++",
  "C",
  "Docker",
  "Kubernetes",
  "AWS",
  "GSAP",
];

const CarouselComp: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Optimized infinite scroll animation
    const total = STACKS.length;
    const tween = gsap.to(track, {
      xPercent: -100 * total,
      ease: "none",
      duration: total * 4,
      repeat: -1,
      modifiers: {
        xPercent: gsap.utils.unitize((val) => {
          const n = parseFloat(String(val));
          return n % (100 * total);
        }),
      },
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <Wrapper ref={wrapperRef} aria-label="Carrossel de stacks e tecnologias">
      <Track ref={trackRef}>
        {[...STACKS, ...STACKS].map((label, idx) => (
          <Item key={`${label}-${idx}`}>{label}</Item>
        ))}
      </Track>
    </Wrapper>
  );
};

export default CarouselComp;
