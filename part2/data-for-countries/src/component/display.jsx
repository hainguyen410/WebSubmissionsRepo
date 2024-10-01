import { useEffect , useState } from "react"
import dataService from "./services/dataService"

const Display = ({searchCountry}) => {
    const [data, setData] = useState([])
    

    const fetchInfo = () => {
        dataService.search.then(res => {
            setData(res.data);
        })
    }
    
    useEffect(() => fetchInfo(),[])
    
    const displayCountries = data.filter(country => country.name.common.toLowerCase().includes(searchCountry.toLowerCase()));
            console.log(displayCountries)
            if (displayCountries.length > 10) {
                return (<p>Too many matches, specify another filter</p>)
            } else if (displayCountries.length> 1) {
                return (<ul>{(displayCountries.map(country => {
                                console.log(country.name.common)
                            return <li key={country.cca3}>{country.name.common}</li>
                            }))}
                        </ul>)
            } else if (displayCountries.length === 1) {
                const country = displayCountries[0];
                return <div>
                    <h1>{country.name.common}</h1>
                    <p>Capital: {country.capital}</p>
                    <p>Area: {country.area}</p>
                    
                    <h2>languages</h2>
                    <ul>
                    {Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}
                    </ul>
                        
                    

                </div>
            }
    

}

export default Display