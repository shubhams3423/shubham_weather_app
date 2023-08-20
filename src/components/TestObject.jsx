

import React, { useState } from 'react'

const TestObject = () => {
    const [data, setData] = useState({
        name: "",
        age: 0,
    })
    console.log(data)
    setData({
        name: "shubham",
        age: 20
    })
    return (
        <div>

        </div>
    )
}

export default TestObject
