import { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/app'
import {
    selectCurrentPage,
    selectGallerySearchString,
    selectPhotosBySearchString,
    selectShouldFetchPhotos,
    setGalleryPageNext,
    setGalleryPagePrevious,
    setGallerySearchString,
    setPhotos
} from 'slices/photos'
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
    const photos = useAppSelector(selectPhotosBySearchString())
    const currentPage = useAppSelector(selectCurrentPage())

    const dispatch = useAppDispatch()
    const openNextPage = useCallback(() => {
        dispatch(setGalleryPageNext())
    }, [dispatch])
    const openPreviousPage = useCallback(() => {
        dispatch(setGalleryPagePrevious())
    }, [dispatch])

    return { photos, currentPage, openNextPage, openPreviousPage }
}

export const useGallerySearch = () => {
    const searchString = useAppSelector(selectGallerySearchString())

    const dispatch = useAppDispatch()

    const updateSearchString = (searchString: string) => {
        dispatch(setGallerySearchString(searchString))
    }

    return { searchString, updateSearchString }
}
