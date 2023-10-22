import './App.css';
import {useState} from 'react'

function App() {
  const [boxColor, setBoxColor] = useState('white');
  const [colorList, setColorList] = useState([
    'red',
    'green',
    'blue',
    'yellow',
    'cyan',
    'orange',
    'violet',
    'pink',
    'purple',
    'brown',
    'black',
    'lavender',
    'lightblue',
    'grey'
  ]);

  const handleColorClick = (color) => {
    setBoxColor(color);
  };
  return (
    <div className="App">
      <h1>Color Picker</h1>
      <div className="box" style={{ backgroundColor: boxColor }}>
        <div className="colors">
          {colorList.map((color) => (
            <div
              className="color"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
        <button>Pick A Color</button>
      </div>
    </div>
  );
}

export default App;
