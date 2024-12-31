
const Description = () => {
    return (
        <>
  <div
    style={{
      display: "flex", // Enables Flexbox
      flexDirection: "column", // Stacks items vertically
      alignItems: "center", // Centers items horizontally
      justifyContent: "center", // Centers items vertically
      width: "946px",
      height: "272px",
      margin: "auto", // Centers the container horizontally on the page
      backgroundColor: "#FFFFFF", // White background
      border: "2px solid #FF6F61", // Optional border for visibility
      borderRadius: "8px", // Rounded corners
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adds a subtle shadow
      padding: "20px", // Inner spacing
    }}
  >
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: "24px", // Adjust font size for better readability
        fontWeight: "600",
        lineHeight: "1.5", // Space between lines
        textAlign: "center", // Centers text alignment
        marginBottom: "20px", // Space below the last text
      }}
    >
      <div>Swap Your currency seamlessly.</div>
      <div>Bring together your wallets.</div>
      <div>See your digital collectibles.</div>
      <div>Say hello to the new way to crypto.</div>
    </div>
    <div>
      <button
        style={{
          backgroundColor: "#FF6F61", // Button color
          color: "white", // Text color
          border: "none",
          borderRadius: "8px", // Rounded corners
          padding: "10px 20px", // Button padding
          fontSize: "16px", // Font size
          fontWeight: "600",
          cursor: "pointer", // Pointer cursor on hover
        }}
      >
        Swap Crypto
      </button>
    </div>
  </div>
</>

    )
}

export default Description
