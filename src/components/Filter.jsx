import { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CountriesContext } from "../store/context-provider";

export default function FilterByRegion() {
    const { darkMode } = useContext(CountriesContext);
    const [selectedRegion, setSelectedRegion] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleChange = (event) => {
        const region = event.target.value;
        setSelectedRegion(region);
        if (region) {
            navigate(`/rest_countries_api/${region.toLowerCase()}`);
        }
    };

    useEffect(() => {
        if (location.pathname === '/rest_countries_api/') {
            setSelectedRegion('');
        }
    }, [location.pathname]); // Depend on the pathname for reset

    return (
        <div className={`relative w-40 shadow-md mt-[35px] md:mt-[0px]`}>
            <select
                name="regions"
                className={`${!darkMode && `bg-darkBlueElements text-whiteText`} h-[45px] text-xs pl-4 pr-10 w-full font-semibold rounded appearance-none focus:outline-none focus:ring-0 focus:border-transparent`}
                value={selectedRegion}
                onChange={handleChange}
            >
                <option value="" disabled hidden>
                    Filter by region
                </option>
                <option value="africa">Africa</option>
                <option value="americas">Americas</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                <svg className={`w-4 h-4 ${!darkMode && 'text-whiteText'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    );
}
