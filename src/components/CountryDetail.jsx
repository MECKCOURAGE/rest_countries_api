import { useContext } from "react"
import { useParams } from "react-router-dom"
import { CountriesContext } from "../store/context-provider"
import Button from "./Button"
import { useNavigate } from "react-router-dom"
import Info from "./Info"

export default function CountryDetail() {
    const { darkMode, data } = useContext(CountriesContext)
    const { country } = useParams()
    const navigate = useNavigate()

    const countryDetails = data.find(datum => datum.name.toLowerCase() === country.toLowerCase())

    function back(){
        navigate('..')
    }

    return (
        <div>
            <div><Button onHit={back} className={`pl-[20px] pr-[30px] pb-[7px] pt-[7px] ${!darkMode ?'bg-darkBlueElements border-veryDarkBlueBackground border':'bg-veryLightGrayBackground border border-black'  }  rounded  shadow-md`}>
                <ul className="flex items-center">
                    <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-4 h-4 ${!darkMode ? 'text-whiteText': 'text-black' }`}
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="48"
                                d="M244 400L100 256l144-144M120 256h292"
                            />
                        </svg>
                    </li>
                    <li className="ml-2">
                        <p className={`${!darkMode ? 'text-whiteText': 'text-black'} font-semibold text-xs`}>Back</p>
                    </li>
                </ul>
            </Button>
            </div>
            <div className="md:flex mt-[50px] md:mt-[72px]">
                <div><img className = "md:w-[510px] md:h-[360px]" src={countryDetails.flags.png} /></div>
                <div>
                    <Info data={countryDetails} />
                </div>
            </div>

        </div>
    )
}
