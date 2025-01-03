import React from "react";
import Maskgroup from "./../assets/Mask group.png";
import Maskgroup1 from "./../assets/Mask group (1).png";
import Maskgroup2 from "./../assets/Mask group (2).png";

const Portfolio = () => {
    return (
        <>
            <div
                style={{
                    width: "1240px",
                    padding: "20px",
                    margin: "auto",
                    opacity: "1",
                    // backgroundColor: '#62262D',

                    color: "White",
                }}
            >
                {/* Centered Title and Paragraph */}
                <div style={{ textAlign: "center", marginBottom: "40px" }}>
                    <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
                        Automated portfolio tracking
                    </h1>
                    <p
                        style={{
                            marginTop: "10px",
                            fontSize: "1rem",
                            color: "#fffff",
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Cum deserunt reprehenderit possimus perspiciatis
                        illum repellendus doloremque nesciunt dolores obcaecati,
                        quia suscipit voluptatem eum fuga quisquam.
                    </p>
                </div>

                {/* Steps in Boxes */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "30px",
                    }}
                >
                    {/* Step 1 */}
                    <div
                        style={{
                            border: "1px solid pink",
                            padding: "20px",
                            borderRadius: "8px",
                            position: "relative",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: "10px",
                                left: "10px",
                                background: "pink",
                                borderRadius: "50%",
                                width: "30px",
                                height: "30px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: "bold",
                            }}
                        >
                            1
                        </div>
                        <div
                            style={{
                                textAlign: "center",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <img
                                src={Maskgroup}
                                alt="Step 1"
                                className="w-auto h-auto mb-4"
                            />
                            <h2
                                style={{
                                    fontSize: "1.25rem",
                                    marginBottom: "10px",
                                }}
                            >
                                Connect wallet & exchange
                            </h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptates, numquam quia
                                praesentium aliquid odio illum tempora libero
                                quaerat autem aspernatur! Magnam.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div
                        style={{
                            border: "1px solid pink",
                            padding: "20px",
                            borderRadius: "8px",
                            position: "relative",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: "10px",
                                left: "10px",
                                background: "pink",
                                borderRadius: "50%",
                                width: "30px",
                                height: "30px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: "bold",
                            }}
                        >
                            2
                        </div>
                        <div
                            style={{
                                textAlign: "center",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <img
                                src={Maskgroup1}
                                alt="Step 2"
                                className="w-auto h-auto mb-4"
                            />
                            <h2
                                style={{
                                    fontSize: "1.25rem",
                                    marginBottom: "10px",
                                }}
                            >
                                Connect wallet & exchange
                            </h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptates, numquam quia
                                praesentium aliquid odio illum tempora libero
                                quaerat autem aspernatur! Magnam.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div
                        style={{
                            border: "1px solid pink",
                            padding: "20px",
                            borderRadius: "8px",
                            position: "relative",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: "10px",
                                left: "10px",
                                background: "pink",
                                borderRadius: "50%",
                                width: "30px",
                                height: "30px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: "bold",
                            }}
                        >
                            3
                        </div>
                        <div
                            style={{
                                textAlign: "center",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <img
                                src={Maskgroup2}
                                alt="Step 3"
                                className="w-auto h-auto mb-4"
                            />
                            <h2
                                style={{
                                    fontSize: "1.25rem",
                                    marginBottom: "10px",
                                }}
                            >
                                Connect wallet & exchange
                            </h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptates, numquam quia
                                praesentium aliquid odio illum tempora libero
                                quaerat autem aspernatur! Magnam.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
