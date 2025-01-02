import React from "react";
import Maskgroup from "./../assets/Mask group.png";
// import archivecontent1 from "./../assets/archive-content 1.png";

 import board21 from "./../assets/board-2 1.png";
// import archivecontent1 from "./../assets/archive-content 1.png";
// import archivecontent1 from "./../assets/archive-content 1.png";
// import archivecontent1 from "./../assets/archive-content 1.png";



const Usercentri = () => {
    return (
        <>
            <div
                className="flex flex-col items-center justify-center min-h-screen"
                style={{
                    // backgroundColor: "#62262D",
                    color: "white",
                }}
            >
                {/* Centered Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-4">
                        Make every step user-centric
                    </h1>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Voluptatem, eligendi ea!
                    </p>
                </div>

                {/* Boxes Section */}
                <div className="grid grid-cols-3  px-[5rem]">
                    {/* Box 1 */}
                    <div className="border-r-2 border-b-2 border-pink-500  text-center p-[3.5rem]">
                       <img
                                                       src={Maskgroup}
                                                       alt="Step 1"
                                                       className="w-auto h-auto mb-4 m-auto"
                                                   />
                        <h1 className="text-xl font-bold mb-2">Support</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eligendi nostrum sunt laudantium itaque
                            officiis sequi sapiente error adipisci.
                        </p>
                    </div>

                    {/* Box 2 */}
                    <div className="border-b-2 border-l-2 border-r-2 border-pink-500  text-center p-[3.5rem]">

                    {/* <img
                                                       src={Maskgroup}
                                                       alt="Step 1"
                                                       className="w-auto h-auto mb-4 m-auto"
                                                   /> */}

                        <h1 className="text-xl font-bold mb-2">Sales</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Veniam culpa maiores laborum vitae libero!
                            Ipsum voluptatibus officia.
                        </p>
                    </div>

                    {/* Box 3 */}
                    <div className="border-b-2 border-l-2  border-pink-500  text-center p-[3.5rem]">

                   <img
                                                       src={board21}
                                                       alt="Step 1"
                                                       className="w-auto h-auto mb-4 m-auto"
                                                   />  

                        <h1 className="text-xl font-bold mb-2">Onboarding</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nemo quae magni, vitae ratione est, dolore,
                            facilis voluptatibus.
                        </p>
                    </div>

                    {/* Box 4 */}
                    <div className="border-t-2 border-r-2 border-pink-500  text-center p-[3.5rem]"

                    >
                        {/* <img
                                                       src={}
                                                       alt="Step 1"
                                                       className="w-auto h-auto mb-4 m-auto"
                                                   /> */}
                         
                                                  
                        <h1 className="text-xl font-bold mb-2">Product</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dignissimos, veritatis, ullam accusantium
                            exercitationem esse sunt nesciunt nihil.
                        </p>
                    </div>

                    {/* Box 5 */}
                    <div className="border-t-2 border-r-2 border-l-2  border-pink-500  text-center p-[3.5rem]">

                    {/* <img
                                                       src={Maskgroup}
                                                       alt="Step 1"
                                                       className="w-auto h-auto mb-4 m-auto"
                                                   /> */}
                        <h1 className="text-xl font-bold mb-2">Quality</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nam, sed porro velit doloribus accusantium
                            similique dolorem iste dolore.
                        </p>
                    </div>

                    {/* Box 6 */}
                    <div className="border-l-2 border-t-2  border-pink-500  text-center p-[3.5rem]">
                    {/* <img
                                                       src={Maskgroup}
                                                       alt="Step 1"
                                                       className="w-auto h-auto mb-4 m-auto"
                                                   /> */}
                        <h1 className="text-xl font-bold mb-2">Result</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Vero quis non a itaque ab. Modi, tempora odio.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Usercentri;
