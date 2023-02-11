import React from 'react'
import logo from '../../assets/Advance-farming-V2.svg'
import lang from '../../assets/Language-translator.svg'
import logo2 from '../../assets/Plant-cropping-V2.svg'
import districts from '../../assets/main/districts'
import datum from '../../assets/main/test2.json'
import states from '../../assets/main/states'
import months from '../../assets/main/months'
import coding from '../../assets/main/coding'
// import Header from '../shared/Header'
import translation from '../../assets/data.json'
import { useState, useEffect } from 'react'


const Home = () => {
    const [language, setLanguage] = useState('english')
    const [content, setContent] = useState(translation.english)


    useEffect(() => {
        if (language === "english") {
            setContent(translation.english)
        } else if (language === "telugu") {
            setContent(translation.telugu)
        }
    }, [language])
    const [selectedState, setSelectedState] = useState('')
    const [final,setFinal] = useState('')
    const [district, setDistrict] = useState('')
    const [month, setMonth] = useState('')
    const [p, setP] = useState('')
    const [k, setK] = useState('')
    const [n, setN] = useState('')
    const [budget, setBudget] = useState('')

   

    const Submit = async(e) => {
        e.preventDefault();
        
        let i = states.indexOf(selectedState,0)
        let j = districts[selectedState].indexOf(district,0)
        const rainfall = datum[i][selectedState][j][month]
        console.log(datum[i][selectedState][j][month])
        const response = await fetch("https://siddhardha123123-trinit-web-v1.hf.space/run/predict", {
	method: "POST",
	headers: { "Content-Type": "application/json" },
	body: JSON.stringify({
		data: [
			selectedState,
			district,
			month,
			p,
			k,
			n,
			budget,
			rainfall,
		]
	})
});


console.log(response)
const ans = await response.json();
if(coding[ans.data[0]])
{
    setFinal(coding[ans.data[0]])
}else{
    console.log("error")
}
console.log(ans.data[0])
        // const obj = [
        //     "state": selectedState,
        //     "district": district,
        //     "month": month,
        //     "p" : p,
        //     "K" : k,
        //     "N" : n,
        //     "rainfall": data[i][selectedState][j][month],
        // }
        // console.log(obj)
 

        
    }

    return (
        <>
            {/* header */}
            <div className=' flex justify-between px-20 bg-gray-100' >

                <p className='p-10 font-semibold text-xl'>{content.title}</p>


                <ul className="hidden md:flex gap-24 p-3 py-6 mx-10 mt-5 text-black  ">

                    <li className="mx-auto hover:bg-[#00ff37] hover:rounded-lg text-lg hover:font-semibold px-3 py-1">
                        <a href="/">{content.home}</a>
                    </li>
                    <li className="mx-auto hover:bg-[#00ff37] hover:rounded-lg text-lg hover:font-semibold px-3 py-1">
                        <a href="/">{content.userguide}</a>
                    </li>
                    <li className="mx-auto hover:bg-[#00ff37] hover:rounded-lg text-lg hover:font-semibold px-3 py-1">
                        <a href="/">{content.predictions}</a>
                    </li>
                </ul>
                <div className=''>
                    <select name="" id="" className='mt-10 p-2' onChange={(e) => { setLanguage(e.target.value) }}>
                        <option value="english">english</option>
                        <option value="telugu">telugu</option>
                        <option value="tamil">tamil</option>
                        <option value="hindi">hindi</option>
                    </select>
                </div>

            </div>

            {/* body */}
            < div className=''>
                <div className='flex justify-around px-2 md:px-20' >
                    <div className='text-3xl md:text-8xl tracking-tight mt-20'>
                        <p className='mx-auto'>AI <br /><span className='text-[#00ff37]'>{content.crop}</span>{content.predictor}</p>
                    </div>
                    {/* logo */}
                    <div className='w-[50%] md:w-[30%]'>
                        <img src={logo} alt="" />
                    </div>
                </div>
                <p className='text-justify px-5 md:px-44 text-lg mt-10'>{content.text}</p>
                <div className='mt-40'>
                    <p className='text-3xl text-center mt-10'>{content.userguide}</p>
                    <div className='flex justify-evenly  mx-20 mt-5 '>
                        <div className='text-lg md:text-3xl mt-6'>
                            <p>step 1</p>
                            <p className='md:leading-10'>change the page to your  <br /><span className='text-[#00ff37]'>preferred</span> language</p>
                        </div>
                        <div className='w-[100%] md:w-[20%]'>
                            <img src={lang} alt="" />
                        </div>
                    </div>
                    <div className='flex justify-between md:justify-evenly mx-20 mt-5'>

                        <div className='w-[100%] md:w-[20%] mt-6'>
                            <img src={logo2} alt="" />
                        </div>
                        <div className=''>
                        <div className='text-lg md:text-3xl'>
                            <p>step 2</p>
                            <p className='md:leading-10'>share your <span className='text-[#00ff37]'>farm </span> data with us</p>

                        </div>
                        <div className='md:text-3xl mt-20'>
                            <p>step 3</p>
                            <p className='md:leading-10'>Use our prediction for a <br /> prosporous <span className='text-[#00ff37]'>yield </span> </p>
                        </div>
                        </div>
                    </div>



                </div>

            </div>
         <form action="" onSubmit={Submit}>
            <div className='w-[100%] md:w-[50%] mx-auto mt-20 '>
                <div className='rounded-xl border-black w-[100%] md:max-w-[70%]   mx-auto p-10 shadow-2xl' >

                    <div className='mx-auto '>
                        <p className='text-3xl text-center bold '>Prediction</p>
                        <p className='mt-10 mx-auto'>state</p>
                        <select name="" id="" className='p-3 rounded-md md:w-[70%] text-sm md:text-lg' onChange={(e) => setSelectedState(e.target.value)}>
                            {states.map((data) => (
                                <option className=''>{data}</option>
                            ))}

                        </select>
                        <p className='mt-5 mx-auto'>district</p>


                        {selectedState ?
                            <select name="" id="" className='p-3 rounded-md md:w-[70%]' onChange={(e) => setDistrict(e.target.value)}>
                                {
                                    districts[selectedState].map((district) => (
                                        <option >{district}</option>
                                    ))
                                }
                            </select> : <select className='p-3 rounded-md md:w-[70%]'>
                                <option value="">select state</option>
                            </select>
                        }


                        <p className='mt-5 mx-auto'>month</p>
                        <select name="" id="" className='p-3 rounded-md md:w-[70%]' onChange={(e) => setMonth(e.target.value)}>
                            {months.map((data) => (
                                <option>{data}</option>
                            ))}

                        </select>
                        <p className='mt-5 mx-auto'>P - ratio of Phosphorous content in soil</p>
                        <input type="text" className='bg-gray-200 p-3 rounded-md md:w-[70%]'   onChange={(e)=>setP(e.target.value)}/>
                        <p className='mt-5 mx-auto' >K - ratio of Potassium content in soil</p>
                        <input type="text" className='bg-gray-200 p-3 rounded-md md:w-[70%]' onChange={(e)=>setK(e.target.value)}/>
                        <p className='mt-5 mx-auto'>N - ratio of Nitrogen content in soil</p>
                        <input type="text" className='bg-gray-200 p-3 rounded-md md:w-[70%]'  onChange={(e)=>setN(e.target.value)}/>
                        <p className='mt-5 mx-auto'>Budget</p>
                        <input type="text" className='bg-gray-200 p-3 rounded-md md:w-[70%]'  onChange={(e)=>setBudget(e.target.value)}/>

                        <button className='bg-[#00ff37] font-bold text-white p-2  mt-7  rounded-md  md:mx-36 hover:bg-white hover:text-black hover:border-black hover:border-2' >start prediction</button>
                    </div>
                    
                </div>
                

                
            </div>
            {final ? <div className='p-20 mx-auto mt-10 text-center'>
                <p className='text-4xl'>crop :{final}</p>
                 
              </div> : <div className='text-4xl text-center'>prediction :-  </div>
              
            }
            </form>
           
              
        </>
    )
}

export default Home