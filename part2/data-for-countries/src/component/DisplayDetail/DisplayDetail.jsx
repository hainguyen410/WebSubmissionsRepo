import axios from "axios"
import { useState , useEffect } from "react"

const DisplayDetail = ({country}) => {


    const [latitudeAndLongitude, setLatitudeAndLongitude] = useState([])
    const city = country.name.common;
    const API_key = import.meta.env.VITE_SOME_KEY;
    const getLatitudeAndLongtitudeAPI = () => axios
                            .get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_key}`)
                            .then(res => {
                                setLatitudeAndLongitude([res.data[0].lat, res.data[0].lon])
                                
                            })

    useEffect(() => getLatitudeAndLongtitudeAPI, [])

    
    return (<div>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        
        <h2>languages</h2>
        <ul>
        {Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}
        </ul>
            
        <img src={country.flags.png} alt="this is a flag" />
        <h2>Weather in {country.capital}</h2>
        <p>temperature {} Celcius</p>
        <p>wind </p>
        {console.log(latitudeAndLongitude)}
        </div>
    )
}

export default DisplayDetail