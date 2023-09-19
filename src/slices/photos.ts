import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Photo, RootState } from 'types'

interface PhotosState {
    list: Photo[]
    shouldFetch: boolean
}

const initialState: PhotosState = {
    list: [],
    shouldFetch: true
}

const photosSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
        setPhotos: (state, action: PayloadAction<Photo[]>) => {
            state.list = action.payload
            state.shouldFetch = false
        }
    }
})

// Actions

export const { setPhotos } = photosSlice.actions

// Selectors
export const selectAllPhotos = () => (state: RootState) => state.photos.list

export const selectPhotoById = (id: number) => (state: RootState) => {
    const list = selectAllPhotos()(state)
    return list.find((photo) => photo.id === id)
}

export const selectShouldFetchPhotos = () => (state: RootState) => state.photos.shouldFetch

// Reducers

export default photosSlice.reducer
