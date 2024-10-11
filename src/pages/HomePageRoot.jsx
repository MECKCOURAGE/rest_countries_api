import { Outlet } from "react-router-dom";
import HomePageHeader from "../components/HomePageHeader";

export default function HomePageRoot(){
    return (
        <>
        <HomePageHeader/>
        <Outlet/>
        </>
    )
}