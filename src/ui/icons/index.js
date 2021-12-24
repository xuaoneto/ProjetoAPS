export function UserIcon({ color = "currentColor", size = 24, ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 41.666 43.864"
      fill={color}
      stroke="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <g transform="translate(-0.001)">
        <ellipse
          cx="9.533"
          cy="9.533"
          rx="9.533"
          ry="9.533"
          transform="translate(9.897 3.054) rotate(-9.217)"
        />
        <path
          d="M.79,26.8a10.212,10.212,0,0,0,10.2,10.2H32.252a10.2,10.2,0,0,0,0-20.408H10.994A10.212,10.212,0,0,0,.79,26.8Z"
          transform="translate(-0.789 6.856)"
        />
      </g>
    </svg>
  );
}
export function HomeIcon({ color = "currentColor", size = 24, ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 23.714 18.872"
      fill={color}
    >
      <path
        id="Caminho_362"
        data-name="Caminho 362"
        d="M110.219,263.87v7.06a.954.954,0,0,1-.941.941h-5.648v-5.648H99.863v5.648H94.215a.955.955,0,0,1-.941-.941v-7.06a.2.2,0,0,1,.007-.044.2.2,0,0,0,.007-.044l8.458-6.972,8.458,6.972A.205.205,0,0,1,110.219,263.87Zm3.28-1.015-.912,1.089a.5.5,0,0,1-.309.162h-.044a.452.452,0,0,1-.309-.1l-10.179-8.487L91.567,264a.547.547,0,0,1-.353.1.5.5,0,0,1-.309-.162l-.912-1.089a.477.477,0,0,1-.1-.346.427.427,0,0,1,.162-.316l10.576-8.811a1.825,1.825,0,0,1,2.236,0l3.589,3v-2.868a.453.453,0,0,1,.471-.471h2.824a.453.453,0,0,1,.471.471v6l3.221,2.677a.427.427,0,0,1,.162.316A.477.477,0,0,1,113.5,262.855Z"
        transform="translate(-89.889 -253)"
      />
    </svg>
  );
}

export function ArrowMenuItem({ color, size = "20px", ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      width={size}
      height={size}
      viewBox="0 0 22 22"
      {...rest}
    >
      <defs>
        <clipPath>
          <path fillOpacity=".514" d="m-7 1024.36h34v34h-34z" />
        </clipPath>
        <clipPath>
          <path fillOpacity=".472" d="m-6 1028.36h32v32h-32z" />
        </clipPath>
      </defs>
      <path
        d="m345.44 248.29l-194.29 194.28c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744l171.91-171.91-171.91-171.9c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.29 194.28c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373"
        transform="matrix(.03541-.00013.00013.03541 2.98 3.02)"
      />
    </svg>
  );
}
