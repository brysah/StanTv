import { useParams } from "react-router-dom"
import { Header } from "../../components/Header"
import { useEffect, useState } from "react";
import { fetchDataById } from '../../services/data'
import { Details, Description,Container } from './styles'

export function Program() {
    const [program, setProgram] = useState();
    const { id } = useParams();


    useEffect(() => {
        setTimeout(() => {
            try {
                setProgram(fetchDataById(id));
            }
            catch (error) {
                setErrorMessage('An unknown error occurred.please try again later');
                console.log(error);
            }
        }, 1500);
    }, [])

    return (
        <Container>
            <Header />
            {
                program && (
                    <Details>
                        <img src={program.image} alt="Program cover" />
                        <Description>
                            <h3>{program.title}</h3>
                            <p>{program.rating} | {program.year} | {program.genre} | {program.language}</p>
                            <p>{program.description}</p>
                        </Description>
                    </Details>
                )
            }
        </Container>
    )
}