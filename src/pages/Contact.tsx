import styled from "styled-components";
import Header from "../components/header";

import React, { useContext, useEffect, useState, useRef } from "react";
import { LanguageContext } from "../translations/LanguageContext";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import "./locomotive-scroll.css";
// import { useNavigate } from "react-router-dom"; // navigate not used currently

//components
import ContactPreFooter from "../components/contactPreFooter";
import H2TextSpan from "../components/h2Text";
import Footer from "../components/Footer";

import Sidebar from "../components/sidebar";
import Wrapper from "../components/wrapper";
import MainContainer from "../components/mainContainer";
import LayoutContainer from "../components/layoutContainer";
import BottomContainer from "../components/bottomContainer";
import Footers from "../components/footers";
import ContentArea from "../components/contentArea";
import Divider from "../components/divider";
import H1TextSpan from "../components/h1Text";
//components

const { GoogleGenerativeAI } = require("@google/generative-ai");
const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
if (!apiKey) {
  console.warn(
    "REACT_APP_GEMINI_API_KEY não definida. O botão 'Fill with AI' irá falhar."
  );
}
const genAI = new GoogleGenerativeAI(apiKey || "");
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

const AboutSectionClipPath = styled.div`
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  max-width: 45rem;
  margin-left: 1rem;
  height: fit-content;
  h2 {
    font-size: 1.2rem;
  }
  margin-bottom: 0rem;
`;

const H2SimpleText = styled.h2`
  font-optical-sizing: auto;
  letter-spacing: -2px;
  font-weight: 300;
  font-style: normal;
  font-variation-settings: "slnt" 0;
  word-break: keep-all;
  font-family: "Inter", sans-serif;
  vertical-align: baseline;
  letter-spacing: -0.05rem;
  font-weight: 400;
  line-height: 1.5;
  max-width: 18rem;
`;

const IntroSection = styled.div`
  height: fit-content;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ContactFormDiv = styled.div`
  margin-left: 0px;
`;
const DividerDiv = styled.div`
  div {
    width: 100%;
    margin-top: 1rem;
  }
`;
const IntroTextWrapper = styled.div`
  margin-left: 1rem;
  margin-top: 8rem;
  max-width: 90rem;
  width: 100%;
  h1 {
    height: 2rem;
    margin-bottom: -2rem;
    font-size: calc(5rem + 0.5vw);
  }
  h2 {
    font-size: calc(5rem + 0.5vw);
    height: 2rem;

    span {
      font-size: calc(6rem + 0.5vw);
    }
  }

  div {
    clip-path: polygon(0% 0%, 100% 0%, 100% 270%, 0% 270%);
  }
  @media (max-width: 1300px) {
    margin-left: 0.5rem;
    h1 {
      height: 3rem;
      font-size: calc(4rem + 0.5vw);
    }
    h2 {
      font-size: calc(4rem + 0.5vw);
      height: 3rem;
      span {
        font-size: calc(5rem + 0.5vw);
      }
    }
  }
  @media (max-width: 1100px) {
    margin-left: 0.5rem;
    width: 100%;
    margin-bottom: 0;
    h1 {
      height: 2rem;
      font-size: calc(4rem);
    }
    h2 {
      font-size: calc(4rem);
      height: 2rem;
      span {
        font-size: calc(5rem);
      }
    }
  }
  @media (max-width: 610px) {
    h2 {
      font-size: calc(2.5rem);

      span {
        font-size: calc(2.6rem);
      }
    }
    margin-bottom: 1rem;
    h1 {
      height: 2.5rem;
      font-size: calc(3rem);
    }
    h2 {
      font-size: calc(3rem);
      height: 2rem;
      span {
        font-size: calc(3.5rem);
      }
    }
  }
  @media (max-width: 450px) {
    margin-bottom: 1rem;
  }
`;
const SubTittle = styled.div`
  @media (max-width: 600px) {
    h2 {
    }
    height: 5rem;
  }
