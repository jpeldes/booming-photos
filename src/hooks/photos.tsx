import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/app'
import { selectAllPhotos, selectShouldFetchPhotos, setPhotos } from 'slices/photos'
import { getAllPhotos } from 'api'

export function useFetchPhotos() {
    const dispatch = useAppDispatch()

    const shouldFetchPhotos = useAppSelector(selectShouldFetchPhotos())

    useEffect(() => {
        const fetchPhotos = async (shouldFetch: boolean) => {
            if (!shouldFetch) {
                return
            }

            const { data } = await getAllPhotos()
            if (data) {
                dispatch(setPhotos(data))
            }
        }

        fetchPhotos(shouldFetchPhotos)
    }, [dispatch, shouldFetchPhotos])
}

export function usePaginatedPhotos() {
    const page = 1
    const pageSize = 20

    const photos = useAppSelector(selectAllPhotos())
    const photosToRender = photos.slice((page - 1) * pageSize, page * pageSize)

    return photosToRender
}
