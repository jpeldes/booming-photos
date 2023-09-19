import React from 'react'
import { Photo } from 'types'

import PhotoGridItem from 'components/PhotoGridItem'

type PhotoGridProps = {
    photos: Photo[]
}

function PhotoGrid({ photos }: PhotoGridProps) {
    return (
        <section className="flex flex-wrap gap-2 justify-center">
            {photos.map((photo) => (
                <PhotoGridItem key={photo.id as React.Key} item={photo} />
            ))}
        </section>
    )
}

export default PhotoGrid
