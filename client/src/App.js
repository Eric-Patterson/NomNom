import { useEffect, useState } from 'react'

import './App.css';

const SuperheroRow = ({name, alterEgo, homeCity}) => (
  <tr>
    <td>{name}</td>
    <td>{alterEgo}</td>
    <td>{homeCity}</td>
  </tr>
)


function App() {

  const [superheroes,setSuperheroes] = useState([])
  
  useEffect(() => {
    async function fetchData() {
      console.log('Fetching superhero data!')
      let fetchResult = await fetch("/api/superhero")
      let superheroList = await fetchResult.json()
      setSuperheroes(superheroList)  
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <h1>Superhuman List</h1>
      <table style={ { margin: "auto" } }>
        <thead>
          <tr>
            <th>Name</th>
            <th>Alter Ego</th>
            <th>Home City</th>
          </tr>
        </thead>
        <tbody>
          {
            superheroes.map((hero, index) => (
              <SuperheroRow key={index} name={hero.superheroName} alterEgo={hero.alterEgo} homeCity={hero.homeCity} />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
