import { useGallerySearch } from 'hooks/photos'

import { Button, Input, Join } from 'react-daisyui'

const PhotoGallerySearch = () => {
    const { searchString, updateSearchString } = useGallerySearch()

    const handleChangeSearchString: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        updateSearchString(event.target.value)
    }

    return (
        <div className="flex justify-center my-4">
            <Join>
                <Input
                    className="input join-item"
                    placeholder="Search by photo title..."
                    onChange={handleChangeSearchString}
                    value={searchString}
                />
                <Button className="join-item rounded-r-full">Search</Button>
            </Join>
        </div>
    )
}

export default PhotoGallerySearch
