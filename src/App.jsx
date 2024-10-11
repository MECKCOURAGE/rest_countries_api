import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Root from "./pages/Root";
import CountriesContextProvider from "./store/context-provider";
import HomePageRoot from "./pages/HomePageRoot";
import HomePageContent from "./components/HomePageContent";
import FilteredCountriesByRegion from "./components/FilteredCountriesByRegion";
import CountryDetail from "./components/CountryDetail";
import Error from "./pages/Error";


const router = createBrowserRouter([
  {
    
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [
        { path: '', element: <HomePageRoot />, children: [
          {path: '', element: <HomePageContent/>},
          {path: ':regionName', id: 'region', element: <FilteredCountriesByRegion/>}
        ]},
        {path: 'detail/:country', element: <CountryDetail/> }
      ]
  }
])
function App() {

  return (

    <CountriesContextProvider>
      <RouterProvider router={router} />
    </CountriesContextProvider> 
  )
}

export default App
