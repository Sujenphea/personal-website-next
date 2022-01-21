/** @jsxImportSource @emotion/react */

import { QuickStartCanvas } from 'react-pts-canvas'
import { CanvasForm, CanvasSpace, Group, Create } from 'pts'

function Profile() {
  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <QuickStartCanvas
        background="#333"
        name=""
        style={{ height: '100vh', width: '100vw' }}
        onAnimate={(space: CanvasSpace, form: CanvasForm) => {
          // get a line from pointer to center, and use it for direction and magnitude calculations
          const ln = space.pointer.$subtract(space.center.$add(0.1))
          const dir = ln.$unit()
          const mag = ln.magnitude()
          const mag2 = space.size.magnitude()

          // create a grid of lines
          const lines = Create.gridPts(space.innerBound, 20, 10).map((p) => {
            const dist = p.$subtract(space.center).magnitude() / mag2
            return new Group(p, p.$add(dir.$multiply(dist * (20 + mag / 5))))
          })

          form.strokeOnly('#777').lines(lines)
        }}
      />
      <div
        css={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'absolute',
        }}
      >
        <div className="title" css={{ backgroundColor: 'transparent' }}>
          Hello, I&apos;m <span className="highlight">Sujen Phea</span>.<br />
          I&apos;m a full stack web developer.
          <br />
          I&apos;m a iOS developer.
        </div>
      </div>
    </div>
  )
}

export default Profile
