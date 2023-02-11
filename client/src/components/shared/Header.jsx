import React from 'react'
const Header = () => {

    const menu = [
        {
          name: "Home",
          path: "/",
        },
        {
            name: "User Guide",
            path: "/userguide",
          },
        {
          name: "Prediction",
          path: "/about",
        },
        {
          name: "prices",
          path: "/prices",
        },
    ]

  return (
    <>
        
          <div className=' flex justify-between px-20 ' >
     
                <p className='p-10 font-semibold text-xl'>FarmPredictions</p>
            
             
             <ul className="hidden md:flex gap-24 p-3 py-6 mx-10 mt-5 text-black  ">
          {menu.map((item, index) => {
            return (
              <li className="mx-auto hover:text-[#00ff37] text-lg hover:font-semibold" key={index} >
                <a href={item.path}>{item.name}</a>
              </li>
            );
          })}
        </ul>
        <div className=''>
        <select name="" id="" className='mt-10 p-2'>
             <option value="english">english</option>
             <option value="telugu">telugu</option>
             <option value="tamil">tamil</option>
             <option value="hindi">hindi</option>
          </select>
        </div>
        
         
         
          </div>
         
          
    </>
  )
}

export default Header