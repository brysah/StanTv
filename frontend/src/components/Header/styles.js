import styled from "styled-components";

export const Container = styled.header`
    max-width: 100rem;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 5rem;
`

export const Logo = styled.h2`
    font-size: 40px;
    color: #fff;
    font-weight: 900;
`

export const Links = styled.div` 
        display: flex;
        align-items: center;
        gap: 3rem;
        a{
            font-size: 16px;
            color: #878787;
            transition: all .3s;
            font-weight: 700;
            &.active,&:hover{
                color: #fff;
            }
        }
`