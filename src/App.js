
import React, {useState} from 'react'
import './index.css'

function App() {

  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  let imgSrc = ''

  let calcBmi = (event) => {
    event.preventDefault()

    if(weight === 0 || height === 0) {
      alert('Write a weight and height')
    } else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))
    }
  }

  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="App">
      <div className="container">
        <h2 className="center">
        Body Mass Index Calculator
          </h2>
          <form onSubmit={calcBmi} >
            <div>
              <label >
                Weight(lbs)
              </label>
              <input value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div>
              <label >
                Height(in)
              </label>
              <input value={height} onChange={(event) => setHeight(event.target.value)} />
            </div>
            <div>
              <button className='btn' type='submit'>Enter</button>
              <button className='btn btn-outline' type='submit' onClick={reload}>Reload</button>
            </div>
          </form>

          <div className='center'>
            <h3>Your Body Mass Index is: {bmi}</h3>
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
