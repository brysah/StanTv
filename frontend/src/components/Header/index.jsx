import { Container, Logo,Links } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
    return (
        <Container>
            <Logo>Stan.</Logo>
            <Links>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/tvshows'>TV Shows</NavLink>
                <NavLink to='/movies'>Movies</NavLink>
            </Links>
        </Container>
    )
}