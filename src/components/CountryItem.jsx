import MainPageImg from "./MainPageImg"
import { useContext} from "react"
import { useNavigate } from "react-router-dom"
import { CountriesContext } from "../store/context-provider"
import Button from "./Button"
export default function CountryItem({ data }) {
    const {darkMode, ResetSearch} = useContext(CountriesContext)
    const navigate = useNavigate()

    function handleHit(){
        navigate(`/detail/${data.name}`);
        ResetSearch()

    }
    
    return (
        <Button onHit={handleHit}>
            <div className="w-[255px] mt-[35px] mb-[20px] h-[275px] rounded overflow-hidden shadow-md">
            <MainPageImg countryFlag={data.flags.png} />
            <div className={`${!darkMode ? 'bg-darkBlueElements': "bg-white"} h-[140px] p-[22px]`}>
                <h1 className={`${!darkMode && 'text-whiteText'} font-extrabold text-base text-left`}>{data.name}</h1>
                <h3 className={`${!darkMode && 'text-whiteText'} font-semibold text-xs flex mt-[12px]`}>Population: <p className="font-light text-xs ml-[5px]">{data.population.toLocaleString()}</p></h3>
                <h3 className={`font-semibold text-xs flex ${!darkMode && 'text-whiteText'}`}>Region: <p className="font-light text-xs ml-[5px]"> {data.region}</p></h3>
                <h3 className={`font-semibold text-xs flex ${!darkMode && 'text-whiteText'}`}>Capital: <p className="font-light text-xs ml-[5px]">{data.capital ? data.capital : "No Official Capital"}</p></h3>
            </div> 
        </div>
        </Button>
    )
}