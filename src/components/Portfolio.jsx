import React from 'react'

const Portfolio = () => {
    return (
        <>
            <div
  style={{
    width: "1240px",
    padding: "20px",
    margin: "auto",
    opacity: "1", // Make sure the opacity is visible
  }}
>
  {/* Centered Title and Paragraph */}
  <div style={{ textAlign: "center", marginBottom: "40px" }}>
    <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Automated portfolio tracking</h1>
    <p style={{ marginTop: "10px", fontSize: "1rem", color: "#333" }}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum deserunt reprehenderit possimus perspiciatis illum repellendus
      doloremque nesciunt dolores obcaecati, quia suscipit voluptatem eum fuga quisquam.
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
        textAlign: "center",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ fontSize: "1.25rem", marginBottom: "10px" }}>
        <sup>1</sup> Connect wallet & exchange
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, numquam quia praesentium aliquid odio illum tempora
        libero quaerat autem aspernatur! Magnam.
      </p>
    </div>

    {/* Step 2 */}
    <div
      style={{
        border: "1px solid pink",
        padding: "20px",
        textAlign: "center",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ fontSize: "1.25rem", marginBottom: "10px" }}>
        <sup>2</sup> Connect wallet & exchange
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, numquam quia praesentium aliquid odio illum tempora
        libero quaerat autem aspernatur! Magnam.
      </p>
    </div>

    {/* Step 3 */}
    <div
      style={{
        border: "1px solid pink",
        padding: "20px",
        textAlign: "center",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ fontSize: "1.25rem", marginBottom: "10px" }}>
        <sup>3</sup> Connect wallet & exchange
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, numquam quia praesentium aliquid odio illum tempora
        libero quaerat autem aspernatur! Magnam.
      </p>
    </div>
  </div>
</div>

        </>
    )
}

export default Portfolio
