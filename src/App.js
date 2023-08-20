import './App.css';
import Heading from './components/heading/Heading';
import Input from './components/input/Input';
import nib from './assests/nib.png';
import Sound from './components/sound/Sound';
import Noun from './components/partsofspeech/Noun';
import Verb from './components/partsofspeech/Verb';
import Adjective from './components/partsofspeech/Adjective';
import Synonym from './components/synonyms/Synonym';
import Antonym from './components/synonyms/Antonym';
import Details from './components/details/Details';
import InputState from './components/input/InputState';

function App() {

  return (
    <InputState>
      <div className='main'>
        <img src={nib} alt="nib-bg-img" className='bg-nib' />
        <div className="container">
          <div className="left">
            <Heading />
            <Sound />
            <Synonym />
            <Antonym />
            <Details />
          </div>
          <div className="right">
            <Input />
            <Noun />
            <Verb />
            <Adjective />
          </div>
        </div>
      </div>
    </InputState>

  );
}

export default App;
