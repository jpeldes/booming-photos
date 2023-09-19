import { NavLink } from 'react-router-dom'
import { Photo } from 'types'

type PhotoGridItemProps = {
    item: Photo
}

function PhotoGridItem({ item }: PhotoGridItemProps) {
    return (
        <NavLink to={`/photos/${item.id}`}>
            <figure key={item.id as React.Key} className="item">
                <img alt={String(item.id)} src={item.thumbnailUrl} />
                <figcaption>{item.title}</figcaption>
            </figure>
        </NavLink>
    )
}

export default PhotoGridItem
