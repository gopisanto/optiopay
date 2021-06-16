import { Fragment, useState } from 'react';

import Input from './Input';
import RomanNumerals from './RomanNumerals';
import './App.css';

function App() {
  const [decNum, setDecNum] = useState();
  const [romanNum, setRomanNum] = useState();

  const calculate = () => {
    if (!romanNum) {
      setRomanNum(RomanNumerals.toRoman(decNum));
    } else {
      setDecNum(RomanNumerals.fromRoman(romanNum));
    }
  }

  const handleChange = (initiator, value) => {
    if (initiator === 'DECIMAL') {
      setDecNum(value);
      setRomanNum('');
    } else {
      setRomanNum(value.toUpperCase());
      setDecNum('');
    }
  }

  return (
    <Fragment>
      <header>
        <label>Decimal to Roman converter and vice versa</label>
      </header>
      <div className="App">
        <Input
          type='text'
          placeholder='Enter decimal here'
          onChange={({ target: { value } }) => handleChange('DECIMAL', value)}
          value={decNum}
          title="Decimal Number"
        />
        <Input
          type='text'
          placeholder='Enter roman number here'
          onChange={({ target: { value } }) => handleChange('ROMAN', value)}
          value={romanNum}
          title="Roman Number"
        />
        <button onClick={calculate}>Calculate</button>
      </div>
    </Fragment>
  );
}

export default App;
