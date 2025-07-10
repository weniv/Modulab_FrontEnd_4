import React from 'react'

export default function ImageList({ imageList }) {
    return (
        <ul>
            {imageList.map((image) => {
                return <li key={image.id}><img style={{ width: 300 }} src={image.download_url} alt="" /></li>
            })}
        </ul>
    )
}