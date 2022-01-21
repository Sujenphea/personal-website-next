/** @jsxImportSource @emotion/react */

function ProjectCard() {
  return (
    <div
      style={{
        width: '250px',
        height: '400px',
        border: '1px solid #eee',
        marginLeft: '20px',
        marginRight: '20px',
        marginTop: '20px',
        marginBottom: '20px',
        flexShrink: 0,
      }}
    >
      sample
    </div>
  )
}

function Projects() {
  const testArray = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4]

  return (
    <div className="category-container" css={{ backgroundColor: '#333' }}>
      {/* title */}
      <div className="title">Projects</div>
      {/* contents centered relative to container div */}
      <div
        id="projects-container"
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100vw',
          overflow: 'scroll',
        }}
      >
        {testArray.map((d) => {
          return <ProjectCard key={d} />
        })}
      </div>
    </div>
  )
}

export default Projects
