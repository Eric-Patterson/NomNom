import { useEffect, useState } from 'react'

const SuperheroRow = ({ name, alterEgo, homeCity, onSuperheroSelected }) => (
  <tr onClick={() => onSuperheroSelected()}>
    <td>{name}</td>
    <td>{alterEgo}</td>
    <td>{homeCity}</td>
  </tr>
)

const SuperheroList = ({setSelectedSuperheroId}) => {
  const [superheroes, setSuperheroes] = useState([])
  useEffect(() => {
    async function fetchData() {
      console.log('Fetching superhero data!')
      let fetchResult = await fetch("/api/superhero")
      let superheroList = await fetchResult.json()
      setSuperheroes(superheroList)
    }
    fetchData()
  }, [])

  function selectSuperhero(id) {
    console.log('selectSuperhero called on id', id )
    setSelectedSuperheroId(id)
  }


  return (
    <div>
      <h2>Superhuman List</h2>
      <table style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Alter Ego</th>
            <th>Home City</th>
          </tr>
        </thead>
        <tbody>
          {
            superheroes.map((hero, index) => {
              return <SuperheroRow 
                key={index} 
                onSuperheroSelected={() => selectSuperhero(hero._id)} 
                name={hero.superheroName} 
                alterEgo={hero.alterEgo} 
                homeCity={hero.homeCity} 
              />
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default SuperheroList
