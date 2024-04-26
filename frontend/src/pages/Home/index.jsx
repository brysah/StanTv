import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { fetchData } from '../../services/data' 
import { Carousel } from "../../components/Carousel";

export function Home() {
    const [data, setData] = useState();

    useEffect(() => {
        setTimeout(() => {
            setData(fetchData);
        }, 300);
    }, [])


    return (
        <>
            <Header /> 
            <Carousel data={data}/>
        </>
    )
}