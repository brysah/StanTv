import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { fetchDataByType } from '../../services/data'
import { Carousel } from "../../components/Carousel";
import { Error,Container } from "../Home/styles";

export function Movies() {
    const [data, setData] = useState();
    const [errorMessage, setErrorMessage] = useState(); 

    useEffect(() => {
        setTimeout(() => {
            try {
                setData(fetchDataByType('movie'));  
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