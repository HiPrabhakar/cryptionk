import React from "react";
import x from "./../assets/x.png";
import insta from "./../assets/insta.png";
import twitter from "./../assets/x.png";
import telegram from "./../assets/telegram.png";

const Socialmedia = () => {
    return (
        <>
            <div
                style={{
                    background:
                        "linear-gradient(90deg, #8C3035 0%, #D17561 100%)",
                    color: "white",
                }}
                className="flex row justify-between px-10 h-[120px] "
            >
                <div className="my-auto">
                    <p className="">© 2020 Untitled UI. All rights reserved.</p>
                </div>

                <div className="flex row right-0 justify-end w-[50%] my-auto gap-2">
                    <div className="text-white">
                        <img src={x} alt="List" className="w-10 h-10 " />
                    </div>

                    <div className="">
                        <img src={telegram} alt="List" className="w-10 h-10" />
                    </div>

                    <div className="">
                        <img src={insta} alt="List" className="w-10 h-10" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Socialmedia;
