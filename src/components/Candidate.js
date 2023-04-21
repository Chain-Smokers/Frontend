export const Candidate = ({ background, foreground }) => (
  <svg
    width="286"
    height="318"
    viewBox="0 0 286 318"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_1_13)">
      <rect x="4" y="253" width="278" height="57" fill={foreground} />
    </g>
    <path
      d="M282 253C282 216.135 267.355 180.78 241.288 154.712C215.22 128.645 179.865 114 143 114C106.135 114 70.7797 128.645 44.7122 154.712C18.6446 180.78 4.00001 216.135 4 253L282 253Z"
      fill={foreground}
    />
    <circle cx="143" cy="101" r="101" fill={background} />
    <circle cx="143" cy="105" r="78" fill={foreground} />
    <defs>
      <filter
        id="filter0_d_1_13"
        x="0"
        y="253"
        width="286"
        height="65"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_13"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_13"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
