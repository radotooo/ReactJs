import React, { useState } from 'react'
import React from 'react'

export default function Home() {

    const [color, setColor] = useState('#002366')


    const getColor = () => {
        let rndColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        if (rndColor === "#FFFFFF") {
            return setColor("#002366")
        }
        setColor(rndColor)
    }

    return (

        <div className="quote" style={{ backgroundColor: color }}>

        </div>
    )
}

