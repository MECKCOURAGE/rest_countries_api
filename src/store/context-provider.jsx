import { createContext } from "react";
import { useState } from "react";
import countryData from "../data.json";


export const CountriesContext = createContext({
    settingMode: () => { },
    darkMode: false,
    data: [],
    searchingItem: (event) => { },
    filteredCountries: [],
    ResetSearch: () => {}
});

export default function CountriesContextProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);
    const [filteredCountries, setFilteredCountries] = useState(countryData);

    const data = countryData;

    function handleChange() {
        setDarkMode(prevState => !prevState);
    }
    function ResetSearch(){
        setFilteredCountries(data)
    }

    function searchingItem(event) {
        const searchTerm = event.toLowerCase();
        const result = data.filter(country => 
            country.name.toLowerCase().includes(searchTerm)
        );
        
        setFilteredCountries(result);
    }



    const ctxValue = {
        settingMode: handleChange,
        darkMode,
        data,
        searchingItem,
        filteredCountries,
        ResetSearch
    };

    return (
        <CountriesContext.Provider value={ctxValue}>
            {children}
        </CountriesContext.Provider>
    );
}
