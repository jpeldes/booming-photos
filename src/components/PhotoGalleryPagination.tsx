import { usePaginatedPhotos } from 'hooks/photos'

import { Button, Pagination } from 'react-daisyui'

const PhotoGalleryPagination = () => {
    const { currentPage, openNextPage, openPreviousPage } = usePaginatedPhotos()

    return (
        <Pagination className="flex justify-center mt-4 mb-20">
            <Button className="join-item" onClick={() => openPreviousPage()}>
                «
            </Button>
            <Button className="join-item" active>
                Page {currentPage}
            </Button>
            <Button className="join-item" onClick={() => openNextPage()}>
                »
            </Button>
        </Pagination>
    )
}

export default PhotoGalleryPagination
