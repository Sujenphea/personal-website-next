/** @jsxImportSource @emotion/react */
import Image from 'next/image'
import memoji from './images/memoji-punch.png'

function MissionCard() {
  return (
    <div
      css={{
        width: '50vw',
        height: '200px',
        border: '1px solid #fff',
        justifyContent: 'center',
        display: 'flex',
        textAlign: 'left',
        padding: '20px',
        margin: '20px',
      }}
    >
      My mission as a developer is to combine mechanics, aesthetics, and a dash of passion - all in the name of making
      life-changing experiences that never get in the way of the user&apos;s comfort zone. <br />
      As Oscar Wilde once mentioned, “Experience is the name everyone gives to their mistakes.” We all get one chance at
      life so lets contribute in propelling humanity to a new dimension and have some fun! 🥳
    </div>
  )
}

function Biography() {
  return (
    <div className="category-container" css={{ backgroundColor: '#333', alignItems: 'center' }}>
      {/* title */}
      <div className="title">Biography</div>
      {/* contents centered relative to container div */}
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '80vw',
        }}
      >
        <div css={{ minWidth: '200px', marginLeft: '20px', marginRight: '20px' }}>
          <Image src={memoji} alt="profile" />
        </div>
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            width: '80vw',
            marginLeft: '20px',
            marginRight: '20px',
          }}
        >
          Hey! I&apos;m a developer and a food lover based in New Zealand specialising in front end development and
          building iOS products. I&apos;m currently an intern at Umajin Inc and a final year student at the University
          of Auckland. As a wearer of many hats, my experience also includes graphic programming and back end
          development. I specialise in accessibility, performance and usability without sacrificing creativity.
          <br />
          <MissionCard />
        </div>
      </div>
    </div>
  )
}

export default Biography
