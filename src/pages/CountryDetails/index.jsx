import { api } from "../../api/api.js"
import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"


export function CountryDetails(){
    const {_id} = useParams()
    const navigate = useNavigate()

    const [country, setCountry] = useState([{cities: []}])
    console.log(country)


    useEffect(()=>{
    async function fetchCountry(){
      try{
        const response = await api.get(`/countries/${_id}`)

        setCountry(response.data)
      }catch(e){
        console.log(e)
      }
    }
    fetchCountry()
    
  }, [])

  return(<>
    <img src={country.flag}/>
    <h1>{country.name}</h1>
    <p>{country.continent}</p>
    {country.cities.map((currentElement)=>{
      return <>{currentElement.name}
      </>
    })}
   <Link to={`/create-city/${_id}`}><button>Create City</button></Link>

  </>
  )

}