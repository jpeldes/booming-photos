import AppNav from 'AppNav'
import PhotoDetails from 'components/PhotoDetails'
import PhotoGallery from 'components/PhotoGallery'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => (
    <BrowserRouter basename="/">
        <AppNav />
        <Routes>
            <Route path="/" element={<PhotoGallery />} />
            <Route path="/photos/:photoId" element={<PhotoDetails />} />
        </Routes>
    </BrowserRouter>
)

export default App
