import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <img src={"https://i0.wp.com/imagensemoldes.com.br/wp-content/uploads/2020/05/Figura-Filhote-Pato-PNG.png?fit=760%2C549&ssl=1"} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://pt.wikipedia.org/wiki/Pato"
          target="_blank"
          rel="noopener noreferrer"
        >
          Patos
        </a>
      </header>
    </div>
  );
}

export default Home;
