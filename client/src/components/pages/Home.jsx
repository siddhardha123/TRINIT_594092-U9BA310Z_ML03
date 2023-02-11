import React from 'react'
import logo from '../../assets/Advance-farming-V2.svg'
import lang from '../../assets/Language-translator.svg'
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
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')


    const enqSubmit = (e) => {
        e.preventDefault();
        const enq = { name, mail, subject, message }
        console.log(enq)
        setName('')
        setMail('')
        setSubject('')
        setMessage('')
    }
    return (
        <>
            {/* header */}
            <div className=' flex justify-between px-20 bg-gray-100' >

                <p className='p-10 font-semibold text-xl'>{content.title}</p>


                <ul className="hidden md:flex gap-24 p-3 py-6 mx-10 mt-5 text-black  ">

                    <li className="mx-auto hover:text-[#00ff37] text-lg hover:font-semibold">
                        <a href="/">{content.home}</a>
                    </li>
                    <li className="mx-auto hover:text-[#00ff37] text-lg hover:font-semibold">
                        <a href="/">{content.userguide}</a>
                    </li>
                    <li className="mx-auto hover:text-[#00ff37] text-lg hover:font-semibold">
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
                    <p className='text-3xl text-center'>{content.userguide}</p>
                    <div className='flex justify-around mx-20 mt-20'>
                        <div className='text-lg md:text-3xl'>
                        <p>step 1</p>
                        <p>change the page to your <span className='text-[#00ff37]'>preferred</span> language</p>
                        </div>
                        <div className='w-[100%] md:w-[20%]'>
                        <img src={lang} alt="" />
                       </div>
                    </div>
                    <div className='flex justify-around mx-20 mt-20'>
                        
                        <div className='w-[50%] md:w-[20%]'>
                        <img src={lang} alt="" />
                       </div>
                       <div className='text-3xl'>
                        <p>step 1</p>
                        <p>change the page to your <span className='text-[#00ff37]'>preferred</span> language</p>
                        </div>
                    </div>
                    

                    <div>
                        <p>step 2</p>
                        <p>enter parameters to start the prediction</p>
                    </div>
                    <div>
                        <p>step 3</p>
                        <p>click the start prediction button to get the output</p>
                    </div>
                </div>

            </div>

            <div className='md:w-[50%] mx-auto'>
                <div className='rounded-xl border-black max-w-[80%]   mx-auto p-10 shadow-2xl' >

                    <div className='mx-auto'>
                        <form onSubmit={enqSubmit}>
                            <p className='text-center text-xl bold'>Prediction</p>
                            <p className='mt-10 mx-auto'>Your Name</p>
                            <input className='h-8 mx-auto bg-slate-200 rounded-sm w-[100%]' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            <p className='mt-5 mx-auto'>Email</p>
                            <input className='h-8 mx-auto bg-slate-200 rounded-sm w-[100%]' type="text" value={mail} onChange={(e) => setMail(e.target.value)} />
                            <p className='mt-5 mx-auto'>Subject</p>
                            <input className='h-8 mx-auto bg-slate-200 rounded-sm w-[100%]' type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
                            <p className='mt-5 mx-auto'>message</p>
                            <textarea className='h-32  bg-slate-200 rounded-sm w-[100%]' type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                            <button className='bg-[#00ff37] font-bold text-white p-2 px-16 mt-7  rounded-md  md:mx-36' >start prediction</button>
                        </form>
                    </div>


                </div>
            </div>


        </>
    )
}

export default Home