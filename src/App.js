import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header titulo="El Heraldo"/>
        <Navbar />
        <Content />
        <Footer />
      </header>
    </div>
  );
}

export default App;
