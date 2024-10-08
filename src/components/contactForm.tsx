import React, { useState } from "react";
import styled from "styled-components";
import H2TextSpan from "./h2Text";
import H1TextSpan from "./h1Text";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 80%;
  margin: 2rem auto;
  margin-left: 1rem;
  h1 {
    margin: 0;
    font-size: 3rem;
  }
  input,
  textarea {
    font-family: "Cormorant Garamond", serif;
    width: 100%;
    font-weight: 600;
    padding: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 0px;
    font-size: 1.5rem;
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

    font-family: "Cormorant Garamond", serif !important;
  }
  textarea {
    height: 100px;
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

interface ContactFormProps {
  email?: string;
  name?: string;
  message?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  email: initialEmail = "",
  name: initialName = "",
  message: initialMessage = "",
}) => {
  const [email, setEmail] = useState(initialEmail);
  const [name, setName] = useState(initialName);
  const [message, setMessage] = useState(initialMessage);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name || !message) {
      alert("Please fill in all fields.");
      return;
    }
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <H1TextSpan Text="Email" />
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <H1TextSpan Text="Name" />
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <MensaggeHeader>
          <H1TextSpan Text="Menssage" />
          <button type="button">I.A Fullfil</button>
        </MensaggeHeader>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </FormContainer>
  );
};

export default ContactForm;
