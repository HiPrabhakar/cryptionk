import icon1 from "./../assets/icon-1.png"
const Sponsor = () => {
    return (
        <>
        <div
          className="flex flex-row justify-between mx-16"
          style={{
            width: "1440px",
            height: "132px",
            backgroundColor: "#2E2024", // Background color
            padding: "42px 108.47px", // Padding
            gap: "0px",
            opacity: "1", // Ensures full visibility
            display: "flex", // Enables Flexbox
            alignItems: "center", // Vertically centers the content
          }}
        >
          {/* First Section */}
          <div
            className="flex items-center"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px", // Space between icon and text
            }}
          >
           <div><image src={icon1} className="inline-flex h-10 w-10 "/></div>
            <h1 style={{ color: "white", fontSize: "24px", fontWeight: "600" }}>Waverio</h1>
          </div>
      
          {/* Second Section */}
          <div
            className="text-3xl flex items-center"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px", // Space between icon and text
              color: "white",
            }}
          >
            <img src="../assets/" alt="LoGoIPSUM Icon" style={{ width: "40px", height: "40px" }} />
            <p>LoGoIPSUM</p>
          </div>
      
          {/* Third Section */}
          <div
            className="text-3xl flex items-center"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px", // Space between icon and text
              color: "white",
            }}
          >
            <img src="../assets/" alt="Alterbone Icon" style={{ width: "40px", height: "40px" }} />
            <b>Alterbone</b>
          </div>
      
          {/* Fourth Section */}
          <div
            className="text-3xl flex items-center"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px", // Space between icon and text
              color: "white",
            }}
          >
            <img src="../assets/" alt="Ridoria Icon" style={{ width: "40px", height: "40px" }} />
            <b>Ridoria</b>
          </div>
      
          {/* Fifth Section */}
          <div
            className="text-3xl flex items-center"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px", // Space between icon and text
              color: "white",
            }}
          >
            <img src="../assets/" alt="Tinygone Icon" style={{ width: "40px", height: "40px" }} />
            <h1>Tinygone</h1>
          </div>
        </div>
      </>
      
      
    )
}

export default Sponsor;



 