import { Photo } from 'types'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const getAllPhotos = async () => {
    try {
        const response = await fetch(`${BASE_URL}/photos`)
        const data: Photo[] = await response.json()

        return { data }
    } catch (error) {
        return { hasError: true }
    }
}
