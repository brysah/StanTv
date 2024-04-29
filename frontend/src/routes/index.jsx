import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Program } from '../pages/Program'
import { TvShows } from '../pages/TvShows'

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/program/:id' element={<Program />} />
                <Route path='/tvshows' element={<TvShows />} />
            </Routes>
        </BrowserRouter>
    )
}