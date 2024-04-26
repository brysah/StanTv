import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Program } from '../pages/Program' 

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/program' element={<Program />} />  
            </Routes>
        </BrowserRouter>
    )
}