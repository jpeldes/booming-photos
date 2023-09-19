import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Photo, RootState } from 'types'

interface PhotosState {
    list: Photo[]
}

const initialState: PhotosState = {
    list: []
}

const photosSlice = createSlice({
    name: 'photos',
    initialState,
    reducers: {
        setPhotos: (state, action: PayloadAction<Photo[]>) => {
            state.list = action.payload
        }
    }
})

// Actions

export const { setPhotos } = photosSlice.actions

// Selectors
export const selectAllPhotos = () => (state: RootState) => state.photos.list

// Reducers

export default photosSlice.reducer
