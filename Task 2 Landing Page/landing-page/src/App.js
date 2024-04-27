import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import CardSection from './Components/Cards/cards';
import Midcontent from './Components/Mid-Tab/content';
import ContactForm from './Components/contact/contact';
import MainContent from './Components/main-content/MainContent';
import Footer from './Components/Footer/footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MainContent />
        <div className="card-titles">
          <CardSection />
        </div>
        <div className="midline-content">
          <Midcontent />
        </div>
        <div className="contact">
          <ContactForm />
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
