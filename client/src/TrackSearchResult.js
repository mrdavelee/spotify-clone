import React from 'react'

export default function TrackSearchResult({ track }) {
    return (
        <div classnName='d-flex m-2 align-items-center'>
            <img alt='' src={track.albumUrl} style= {{height: '64px', width: '64px'}} />
        </div>
    )
}
