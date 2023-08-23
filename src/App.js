import './App.css';
import Heading from './components/heading/Heading';
import Input from './components/input/Input';
import nib from './assests/nib.png';
import Sound from './components/sound/Sound';
import PartOfSpeech from './components/partsofspeech/PartsOfSpeech';
import Synonym from './components/synonyms/Synonym';
import Antonym from './components/synonyms/Antonym';
import Details from './components/details/Details';
import InputProvider from './components/input/InputProvider';
import Github from './components/heading/Github';

function App() {
  return (
    <InputProvider>
      <div className='main'>
        <img src={nib} alt="nib-bg-img" className='bg-nib' />
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
