import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Photo, RootState } from 'types'

interface PhotosState {
    list: Photo[]
    shouldFetch: boolean
    currentPage: number
    itemsPerPage: number
    searchString: string
}

const initialState: PhotosState = {
    list: [],
    shouldFetch: true,
    currentPage: 1,
    itemsPerPage: 20,
    searchString: ''
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
            const minimumPage = 1

            state.currentPage = Math.max(minimumPage, prevPage)
        },
        setGallerySearchString: (state, action: PayloadAction<string>) => {
            state.searchString = action.payload
            state.currentPage = 1
        }
    }
})

// Actions

export const { setPhotos, setGalleryPageNext, setGalleryPagePrevious, setGallerySearchString } =
    photosSlice.actions

// Selectors
export const selectAllPhotos = () => (state: RootState) => state.photos.list
export const selectShouldFetchPhotos = () => (state: RootState) => state.photos.shouldFetch
export const selectCurrentPage = () => (state: RootState) => state.photos.currentPage
export const selectItemsPerPage = () => (state: RootState) => state.photos.itemsPerPage
export const selectGallerySearchString = () => (state: RootState) => state.photos.searchString

export const selectPhotoById = (id: number) => (state: RootState) => {
    const list = selectAllPhotos()(state)
    return list.find((photo) => photo.id === id)
}

export const selectCurrentPhotos = () => (state: RootState) => {
    const allPhotos = selectAllPhotos()(state)

    return paginatePhotos({
        list: allPhotos,
        page: selectCurrentPage()(state),
        itemsPerPage: selectItemsPerPage()(state)
    })
}

export const selectPhotosBySearchString = () => (state: RootState) => {
    const list = selectAllPhotos()(state)
    const searchString = selectGallerySearchString()(state)
    const searchStringLower = searchString.toLowerCase()

    const filteredList = list.filter((photo) =>
        photo.title.toLowerCase().includes(searchStringLower)
    )

    return paginatePhotos({
        list: filteredList,
        page: selectCurrentPage()(state),
        itemsPerPage: selectItemsPerPage()(state)
    })
}

// Reducers

export default photosSlice.reducer

// Helpers
type PhotoPaginatorProps = {
    list: Photo[]
    page: number
    itemsPerPage: number
}
const paginatePhotos = ({ list, page, itemsPerPage }: PhotoPaginatorProps) => {
    const startIndex = (page - 1) * itemsPerPage
    const endIndex = page * itemsPerPage

    return list.slice(startIndex, endIndex)
}
