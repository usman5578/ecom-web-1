import React from 'react'
import Image from 'next/image'
import femaleProduct1  from '/femaleProduct1.png'

const SingleProduct = () => {
  return (
    <div>
        {/* Main Div Top  */}
        <div>
            <Image src={femaleProduct1} alt='product1'/>

        </div>
    </div>
  )
}

export default SingleProduct