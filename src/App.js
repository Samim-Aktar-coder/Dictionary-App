import './App.css';
import NibImg from './assests/nib.png';
import { Heading, Input, Sound, PartOfSpeech, Synonym, Antonym, Details, InputProvider, Github } from './components';

function App() {
  return (
    <InputProvider>
      <div className='main'>
        <img src={NibImg} alt="nib-bg-img" className='bg-nib' />
        <Heading />
        <div className="container">
          <div className="left">
            <Sound />
            <Synonym />
            <Antonym />
            <Details />
          </div>
          <div className="right">
            <Input />
            <PartOfSpeech />
          </div>
        </div>
        <Github />
      </div>
    </InputProvider>

  );
}

export default App;
