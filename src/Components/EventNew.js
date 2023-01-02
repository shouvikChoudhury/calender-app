import React, { useState } from 'react'

const EventNew = (props) => {
    const [first, setfirst] = useState("")
    const [second, setsecond] = useState(false)

    const handleAdd = (e) => {
        e.preventDefault()
        setsecond(true)
        console.log(props.date, first)
    }

    return (
        <div className="pt-5">
            <h5>Add event to calender date</h5>
            <form onSubmit={handleAdd}>
                <input type="text" className='w-75' value={props.date} />
                <br />
                <input required='required' placeholder='Enter calender date event here' type="text" className='w-75 mt-3'
                    onChange={e => setfirst(e.target.value)} value={first} />
                <input type="submit" value="Add" />
            </form>
            {second && (<div><p className=' mt-3'><b><i>Date: {String(props.date)}</i><br /> Event: {first} </b></p></div>)}
        </div>
    )
}

export default EventNew