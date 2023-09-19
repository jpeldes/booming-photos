import { Photo } from 'types'

type PhotoGridItemProps = {
    item: Photo
}

function PhotoGridItem({ item }: PhotoGridItemProps) {
    return (
        <figure key={item.id as React.Key} className="item">
            <img alt={String(item.id)} src={item.thumbnailUrl} />
            <figcaption>{item.title}</figcaption>
        </figure>
    )
}

export default PhotoGridItem
