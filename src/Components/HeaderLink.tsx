import React from 'react'


const HeaderLink = (props:{catrgory:string}) => {
  return (<div
            className="mr-5 xl:mr-10 text-base font-semibold font-sans" >
            {props.catrgory}
          </div>

  )
}

export default HeaderLink