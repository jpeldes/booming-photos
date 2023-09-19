import { Photo } from 'types'

import PhotoGridItem from 'components/PhotoGridItem'

type PhotoGridProps = {
    photos: Photo[]
}

function PhotoGrid({ photos }: PhotoGridProps) {
    return (
        <section className="photo-grid">
            {photos.map((photo) => (
                <PhotoGridItem item={photo} />
            ))}
        </section>
    )
}

export default PhotoGrid
