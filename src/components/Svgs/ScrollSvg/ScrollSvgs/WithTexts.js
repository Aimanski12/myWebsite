import React from 'react'

function WithTexts(props) {

  return (
    <svg width="20" height="121" viewBox="0 0 20 121" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.8418 54.8604L6.8418 120C7.09464 115.629 12.3681 99.0622 15.2628 99.0622" stroke={props.colors.darkColor} strokeWidth="3"/>
      <path d="M3.838 7.14937C3.838 6.39337 3.964 5.71537 4.216 5.11537C4.48 4.51537 4.84 4.04137 5.296 3.69337C5.764 3.34537 6.298 3.15337 6.898 3.11737V4.80937C6.406 4.85737 6.004 5.08537 5.692 5.49337C5.38 5.91337 5.224 6.45937 5.224 7.13137C5.224 7.75537 5.362 8.24737 5.638 8.60737C5.914 8.96737 6.262 9.14737 6.682 9.14737C7.114 9.14737 7.432 8.95537 7.636 8.57137C7.852 8.18737 8.062 7.59337 8.266 6.78937C8.458 6.05737 8.65 5.45737 8.842 4.98937C9.046 4.53337 9.34 4.13737 9.724 3.80137C10.12 3.47737 10.636 3.31537 11.272 3.31537C11.776 3.31537 12.238 3.46537 12.658 3.76537C13.078 4.06537 13.408 4.49137 13.648 5.04337C13.9 5.59537 14.026 6.22537 14.026 6.93337C14.026 8.02537 13.75 8.90737 13.198 9.57937C12.646 10.2514 11.89 10.6114 10.93 10.6594V9.02137C11.446 8.98537 11.86 8.77537 12.172 8.39137C12.484 8.01937 12.64 7.51537 12.64 6.87937C12.64 6.29137 12.514 5.82337 12.262 5.47537C12.01 5.12737 11.68 4.95337 11.272 4.95337C10.948 4.95337 10.678 5.05537 10.462 5.25937C10.258 5.47537 10.09 5.73937 9.958 6.05137C9.838 6.37537 9.7 6.81937 9.544 7.38337C9.352 8.09137 9.16 8.66737 8.968 9.11137C8.788 9.55537 8.512 9.93337 8.14 10.2454C7.768 10.5694 7.282 10.7374 6.682 10.7494C6.142 10.7494 5.656 10.5994 5.224 10.2994C4.792 9.99937 4.45 9.57337 4.198 9.02137C3.958 8.48137 3.838 7.85737 3.838 7.14937ZM8.95 12.4497C9.97 12.4497 10.858 12.6537 11.614 13.0617C12.382 13.4697 12.976 14.0337 13.396 14.7537C13.816 15.4857 14.026 16.3197 14.026 17.2557C14.026 18.4677 13.732 19.4637 13.144 20.2437C12.556 21.0357 11.74 21.5577 10.696 21.8097V20.0457C11.296 19.8777 11.77 19.5477 12.118 19.0557C12.466 18.5757 12.64 17.9757 12.64 17.2557C12.64 16.3197 12.316 15.5637 11.668 14.9877C11.032 14.4117 10.126 14.1237 8.95 14.1237C7.762 14.1237 6.844 14.4117 6.196 14.9877C5.548 15.5637 5.224 16.3197 5.224 17.2557C5.224 17.9757 5.392 18.5757 5.728 19.0557C6.064 19.5357 6.544 19.8657 7.168 20.0457V21.8097C6.16 21.5457 5.35 21.0177 4.738 20.2257C4.138 19.4337 3.838 18.4437 3.838 17.2557C3.838 16.3197 4.048 15.4857 4.468 14.7537C4.888 14.0337 5.482 13.4697 6.25 13.0617C7.018 12.6537 7.918 12.4497 8.95 12.4497ZM12.262 25.6333C12.826 25.9213 13.264 26.3293 13.576 26.8573C13.888 27.3973 14.044 28.0513 14.044 28.8193H12.352V28.3873C12.352 26.5513 11.356 25.6333 9.364 25.6333H4V23.9953H13.864V25.6333H12.262ZM3.838 35.0121C3.838 34.0881 4.048 33.2481 4.468 32.4921C4.888 31.7481 5.482 31.1601 6.25 30.7281C7.03 30.3081 7.93 30.0981 8.95 30.0981C9.958 30.0981 10.846 30.3141 11.614 30.7461C12.394 31.1901 12.988 31.7901 13.396 32.5461C13.816 33.3021 14.026 34.1481 14.026 35.0841C14.026 36.0201 13.816 36.8661 13.396 37.6221C12.988 38.3781 12.4 38.9721 11.632 39.4041C10.864 39.8481 9.97 40.0701 8.95 40.0701C7.93 40.0701 7.03 39.8421 6.25 39.3861C5.482 38.9421 4.888 38.3361 4.468 37.5681C4.048 36.8001 3.838 35.9481 3.838 35.0121ZM5.278 35.0121C5.278 35.6001 5.416 36.1521 5.692 36.6681C5.968 37.1841 6.382 37.5981 6.934 37.9101C7.486 38.2341 8.158 38.3961 8.95 38.3961C9.742 38.3961 10.414 38.2401 10.966 37.9281C11.518 37.6161 11.926 37.2081 12.19 36.7041C12.466 36.2001 12.604 35.6541 12.604 35.0661C12.604 34.4661 12.466 33.9141 12.19 33.4101C11.926 32.9181 11.518 32.5221 10.966 32.2221C10.414 31.9221 9.742 31.7721 8.95 31.7721C8.146 31.7721 7.468 31.9161 6.916 32.2041C6.364 32.5041 5.95 32.9001 5.674 33.3921C5.41 33.8841 5.278 34.4241 5.278 35.0121ZM17.32 43.8618H4L4 42.2238H17.32V43.8618ZM17.32 48.2915H4V46.6535H17.32V48.2915Z" fill={props.colors.lightColor}/>
    </svg>

  )
}

export default WithTexts