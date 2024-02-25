import './App.css';
import { useState, useEffect } from 'react';

function App() {
  //Esse é padrão de useState e useEffect para fazer fetch API
  const [data, setdata] = useState({
    name: "",
    age: 0,
    date: "",
    programando: "",
  })
  useEffect(() => {
    fetch("/data").then((res) =>
      res.json().then((data) => {
        setdata({
          name: data.Name,
          age: data.Age,
          date: data.Date,
          programando: data.Programando,
        });
      })
    );
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>React/Flask</h1>
        <p>{data.name}</p>
        <p>{data.age}</p>
        <p>{data.date}</p>
        <p>{data.programando}</p>
      </header>
    </div>
  );
}

export default App;
