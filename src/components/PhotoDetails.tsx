import { useAppSelector } from 'hooks/app'
import { useFetchPhotos } from 'hooks/photos'
import { Card } from 'react-daisyui'
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
        <main className="flex justify-center">
            <Card>
                <Card.Body>
                    <Card.Title tag="h2">{photo.title}</Card.Title>

                    <p>This photo belongs to album {photo.albumId}</p>
                </Card.Body>
                <Card.Image src={photo.url} alt={String(photo.id)} />
            </Card>
        </main>
    )
}

export default PhotoDetails
