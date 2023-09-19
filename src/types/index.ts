import store from 'store'

export interface Photo {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
