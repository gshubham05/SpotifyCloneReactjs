import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import Albumitem from './Albumitem'
import { songsData } from '../assets/assets'
import Songsitem from './Songsitem'
import { useLocation } from 'react-router-dom'
const DisplayHome = () => {
    const locaiton = useLocation()
    console.log(locaiton)
    return (
        <>
            <Navbar />
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl"> Featured Charts</h1>
                <div className="flex overflow-auto">
                    {albumsData.map((item, index) => (
                        <Albumitem key={index}
                            name={item.name}
                            desc={item.desc}
                            id={item.id}
                            image={item.image} />
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl"> Today's biggest hit</h1>
                <div className="flex overflow-auto">
                    {songsData.map((item, index) => (<Songsitem
                        key={index}
                        name={item.name}
                        image={item.image}
                        desc={item.desc}
                        id = {item.id}
                    />))}
                </div>
            </div>
        </>
    )
}

export default DisplayHome