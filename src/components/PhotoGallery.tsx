import PhotoGrid from 'components/PhotoGrid'
import { useFetchPhotos, usePaginatedPhotos } from 'hooks/photos'

const PhotoGallery = () => {
    useFetchPhotos()

    const photos = usePaginatedPhotos()

    return <PhotoGrid photos={photos} />
}

export default PhotoGallery
