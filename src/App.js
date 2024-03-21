import React from 'react';
import Post from './Post';
import Header from './Header';
import Intro from './Intro';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header/>
      <Intro/>
      <div id="cardscolumn" style={{ display: 'flex', flexDirection: 'column', width: '1440px', height: '1152px', padding: '0px 160px 0px 160px', gap: '40px' }}>
        <Post/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;