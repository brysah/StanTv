import { useEffect, useRef, useState } from "react"
import { Header } from "../../components/Header"
import { fetchData } from '../../services/data'
import { Carousel } from "../../components/Carousel";
import { Error,Container } from "./styles";

export function Home() {
    const [data, setData] = useState();
    const [errorMessage, setErrorMessage] = useState(); 

    useEffect(() => {
        setTimeout(() => {
            try {
                setData(fetchData);  
            }
            catch (error) {
                setErrorMessage('An unknown error occurred.please try again later');
                console.log(error);
            }
        }, 1500);
    }, [])


    return (
        <>
            <Container>
                <Header />
                {
                    errorMessage ? 
                    <Error>{errorMessage}</Error> :
                     <Carousel data={data} />
                }
            </Container>
        </>
    )
}