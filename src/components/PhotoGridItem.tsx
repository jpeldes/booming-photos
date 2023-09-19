import { NavLink } from 'react-router-dom'
import { Photo } from 'types'

type PhotoGridItemProps = {
    item: Photo
}

function PhotoGridItem({ item }: PhotoGridItemProps) {
    return (
        <NavLink to={`/photos/${item.id}`}>
            <figure key={item.id as React.Key} className="group">
                <img
                    alt={String(item.id)}
                    src={item.thumbnailUrl}
                    className="group-hover:scale-105 transition-transform"
                />
                <figcaption
                    className="text-ellipsis overflow-hidden whitespace-nowrap"
                    style={{ maxWidth: '150px' }}>
                    {item.title}
                </figcaption>
            </figure>
        </NavLink>
    )
}

export default PhotoGridItem
