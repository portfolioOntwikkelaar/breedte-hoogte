
import React, {useState} from 'react'
import './index.css'

function App() {

  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div className="App">
      <div className="container">
        <h2 className="center">
          Calculator
          </h2>
          <form >
            <div>
              <label >
                Weight(lbs)
              </label>
              <input value={weight} />
            </div>
            <div>
              <label >
                Height(in)
              </label>
              <input value={height} />
            </div>
            <div>
              <button className='btn' type='submit'>Enter</button>
              <button className='btn btn-outline' type='submit'>Enter</button>
            </div>
          </form>

          <div className='center'>
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
          <div className="img-container">
            <img src={imgSrc} alt="" />
          </div>
          </div>      
    </div>
  );
}

export default App;
