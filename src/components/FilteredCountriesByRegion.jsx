import { useParams } from "react-router-dom"
import { CountriesContext } from "../store/context-provider"
import { useContext } from "react"
import CountryItem from "./CountryItem"
export default function FilteredCountriesByRegion() {
    const { regionName } = useParams();
    const { data, darkMode } = useContext(CountriesContext)



    const regionCountries = data.filter(country => country.region.toLowerCase() === regionName.toLowerCase());
    let content = regionCountries.map(country => <li key={country.name}><CountryItem data={country} /></li>)
    if (regionCountries.length === 0) {
        content = 
            <h1 className={`text-4xl md:text-6xl font-bold ${!darkMode ?'text-whiteText' : 'text-black'} text-center shadow-lg p-4 rounded-lg `}>
                No Countries Found
            </h1>
        
    }
    return (
          <div className="flex flex-wrap justify-between list-none">
                {content}
            </div> 
    )
    
}