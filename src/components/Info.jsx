import { useContext } from "react"
import { CountriesContext } from "../store/context-provider"
import CountryData from '../data.json'

export default function Info({ data }) {
    const { darkMode } = useContext(CountriesContext)
    function getCountryNameByCode (code) {
        const country = CountryData.find((country) => country.alpha3Code === code);
        return country ? country.translations.en || country.name : code; 
      };
    return (
        <div className="md:ml-[125px] mt-[40px]">
            <h1 className={`${!darkMode && 'text-whiteText'} font-extrabold text-3xl text-left ml-[10px]`}>{data.name}</h1>
            <div className="md:flex mt-[20px] ">
                <div>
                    <h3 className={`${!darkMode && 'text-whiteText'} font-semibold text-sm flex m-[10px]`}>Native Name: <p className="font-light text-sm ml-[5px]">{data.nativeName}</p></h3>
                    <h3 className={`${!darkMode && 'text-whiteText'} font-semibold text-sm flex m-[10px]`}>Population: <p className="font-light text-sm ml-[5px]">{data.population.toLocaleString()}</p></h3>
                    <h3 className={`${!darkMode && 'text-whiteText'} font-semibold text-sm flex m-[10px]`}>Region: <p className="font-light text-sm ml-[5px]">{data.region}</p></h3>
                    <h3 className={`${!darkMode && 'text-whiteText'} font-semibold text-sm flex m-[10px]`}>Sub Region: <p className="font-light text-sm ml-[5px]">{data.subregion}</p></h3>
                    <h3 className={`${!darkMode && 'text-whiteText'} font-semibold text-sm flex m-[10px]`}>Capital: <p className="font-light text-sm ml-[5px]">{data.capital ? data.capital : "No Official Capital"}</p></h3>
                </div>
                <div className="md:ml-[150px] mt-[40px] md:mt-[0px]">
                    <h3 className={`${!darkMode && 'text-whiteText'} font-semibold text-sm flex m-[10px]`}>Top Level Domain: <p className="font-light text-sm ml-[5px]">{data.topLevelDomain[0]}</p></h3>
                    <h3 className={`${!darkMode && 'text-whiteText'} font-semibold text-sm flex m-[10px]`}>Currencies: <p className="font-light text-sm ml-[5px]">{data.currencies && data.currencies.length > 0 ? (data.currencies[0].name): 'No Official Currency' }</p></h3>
                    <h3 className={`${!darkMode && 'text-whiteText'} font-semibold text-sm flex m-[10px]`}>Languages:  <ul className="flex" >
                        {data.borders && data.borders.length > 0 ? (
                            data.languages.map((language, index) => (
                                <li key={index} className="inline pl-[4px] font-light text-sm">
                                    {language.name}
                                    {index < data.languages.length - 1 && ", "}
                                </li>
                            ))
                        ) : (
                            <li className={`pl-[4px] text-sm font-light`}>No Languages Found</li>)}</ul></h3>
                            
                </div>
            </div>
            <div className="mt-[40px] ml-[10px]">
                <h3 className={`${!darkMode && 'text-whiteText'} font-semibold text-sm md:flex `}><p className="mt-[5px]">Border Countries:</p> <ul className="flex" >
                    {data.borders && data.borders.length > 0 ? (
                        data.borders.slice(0,3).map((border) => (
                            <li key={border} className={`ml-[10px]  md:ml-[20px] pl-[11px] pr-[11px] md:pl-[30px] md:pr-[30px] rounded ${!darkMode ? 'border-2 border-veryDarkBlueBackground bg-darkBlueElements': 'border border-black bg-whiteText'}  shadow-md pt-[5px] pb-[5px] mb-[10px] font-light text-xs`}>
                            {getCountryNameByCode(border)}
                          </li>
                        ))
                    ) : (
                        <li className={`mb-[0px] ml-[10px] pl-[10px] pr-[10px] pt-[5px] pb-[5px] ${!darkMode ? 'border-2 border-veryDarkBlueBackground bg-darkBlueElements': 'border border-black bg-whiteText'}  rounded font-light text-xs shadow-md`}>No Border Countries Found</li>
                    )}
                </ul></h3>

            </div>

        </div>
    )
}