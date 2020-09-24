import React, { useContext, useState } from 'react'
import MyContext from '../MyContext'
import Modal from './Modal'
import Quote from './Quote'
import "./styles/home.css"

export default function Home() {
    const { value, setValue } = useContext(MyContext)
    const [color, setColor] = useState('#002366')


    const getColor = () => {
        let rndColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        if (rndColor === "#FFFFFF") {
            return setColor("#002366")
        }
        setColor(rndColor)
    }

    return (

        <div className="home" style={{ backgroundColor: color }}>
            <Modal bkgColor={color} />
            <Quote bkgColor={color} getColor={getColor} />
        </div>
    )
}

