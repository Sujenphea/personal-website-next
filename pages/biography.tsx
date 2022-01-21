/** @jsxImportSource @emotion/react */

function Biography() {
  return (
    <div className="category-container" css={{ backgroundColor: '#333' }}>
      {/* title */}
      <div className="title">Biography</div>
      {/* contents centered relative to container div */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '100vw',
        }}
      >
        center
        <div
          style={{
            width: '200px',
            height: '200px',
            border: '1px solid #eee',
          }}
        >
          sample
        </div>
        hello
      </div>
    </div>
  )
}

export default Biography
