import { useState, useEffect } from 'react'
import ListGames from './components/ListGames.jsx'
import Form from './components/Form.jsx'


function App() {
  const [count, setCount] = useState(0);
  let [juegos, setGames] = useState([]);

  useEffect(() => {
    console.log(juegos)
  }, [juegos])

  return (
    <div  className="App">

      <Form setGames={setGames}></Form>
      <ListGames  juegos={juegos}></ListGames>
    </div>
  )
}

export default App
