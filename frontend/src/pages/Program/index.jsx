import { useParams } from "react-router-dom"
import { Header } from "../../components/Header"
import { useEffect, useRef, useState } from "react";
import { fetchDataById } from '../../services/data'
import { Details, Description, Container, SkeletonImg, SkeletonDescription, SkeletonBarMedium, SkeletonBarLarge, SkeletonLarge } from './styles'
import { useNavigate } from 'react-router-dom'

export function Program() {
    const [program, setProgram] = useState();
    const { id } = useParams();
    const containerRef = useRef();
    const navigate = useNavigate();
    
    function handleKey(e){
        if(e.keyCode === 32){
            return navigate('/');
        }
    }

    useEffect(() => {
        setTimeout(() => {
            try {
                setProgram(fetchDataById(id));
                if(containerRef.current){ 
                    containerRef.current.focus();
                }
            }
            catch (error) {
                setErrorMessage('An unknown error occurred.please try again later');
                console.log(error);
            }
        }, 1500);
    }, [])

    return (
        <Container onKeyDown={handleKey} tabIndex='-1' ref={containerRef}>
            <Header />
            {
                program ? (
                    <Details>
                        <img src={program.image} alt="Program cover" />
                        <Description>
                            <h3>{program.title}</h3>
                            <p>{program.rating} | {program.year} | {program.genre} | {program.language}</p>
                            <p>{program.description}</p>
                        </Description>
                    </Details>
                ) : (
                    <Details>
                        <SkeletonImg />
                        <SkeletonDescription>
                            <SkeletonBarMedium />
                            <SkeletonBarLarge />
                            <SkeletonLarge />
                        </SkeletonDescription>
                    </Details>
                )
            }
        </Container>
    )
}