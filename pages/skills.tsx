/** @jsxImportSource @emotion/react */
import Image from 'next/image'
import { css } from '@emotion/react'
import logoAWS from './images/logo-aws.svg'
import logoSwift from './images/logo-swift.svg'
import logoJs from './images/logo-js.png'
import logoDb from './images/logo-db.svg'

function Skills() {
  const iconStyle = css({
    width: '200px',
    height: '300px',
    flexShrink: 0,
    padding: '20px',
    margin: '20px',
    // border: '1px solid white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
  })

  const columnStyle = css({
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-evenly',
    overflow: 'scroll',
    width: '100vw',
  })

  return (
    <div className="category-container" css={{ backgroundColor: '#333' }}>
      {/* title */}
      <div className="title">Skills</div>
      {/* contents centered relative to container div */}
      <div css={columnStyle}>
        {/* amazon */}
        <div css={iconStyle}>
          <Image width="40px" height="40px" src={logoAWS} alt="aws" />
          <div css={{ marginTop: '20px', display: 'flex', flexDirection: 'column' }}>
            <p>S3</p>
            <p>EC2</p>
            <p>DynamoDB</p>
            <p>Lambda</p>
            <p>API gateway</p>
          </div>
        </div>
        {/* database */}
        <div css={iconStyle}>
          <Image width="40px" height="40px" src={logoDb} alt="database" />
          <div css={{ marginTop: '20px', display: 'flex', flexDirection: 'column' }}>
            <p>MySQL</p>
            <p>PostgreSQL</p>
            <p>MongoDB</p>
          </div>
        </div>
        {/* swift */}
        <div css={iconStyle}>
          <Image width="40px" height="40px" src={logoSwift} alt="swift" />
          <div css={{ marginTop: '20px', display: 'flex', flexDirection: 'column' }}>
            <p>Swift</p>
            <p>SwiftUI</p>
            <p>Metal</p>
          </div>
        </div>
      </div>
      <div css={columnStyle}>
        {/* js */}
        <div css={iconStyle}>
          <Image width="40px" height="40px" src={logoJs} alt="javscript" />
          <div css={{ marginTop: '20px', display: 'flex', flexDirection: 'column' }}>
            <p>React</p>
            <p>Next</p>
            <p>jQuery</p>
          </div>
        </div>
        {/* misc tools */}
        <div css={iconStyle}>
          <div css={{ height: '40px' }}>misc. tools</div>
          <div css={{ marginTop: '20px', display: 'flex', flexDirection: 'column' }}>
            <p>Microsoft Azure</p>
          </div>
        </div>
        {/* misc languages */}
        <div css={iconStyle}>
          <div css={{ height: '40px' }}>misc. languages</div>
          <div css={{ marginTop: '20px', display: 'flex', flexDirection: 'column' }}>
            <p>Golang</p>
            <p>Java</p>
            <p>C++</p>
            <p>Python</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
