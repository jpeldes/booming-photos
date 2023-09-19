import { useAppSelector } from 'hooks/app'
import { useFetchPhotos } from 'hooks/photos'
import { redirect, useParams } from 'react-router-dom'
import { selectPhotoById } from 'slices/photos'

const PhotoDetails = () => {
    const { photoId: photoIdString } = useParams()

    const photoId = Number(photoIdString)
    if (!photoId) {
        redirect('/')
    }

    useFetchPhotos()

    const photo = useAppSelector(selectPhotoById(photoId))
    if (!photo) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <figure>
                <figcaption>
                    <h2>{photo.title}</h2>
                </figcaption>

                <img src={photo.url} alt={String(photo.id)} />

                <p>This photo belongs to album {photo.albumId}</p>
            </figure>
        </div>
    )
}

export default PhotoDetails
