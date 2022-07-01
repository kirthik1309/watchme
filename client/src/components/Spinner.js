import React from 'react'
import {RotatingSquare}  from 'react-loader-spinner'
const Spinner = ({message}) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
        {/* <Loader     
            type="circles"
            color="#FF0000"
            height={20}
            width={200}
            className="m-5"
        /> */}
        <RotatingSquare ariaLabel="rotating-square" visible={true} color="red"  
            className="m-5"/>
        <p className='text-lg text-color-black text-center px-2'>{ message }</p>
    </div>
  )
}

export default Spinner