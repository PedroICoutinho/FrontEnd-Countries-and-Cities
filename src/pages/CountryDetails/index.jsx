import { api } from "../../api/api.js"
import { useState, useEffect, useContext } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/authContext.jsx"
import { ButtonFunction } from "../../components/ButtonFunction/index.jsx"
import style from "./style.module.css"


export function CountryDetails(){
    const {_id} = useParams()
    const {loggedInUser} = useContext(AuthContext)


    const [country, setCountry] = useState({cities: []})
    


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

  async function handleDeleteCity (cityId, currentIndex){
    try{
      await api.delete(`/cities/${cityId}`);

      setCountry((currentState)=>{
        currentState.cities.splice(currentIndex, 1);
        return {...currentState}
      })
    }catch(e){
      console.log(e)
    }
  }

  
  return(<>
    <nav className={style.navBar}>
      <Link to="/main-feed"><button>FEED</button></Link>
      <Link to={`/create-city/${_id}`}><button>CREATE CITY</button></Link>
    </nav> 
    
    <div  className={style.countryBox}> 
      <img src={country.flag}/>
      <strong><h1>{country.name}</h1></strong>
      <p>{country.continent}</p>
    </div>

    <div className={style.childDirections}> 
    
    {country.cities.map((currentCity, currentIndex)=>{
      return <> <div className={style.cityBox}>
      <img src={currentCity.img} alt="Cidade" />

      <h1><strong>{currentCity.name}</strong></h1>

      <h2><strong>{currentCity.population}</strong></h2>

      {currentCity.creator === loggedInUser.user._id || country.creator === loggedInUser.user._id ? (
      <ButtonFunction confirmationText="Delete City? " functionForExecution={()=>{
        handleDeleteCity(currentCity._id, currentIndex)
        console.log(currentCity.creator === loggedInUser.user._id || country.creator === loggedInUser.user._id)
      }}>
        DELETE
      </ButtonFunction>
      ) : null
      }
      </div>
      
      </>
    })}
   </div>

  </>
  )

}