import axios from 'axios'


const countryBaseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all"


const search = axios.get(countryBaseUrl)


    
export default {search}