`;
// Removed unused TextCourosselContainer and LeftArrow styled components
//contact form
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 86%;
  max-width: 1000px;
  margin: 2rem auto;
  margin-left: 1rem;
  h1 {
    margin: 0;
    font-size: 3rem;
  }
  input,
  textarea {
    font-family: "Inter", sans-serif;
    width: 100%;
    font-weight: 500;
    padding: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 0px;
    font-size: 1.1rem;
  }
  input:focus,
  textarea:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.secondary}
      inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.primary} !important;

    font-family: "Inter", sans-serif !important;
  }
  textarea {
    height: 220px;
    resize: none;
  }

  button {
    margin-top: 1rem;
    padding: 0.75rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    cursor: pointer;
    border: 2px;
    border-color: ${({ theme }) => theme.colors.primary};
    border-style: solid;
    border-radius: 0px;
    font-size: 1rem;
    transition: 0.3s;
    &:hover {
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.primary};
      border: 2px;
      border-color: ${({ theme }) => theme.colors.primary};
      border-style: dashed;
    }
  }
`;

const MensaggeHeader = styled.div`
  display: flex;
  margin: 0rem;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 0.5rem;
`;
//contatct form
interface AboutProps {
  toggleDarkTheme: () => void;
}

function Contact({ toggleDarkTheme }: AboutProps) {
  const containerRef = useRef(null);
  const [coverLoad, setCoverLoad] = useState(false);
  const [coverMenu, setCoverMenu] = useState(false);
  const [opharaimText, setOpharaimText] = useState("Don't be afraid");
  const [opharimClicked, setOpharimClicked] = useState(false);
  const { translations } = useContext(LanguageContext);
  const [showCarousel, setShowCarousel] = useState(false);
  //contactForm
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [btnState, setBtnState] = useState<"idle" | "sending" | "success">("idle");
  const [sendError, setSendError] = useState<string | null>(null);
  const [aiGenerating, setAiGenerating] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  //contactForm
  useEffect(() => {
    if (opharimClicked) {
      const fetchData = async () => {
        try {
          const prompt = translations.contact.promtForGem;
          const result = await model.generateContent([prompt]);
          setOpharaimText(result.response.text());
          console.log(result.response.text());
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [opharimClicked, translations.contact.promtForGem]);
  //
  const handleOpharimClick = () => {
    if (window.innerWidth >= 700) {
      setOpharimClicked(true);
    } else {
      setOpharimClicked(false);
    }
  };
  //

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setBtnState("sending");
    setSendError(null);
    try {
      const form = e.currentTarget as HTMLFormElement;
      const data = new FormData(form);
      if (!data.get("access_key")) {
        data.append("access_key", "f45243ef-b883-47ea-8b61-b42882c11d5b");
      }
      if (!data.get("from_name")) {
        data.append("from_name", "Portfolio Contact");
      }
      if (!data.get("subject")) {
        data.append("subject", "Contact Form from Portfolio");
      }
      try {
        const preview = Object.fromEntries(Array.from(data.entries()));
        if (preview["access_key"]) preview["access_key"] = "***masked***";
        console.log("[Web3Forms] Submitting payload:", preview);
      } catch {}
      const resp = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      console.log("[Web3Forms] Response status:", resp.status, "ok:", resp.ok);
      let json: any = null;
      try {
        json = await resp.json();
        console.log("[Web3Forms] Response JSON:", json);
      } catch (e) {
        try {
          const text = await resp.text();
          console.log("[Web3Forms] Response TEXT:", text?.slice(0, 500));
        } catch {}
      }
      if (!resp.ok || !json?.success) {
        throw new Error(json?.message || "Request failed");
      }
      setBtnState("success");
      // volta ao estado idle após alguns segundos
      setTimeout(() => setBtnState("idle"), 2000);
      form.reset();
      setEmail("");
      setName("");
      setMessage("");
    } catch (err) {
      console.error("[Web3Forms] Submit error:", err);
      const msg = err instanceof Error ? err.message : "Falha ao enviar.";
      setSendError(msg || "Falha ao enviar. Tente novamente.");
    } finally {
      console.log("[Web3Forms] Finalizando envio. sending=false");
      setSending(false);
    }
  };

  const handleFillAiClick = async () => {
    if (aiGenerating) return;
    setAiGenerating(true);
    setAiError(null);
    try {
      const urlLang = new URLSearchParams(window.location.search)
        .get("lang")
        ?.toLowerCase();
      let langLabel = "English";
      switch (urlLang) {
        case "br":
        case "pt":
        case "pt-br":
          langLabel = "Portuguese (Brazilian)";
          break;
        case "it":
          langLabel = "Italian";
          break;
        case "en":
        default:
          langLabel = "English";
      }
      const senderNameRaw: unknown = name;
      const senderName =
        typeof senderNameRaw === "string" ? senderNameRaw.trim() : "";
      const safeSender = senderName || "a prospective collaborator";
      const currentDraftRaw: unknown = message;
      const currentDraft =
        typeof currentDraftRaw === "string" ? currentDraftRaw.trim() : "";

      // Se já há um rascunho no campo message, peça para CONTINUAR e FINALIZAR
      // mantendo tom e idioma, sem repetir o que já foi escrito.
      const prompt =
        currentDraft.length > 0
          ? `You are an assistant that helps users finish their contact messages in ${langLabel}. The sender's name is "${safeSender}". Continue and complete the following partial message to Murilo Rocha, preserving tone and language. Keep it professional, warm, and concise. Do not repeat or rewrite the existing text; only add what is needed to complete it naturally. Avoid markdown, quotes, lists, emojis, and placeholders. Return ONLY the continuation text (no preface, no repetition of the original). End organically with a courteous sign-off including ${safeSender}.

PARTIAL MESSAGE START
${currentDraft}
PARTIAL MESSAGE END`
          : `Generate a professional, warm contact message in ${langLabel}. The sender's name is "${safeSender}". Write the message in first person from ${safeSender}, greet Murilo Rocha by name, briefly praise his portfolio, express interest in collaborating or working with him on future projects, and invite further conversation. Use 4 to 6 sentences. Avoid markdown, quotes, lists, emojis, placeholders. Return only the message text. End the message signed with ${safeSender}.`;

      const result = await model.generateContent([prompt]);
      const text = result.response.text().trim();

      // Função utilitária para dividir o texto em "palavras" preservando espaços/linhas
      const toChunks = (t: string): string[] => {
        const m = t.match(/\S+\s*/g);
        return m && m.length ? m : [t];
      };
      const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

      // Define prefixo (mantém rascunho já digitado) e anima a adição
      const prefix =
        currentDraft.length > 0
          ? currentDraft + (currentDraft.endsWith("\n") ? "" : "\n")
          : "";

      setMessage(prefix);
      const chunks = toChunks(text);
      for (const piece of chunks) {
        await sleep(85);
        setMessage(
          (prev: any) =>
            (typeof prev === "string" ? prev : String(prev)) + piece
        );
      }
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "Falha ao gerar mensagem.";
      setAiError(msg);
    } finally {
      setAiGenerating(false);
    }
  };

  // removed unused handleFillAiClick helper
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCarousel(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {}, [showCarousel]);

  return (
    <Wrapper>
      <MainContainer data-scroll-section>
        <Header
          homeText={translations.header.navigation.homeName}
          youAre={translations.header.navigation.youAre}
          aboutText={translations.header.navigation.about}
          contactText={translations.header.navigation.contact}
          closeText={translations.header.navigation.close}
          activePage="contact"
          coverLoad={coverLoad}
          setCoverLoad={setCoverLoad}
          coverMenu={coverMenu}
          setCoverMenu={setCoverMenu}
        />

        <LocomotiveScrollProvider
          options={{
            smooth: true,
            getDirection: true,
            getSpeed: true,
            multiplyer: 1,
            inertia: 0.8,
            smoothMobile: true,
            direction: "vertical",
            smartphone: { smooth: true, multiplyer: 2, inertia: 1.1 },
            tablet: { smooth: true, multiplyer: 2, inertia: 1.1 },
            smoothTouch: true,
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <main data-scroll-container ref={containerRef}>
            <LayoutContainer>
              <Sidebar></Sidebar>
              <ContentArea>
                <IntroSection>
                  {" "}
                  <IntroTextWrapper>
                    <H2TextSpan
                      classNameTag="h2-text-span-tittle"
                      Text={""}
                      TextHighlight={translations.contact.title}
                    />
                  </IntroTextWrapper>
                  <AboutSectionClipPath>
                    <SubTittle>
                      <H2SimpleText>
                        {" "}
                        {translations.contact.subTitle}
                      </H2SimpleText>
                    </SubTittle>
                  </AboutSectionClipPath>
                </IntroSection>
                <DividerDiv>
                  <Divider />
                </DividerDiv>
              </ContentArea>
              <Sidebar></Sidebar>
              <ContactFormDiv>
                <FormContainer>
                  <form name="contact" onSubmit={handleSubmit}>
                    <input
                      type="hidden"
                      name="access_key"
                      value="f45243ef-b883-47ea-8b61-b42882c11d5b"
                    />
                    <input
                      type="hidden"
                      name="from_name"
                      value="Portfolio Contact"
                    />
                    <input
                      type="hidden"
                      name="subject"
                      value="Contact Form from Portfolio"
                    />
                    {/* Web3Forms honeypot */}
                    <input
                      type="checkbox"
                      name="botcheck"
                      style={{ display: "none" }}
                    />
                    <H1TextSpan Text={translations.contact.form.email} />
                    <div className="input">
                      <label htmlFor="email"></label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <H1TextSpan Text={translations.contact.form.name} />
                    <div className="input">
                      <label htmlFor="name"></label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <MensaggeHeader>
                      <H1TextSpan Text={translations.contact.form.message} />
                      <button
                        type="button"
                        onClick={handleFillAiClick}
                        disabled={aiGenerating}
                        style={{
                          backgroundColor: aiGenerating ? "#facc15" : undefined,
                          borderColor: aiGenerating ? "#facc15" : undefined,
                          color: aiGenerating ? "#0b0b0b" : undefined,
                        }}
                      >
                        {aiGenerating ? "Gerando..." : "Completar com IA"}
                      </button>
                    </MensaggeHeader>
                    <div>
                      <label form="message"></label>
                      <textarea
                        name="message"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>
                    {aiError && (
                      <div role="alert" aria-live="assertive">
                        {aiError}
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={sending}
                      style={{
                        backgroundColor:
                          btnState === "sending"
                            ? "#facc15"
                            : btnState === "success"
                            ? "#22c55e"
                            : undefined,
                        borderColor:
                          btnState === "sending"
                            ? "#facc15"
                            : btnState === "success"
                            ? "#22c55e"
                            : undefined,
                        color:
                          btnState === "sending" || btnState === "success"
                            ? "#0b0b0b"
                            : undefined,
                      }}
                    >
                      {btnState === "sending"
                        ? "Sending..."
                        : btnState === "success"
                        ? "Sended!!!"
                        : "Send Message"}
                    </button>
                    {sendError && (
                      <div role="alert" aria-live="assertive">
                        {sendError}
                      </div>
                    )}
                  </form>
                </FormContainer>
              </ContactFormDiv>
            </LayoutContainer>
            <BottomContainer>
              <Footers>
                <div>
                  <ContactPreFooter
                    onContactClick={() => handleOpharimClick()}
                    ContactText={translations.footer.ContactText}
                    WantText={opharaimText}
                  />
                </div>

                <Footer
                  Disclaim={translations.footer.Disclaim}
                  ReachText={translations.footer.ReachText}
                  mailUrl={translations.footer.email}
                  instagramUrl={translations.footer.instagram}
                  githubUrl={translations.footer.github}
                />
              </Footers>
            </BottomContainer>
          </main>
        </LocomotiveScrollProvider>
      </MainContainer>
    </Wrapper>
  );
}

export default Contact;
