import PhotoGrid from 'components/PhotoGrid'
import { useFetchPhotos, usePaginatedPhotos } from 'hooks/photos'

const PhotoGallery = () => {
    useFetchPhotos()

    const { photos, currentPage, openNextPage, openPreviousPage } = usePaginatedPhotos()

    return (
        <>
            <main>
                <PhotoGrid photos={photos} />
            </main>

            <footer>
                <button onClick={() => openPreviousPage()}>Previous page</button>| {currentPage} |
                <button onClick={() => openNextPage()}>Next page</button>
            </footer>
        </>
    )
}

export default PhotoGallery
