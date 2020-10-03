import React from 'react'

export default function Footer() {
    const date = new Date();
    const getFullYear = date.getFullYear();
    return (
        <footer>
            <p className="text-center">Copyright {getFullYear}</p>
        </footer>
    )
}
