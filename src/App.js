import './App.css';
import logo from './nyaa-kart.png';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} alt='mockBee logo' width='325' height='100' />
        <h1 className='brand-title'>
          We are Coming <span>Very Soon!</span>
        </h1>
        <div className='links'>
          <a
            href='https://nyaa-ekart.netlify.app/'
            target='_blank'
            rel='noreferrer'>
            Live Website
          </a>
          <a
            href='https://github.com/way2nizam/nyaa-ekart'
            target='_blank'
            rel='noreferrer'>
            GitHub
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
