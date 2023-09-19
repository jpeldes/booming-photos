import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/app'
import { selectAllPhotos, setPhotos } from 'slices/photos'
import { getAllPhotos } from 'api'

export function useFetchPhotos() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const fetchPhotos = async () => {
            const { data } = await getAllPhotos()
            if (data) {
                dispatch(setPhotos(data))
            }
        }

        fetchPhotos()
    }, [dispatch])
}

export function usePaginatedPhotos() {
    const page = 1
    const pageSize = 20

    const photos = useAppSelector(selectAllPhotos())
    const photosToRender = photos.slice((page - 1) * pageSize, page * pageSize)

    return photosToRender
}
