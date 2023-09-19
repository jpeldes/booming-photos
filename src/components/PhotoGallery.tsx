import { useFetchPhotos, usePaginatedPhotos } from 'hooks/photos'

import PhotoGrid from 'components/PhotoGrid'
import PhotoGalleryPagination from './PhotoGalleryPagination'

const PhotoGallery = () => {
    useFetchPhotos()

    const { photos } = usePaginatedPhotos()

    return (
        <>
            <main className="my-4">
                <PhotoGrid photos={photos} />
            </main>

            <PhotoGalleryPagination />
        </>
    )
}

export default PhotoGallery
