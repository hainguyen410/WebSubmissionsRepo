import { useEffect , useState } from "react"
import dataService from "./services/dataService"
import DisplayDetail from "./DisplayDetail/DisplayDetail"

const Display = ({searchCountry, setSearchCountry}) => {
    const [data, setData] = useState([])
    

    const fetchInfo = () => {
        dataService.search.then(res => {
            setData(res.data);
        })
    }
    

    useEffect(() => fetchInfo(),[])
    
    

    const displayCountries = data.filter(country => country.name.common.toLowerCase().includes(searchCountry.toLowerCase()));

    
    if (displayCountries.length > 10) {
        return (<p>Too many matches, specify another filter</p>)
    } else if (displayCountries.length> 1) {
        return (<ul>{(displayCountries.map(country => {
                    return <li key={country.cca3}>{country.name.common} <button onClick={()=>setSearchCountry(country.name.common)}>show</button></li>
                    }))}
                </ul>)
    } else if (displayCountries.length === 1) {
        const country = displayCountries[0];
        return <DisplayDetail country={country}/>
    }
    

}

export default Display