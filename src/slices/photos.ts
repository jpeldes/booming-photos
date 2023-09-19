import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Photo, RootState } from 'types'

interface PhotosState {
    list: Photo[]
    shouldFetch: boolean
    currentPage: number
    itemsPerPage: number
}

const initialState: PhotosState = {
    list: [],
    shouldFetch: true,
    currentPage: 1,
    itemsPerPage: 20
}

const photosSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
        setPhotos: (state, action: PayloadAction<Photo[]>) => {
            state.list = action.payload
            state.shouldFetch = false
        },
        setGalleryPageNext: (state) => {
            const nextPage = state.currentPage + 1
            const maximumPage = Math.ceil(state.list.length / state.itemsPerPage)

            state.currentPage = Math.min(maximumPage, nextPage)
        },
        setGalleryPagePrevious: (state) => {
            const prevPage = state.currentPage - 1
            const minimumPage = 0

            state.currentPage = Math.max(minimumPage, prevPage)
        }
    }
})

// Actions

export const { setPhotos, setGalleryPageNext, setGalleryPagePrevious } = photosSlice.actions

// Selectors
export const selectAllPhotos = () => (state: RootState) => state.photos.list
export const selectShouldFetchPhotos = () => (state: RootState) => state.photos.shouldFetch
export const selectCurrentPage = () => (state: RootState) => state.photos.currentPage
export const selectItemsPerPage = () => (state: RootState) => state.photos.itemsPerPage

export const selectPhotoById = (id: number) => (state: RootState) => {
    const list = selectAllPhotos()(state)
    return list.find((photo) => photo.id === id)
}

export const selectCurrentPhotos = () => (state: RootState) => {
    const list = selectAllPhotos()(state)
    const page = selectCurrentPage()(state)
    const itemsPerPage = selectItemsPerPage()(state)

    const startIndex = (page - 1) * itemsPerPage
    const endIndex = page * itemsPerPage

    return list.slice(startIndex, endIndex)
}

// Reducers

export default photosSlice.reducer
