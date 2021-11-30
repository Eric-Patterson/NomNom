import { useEffect, useState } from 'react'

const DonationRow = ({ foodtype, numberOfServings, cookingInstructions, disclaimer, ingredients, agree, onDonationSelected }) => (
  <tr onClick={() => onDonationSelected()}>
    <td>{foodtype}</td>
    <td>{numberOfServings}</td>
    <td>{cookingInstructions}</td>
    <td>{disclaimer}</td>
    <td>{ingredients}</td>
    <td>{agree}</td>
  </tr>
)

const DonationList = ({setSelectedDonationId}) => {
  const [donations, setDonations] = useState([])
  useEffect(() => {
    async function fetchData() {
      console.log('Fetching superhero data!')
      let fetchResult = await fetch("/api/donation")
      let donationList = await fetchResult.json()
      console.log (donationList)
      setDonations(donationList)
    }
    fetchData()
  }, [])

  function selectDonation(id) {
    // console.log('selectSuperhero called on id', id )
    setSelectedDonationId(id)
  }

  return (
    <div>
      <h2>Donation List</h2>
      <table style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>Food Type</th>
            <th>Number of Servings</th>
            <th>Cooking Instructions</th>
            <th>Disclaimer</th>
            <th>Ingredients</th>
            <th>Terms and Conditions</th>
          </tr>
        </thead>
        <tbody>
          {
            donations.map((donate, index) => {
              return <DonationRow 
                key={index} 
                onDonationSelected={() => selectDonation(donate._id)} 
                foodtype={donate.foodtype} 
                numberOfServings={donate.numberOfServings} 
                cookingInstructions={donate.cookingInstructions}
                disclaimer={donate.disclaimer} 
                ingredients={donate.ingredients} 
                agree={donate.agree} 
              />
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default DonationList
