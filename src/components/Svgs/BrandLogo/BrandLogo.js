import React from 'react'

function BrandLogo(props) {
  return (
    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect opacity="0.1" width="150" height="150" rx="25" fill={props.colorMode}/>
      <path d="M40.9082 118.193L80.3188 37.416L78.3595 33.3832C77.2596 31.3668 75.6891 30.9965 74.3879 31C73.0919 31.0035 71.455 31.8555 70.7218 33.3221L32.4721 111.899C31.7388 113.427 31.9222 115.076 32.5943 116.115C33.2117 117.069 34.6106 118.193 36.2604 118.193H40.9082Z" fill={props.colorMode}/>
      <path d="M80.1966 77.5598L74.5142 65.8894L52.1468 111.838C51.3525 113.487 51.7255 115.279 52.3912 116.298C53.0331 117.281 54.5909 118.193 55.9351 118.193H99.9936L95.0443 107.866H65.41L80.1966 77.5598Z" fill={props.colorMode}/>
      <path d="M99.7492 100.656L108.303 118.192H112.76C114.226 118.192 115.667 117.222 116.304 116.237C116.976 115.198 117.281 113.365 116.67 112.021L84.3515 45.7869L78.6691 57.4573L94.7388 90.4522H82.0908L77.1415 100.656H99.7492Z" fill={props.colorMode}/>
    </svg>
  )
}

export default BrandLogo
