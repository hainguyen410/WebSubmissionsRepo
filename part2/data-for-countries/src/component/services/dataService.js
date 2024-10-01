import axios from 'axios'

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all"

const search = axios.get(baseUrl)
    
export default {search}