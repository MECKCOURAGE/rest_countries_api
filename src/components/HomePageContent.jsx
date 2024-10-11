import { useContext } from "react"
import { CountriesContext } from "../store/context-provider"
import CountryItem from "./CountryItem"
export default function(){
    const {filteredCountries, ResetSearch, darkMode} = useContext(CountriesContext)
    let content = filteredCountries.map(country => <li key={country.name}><CountryItem data={country} /></li>)
    if (filteredCountries.length === 0) {

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