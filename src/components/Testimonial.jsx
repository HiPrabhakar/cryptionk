import React from "react";

const Testimonial = () => {
    return (
        <>
            <div
                className="flex flex-col items-center justify-center min-h-screen text-gray-800"
                style={{
                    // backgroundColor: '#62262D',
                    color: "white",
                }}
            >
                {/* Testimonial Section */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-4">Testimonial</h1>
                    <p className="text-lg leading-relaxed">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quidem eum fugit perferendis perspiciatis
                        reprehenderit<br></br>
                        expedita laboriosam reiciendis consectetur facilis.
                        Reiciendis, debitis.
                    </p>
                </div>

                {/* Images Section */}
                <div className="flex items-center justify-center space-x-6">
                    <div className="text-center">
                        <h2 className="text-xl font-semibold mb-2">Img-1</h2>
                        <img
                            src="Img_1"
                            alt="Img 1"
                            className="w-40 h-40 object-cover"
                        />
                    </div>
                    <div className="text-center">
                        <h2 className="text-xl font-semibold mb-2">Img-2</h2>
                        <img
                            src="Img_2"
                            alt="Img 2"
                            className="w-40 h-40 object-cover"
                        />
                    </div>
                    <div className="text-center">
                        <h2 className="text-xl font-semibold mb-2">Img-3</h2>
                        <img
                            src="Img_3"
                            alt="Img 3"
                            className="w-40 h-40 object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;
