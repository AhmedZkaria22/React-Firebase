import React from 'react'
import useFireStore from '../../Firebase/useFireStore';
import './photoGrid.css'

function PhotoGrid() {
    const [,,,,inputRef, images, progress, uploadImage] = useFireStore();
    return (
        <>
            <header className={'App-header'}>
                <h1>Photo Grid<span>Using firebase storage</span></h1>
                <div className={'chooserBox'}>
                    <input type="file" onChange={uploadImage} ref={inputRef}/>
                    <progress value={progress} max="100"></progress>
                </div>

                <div className={'photo-grid'}>
                    {
                        images &&
                        images.map((image) => (
                            <img src={image.url} alt="" key={image.id}/>
                        ))
                    }
                </div>
            </header>      
        </>
    )
}

export default PhotoGrid
