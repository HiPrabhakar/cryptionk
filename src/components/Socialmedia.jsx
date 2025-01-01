import React from 'react'

import telegram from './../assets/telegram.png';
import x from './../assets/x.png';
import insta from './../assets/insta.png';


const Socialmedia = () => {
    return (

        <>
            < div style={{ background: 'linear-gradient(90deg, #8C3035 0%, #D17561 100%)', color: 'white' }} className='flex row justify-between px-10 h-[120px] '>


                <div className='my-auto'>
                    <p className="">
                        © 2020 Untitled UI. All rights reserved.
                    </p>




                </div>


                <div className="flex row right-0 justify-end w-[50%] my-auto">



                    <div className="">
                        <img src={x} alt="List" className="w-auto h-auto" />
                    </div>

                    <div className="">
                        <img src={telegram} alt="List" className="w-auto h-auto" />
                    </div>

                    <div className="">
                        <img src={insta} alt="List" className="w-auto h-auto" />
                    </div>

                    



                </div>


                <div>


                    <ul className="social-links">
                        <li>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-hand-paper"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-basketball-ball"></i>
                            </a>
                        </li>
                    </ul>


                </div>




            </div>

        </>
    )
}

export default Socialmedia
