import { useState, useEffect } from 'react';
import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last name: {props.lastName}</h2>
      <h3>Age: {props.age}</h3>
    </>
  )
}

const App = () => {
  const name = 'kelli';
  const isNull = null;

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    // happening to render
    alert("You've changed the counter to "+counter);
    //setCounter(100);
  }, [counter])

  // JSX
  return (
    <div className="App">
      hello world! I'm {name}, this is my first react app!!

      {
        isNull ?
          (
            <> not null </>
          )
          :
          (
            <><h1>null</h1>
              <p>ha</p></>
          )
      }

      <Person name="Kelli" lastName="Jung" age={28} />
      <Person name="John" lastName="Doe" age={24} />

      <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>+</button>
    </div>
  );
}

export default App;
