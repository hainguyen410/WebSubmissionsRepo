const DisplayDetail = ({country}) => {
    return (<div>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        
        <h2>languages</h2>
        <ul>
        {Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}
        </ul>
            
        <img src={country.flags.png} alt="this is a flag" />

        </div>
    )
}

export default DisplayDetail