import React from "react";

export const LogoIcon = (props) => (
  <svg
    viewBox="0 0 200 60"
    style={{
      width: "100%",
      height: "100%",
    }}
    pointerEvents="none"
    display="block"
    {...props}
  >
    <g>
      <g>
        <path
          fill="red"
          d="M63 14.87a7.885 7.885 0 00-5.56-5.56C52.54 8 32.88 8 32.88 8S13.23 8 8.32 9.31c-2.7.72-4.83 2.85-5.56 5.56C1.45 19.77 1.45 30 1.45 30s0 10.23 1.31 15.13c.72 2.7 2.85 4.83 5.56 5.56C13.23 52 32.88 52 32.88 52s19.66 0 24.56-1.31c2.7-.72 4.83-2.85 5.56-5.56C64.31 40.23 64.31 30 64.31 30s0-10.23-1.31-15.13z"
        />
        <path fill="#FFF" d="M26.6 39.43L42.93 30 26.6 20.57z" />
      </g>
      <g>
        <g>
          <path
            fill="#fff"
            d="M92.69 48.03c-1.24-.84-2.13-2.14-2.65-3.91s-.79-4.12-.79-7.06v-4c0-2.97.3-5.35.9-7.15.6-1.8 1.54-3.11 2.81-3.93 1.27-.82 2.94-1.24 5.01-1.24 2.04 0 3.67.42 4.9 1.26 1.23.84 2.13 2.15 2.7 3.93.57 1.78.85 4.16.85 7.12v4c0 2.94-.28 5.3-.83 7.08-.55 1.78-1.45 3.09-2.7 3.91-1.24.82-2.93 1.24-5.06 1.24-2.18.01-3.9-.41-5.14-1.25zm6.97-4.32c.34-.9.52-2.37.52-4.4v-8.59c0-1.98-.17-3.42-.52-4.34-.34-.91-.95-1.37-1.82-1.37-.84 0-1.43.46-1.78 1.37-.34.91-.52 2.36-.52 4.34v8.59c0 2.04.16 3.51.49 4.4.33.9.93 1.35 1.8 1.35.88 0 1.48-.45 1.83-1.35zM188.16 37.13v1.39c0 1.77.05 3.09.16 3.98.1.88.32 1.53.65 1.93.33.4.84.61 1.53.61.93 0 1.57-.36 1.91-1.08.34-.72.53-1.92.56-3.6l5.35.31c.03.24.04.57.04.99 0 2.55-.7 4.45-2.09 5.71-1.39 1.26-3.36 1.89-5.91 1.89-3.06 0-5.2-.96-6.43-2.88-1.23-1.92-1.84-4.88-1.84-8.9v-4.81c0-4.14.64-7.15 1.91-9.06 1.27-1.9 3.45-2.85 6.54-2.85 2.13 0 3.76.39 4.9 1.17 1.14.78 1.94 1.99 2.41 3.64.46 1.65.7 3.93.7 6.83v4.72h-10.39zm.79-11.6c-.31.39-.52 1.03-.63 1.91-.11.88-.16 2.23-.16 4.02v1.98h4.54v-1.98c0-1.77-.06-3.11-.18-4.02-.12-.91-.34-1.56-.65-1.93-.31-.37-.8-.56-1.46-.56-.66-.01-1.15.19-1.46.58zM77.59 36.61l-7.06-25.49h6.16l2.47 11.55c.63 2.85 1.09 5.27 1.39 7.28h.18c.21-1.44.67-3.85 1.39-7.24l2.56-11.6h6.16l-7.14 25.5v12.23h-6.11V36.61zM126.45 21.28v27.55h-4.85l-.54-3.37h-.13c-1.32 2.55-3.3 3.82-5.93 3.82-1.83 0-3.18-.6-4.05-1.8-.87-1.2-1.3-3.07-1.3-5.62V21.28h6.2v20.23c0 1.23.13 2.11.4 2.63s.72.79 1.35.79c.54 0 1.06-.16 1.55-.49.49-.33.86-.75 1.1-1.26v-21.9h6.2zM158.27 21.28v27.55h-4.85l-.54-3.37h-.13c-1.32 2.55-3.3 3.82-5.93 3.82-1.83 0-3.18-.6-4.05-1.8-.87-1.2-1.3-3.07-1.3-5.62V21.28h6.2v20.23c0 1.23.13 2.11.4 2.63s.72.79 1.35.79c.54 0 1.06-.16 1.55-.49.49-.33.86-.75 1.1-1.26v-21.9h6.2z"
          />
          <path
            fill="#fff"
            d="M143.31 16.11h-6.16v32.72h-6.07V16.11h-6.16v-4.99h18.38v4.99zM178.8 25.69c-.38-1.74-.98-3-1.82-3.78-.84-.78-1.99-1.17-3.46-1.17-1.14 0-2.2.32-3.19.97-.99.64-1.75 1.49-2.29 2.54h-.05V9.73h-5.98v39.11h5.12l.63-2.61h.13c.48.93 1.2 1.66 2.16 2.2.96.54 2.02.81 3.19.81 2.1 0 3.64-.97 4.63-2.9.99-1.93 1.48-4.95 1.48-9.06v-4.36c.01-3.08-.18-5.49-.55-7.23zm-5.69 11.24c0 2.01-.08 3.58-.25 4.72-.16 1.14-.44 1.95-.83 2.43-.39.48-.91.72-1.57.72-.51 0-.98-.12-1.42-.36-.43-.24-.79-.6-1.06-1.08V27.71c.21-.75.57-1.36 1.08-1.84.51-.48 1.06-.72 1.66-.72.63 0 1.12.25 1.46.74.34.49.58 1.33.72 2.49.13 1.17.2 2.83.2 4.99v3.56z"
          />
        </g>
      </g>
    </g>
  </svg>
);

export const HomeIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    height="22"
    width="22"
    fill="#AAAAAA"
    {...props}
  >
    <g>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8"></path>
    </g>
  </svg>
);

export const TrendingIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    height="22"
    width="22"
    fill="#AAAAAA"
    {...props}
  >
    <g>
      <path d="M17.53 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66-1.46-1.46-1.78-3.87-.85-5.72-.9.23-1.75.75-2.45 1.32C8.9 6.4 7.9 10.07 9.1 13.22c.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12-.06-.05-.1-.1-.15-.17-1.1-1.43-1.28-3.48-.53-5.12C5.87 10 5 12.3 5.12 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.3 1.5-6.6l-.13-.26c-.2-.45-.47-.87-.78-1.25zm-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.38-2.2-.16-2.88-.82 1.2-.28 1.9-1.16 2.1-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.2-2.06.15.38.35.76.58 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.26z"></path>
    </g>
  </svg>
);

export const SubIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    height="22"
    width="22"
    fill="#AAAAAA"
    {...props}
  >
    <g>
      <path d="M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1-.7 1.6-1.6 1.6H5.3c-1 0-1.6-.7-1.6-1.6V12c0-1 .7-1.7 1.6-1.7h13.4c1 0 1.6.8 1.6 1.7zm-5 3.3l-5-2.7V18l5-2.7z"></path>
    </g>
  </svg>
);

export const LibIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    height="22"
    width="22"
    fill="#AAAAAA"
    {...props}
  >
    <g>
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"></path>
    </g>
  </svg>
);

export const HistoryIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    height="22"
    width="22"
    fill="#AAAAAA"
    {...props}
  >
    <g>
      <path d="M11.9 3.75c-4.55 0-8.23 3.7-8.23 8.25H.92l3.57 3.57.04.13 3.7-3.7H5.5c0-3.54 2.87-6.42 6.42-6.42 3.54 0 6.4 2.88 6.4 6.42s-2.86 6.42-6.4 6.42c-1.78 0-3.38-.73-4.54-1.9l-1.3 1.3c1.5 1.5 3.55 2.43 5.83 2.43 4.58 0 8.28-3.7 8.28-8.25 0-4.56-3.7-8.25-8.26-8.25zM11 8.33v4.6l3.92 2.3.66-1.1-3.2-1.9v-3.9H11z"></path>
    </g>
  </svg>
);

export const VidIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    height="22"
    width="22"
    fill="#AAAAAA"
    {...props}
  >
    <g>
      <path d="M18.4 5.6v12.8H5.6V5.6h12.8zm0-1.8H5.6a1.8 1.8 0 0 0-1.8 1.8v12.8a1.8 1.8 0 0 0 1.8 1.9h12.8a1.8 1.8 0 0 0 1.9-1.9V5.6a1.8 1.8 0 0 0-1.9-1.8z"></path>
      <path d="M10.2 9v6.5l5-3.2-5-3.2z"></path>
    </g>
  </svg>
);

export const WatchIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    height="22"
    width="22"
    fill="#AAAAAA"
    {...props}
  >
    <g>
      <path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path>
    </g>
  </svg>
);

export const MoreIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    height="22"
    width="22"
    fill="#AAAAAA"
    {...props}
  >
    <g>
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
    </g>
  </svg>
);

export const HamburgerIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    height="22"
    width="22"
    fill="#FFF"
    {...props}
  >
    <g>
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
    </g>
  </svg>
);

export const UploadIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    height="27"
    width="27"
    fill="#FFF"
    focusable="false"
    style={{
      top: "5px",
    }}
    {...props}
  >
    <g>
      <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"></path>
    </g>
  </svg>
);

export const NotificationIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    height="27"
    fill="#FFF"
    width="27"
    {...props}
  >
    <g>
      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
    </g>
  </svg>
);

export const AppsIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    style={{
      width: "27px",
      height: "27px",
    }}
    pointerEvents="none"
    display="block"
    fill="#FFF"
    {...props}
  >
    <g>
      <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
    </g>
  </svg>
);

export const CloseIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    {...props}
  >
    <g>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
    </g>
  </svg>
);

export const SignoutIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    fill="#fff"
    opacity="0.6"
    {...props}
  >
    <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5a2 2 0 00-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
  </svg>
);

export const LikeIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="#AAAAAA"
    width="22"
    height="22"
    {...props}
  >
    <g>
      <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
    </g>
  </svg>
);

export const DislikeIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    width="22"
    height="22"
    {...props}
  >
    <g>
      <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path>
    </g>
  </svg>
);

export const SubscriptionIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    style={{
      pointerEvents: "none",
      display: "block",
      width: "100%",
      height: "100%",
    }}
    {...props}
  >
    <g>
      <path d="M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1-.7 1.6-1.6 1.6H5.3c-1 0-1.6-.7-1.6-1.6V12c0-1 .7-1.7 1.6-1.7h13.4c1 0 1.6.8 1.6 1.7zm-5 3.3l-5-2.7V18l5-2.7z" />
    </g>
  </svg>
);

export const SearchIcon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path
      fill="#fff"
      opacity={0.6}
      d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
    />
  </svg>
);

export const ChannelIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    pointerEvents="none"
    display="block"
    fill="#fff"
    opacity="0.6"
    {...props}
  >
    <g>
      <path d="M3 5v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5a2 2 0 00-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </g>
  </svg>
);

export const SignInIcon = (props) => (
  <svg
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
    style={{
      display: "inline-block",
      width: "1em",
      height: "1em",
      marginRight: 0,
      top: 0,
      fill: "currentColor",
    }}
    {...props}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
  </svg>
);

export const SettingsIcon = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      style={{
        width: "27px",
        height: "27px",
        display: "block",
      }}
      fill="#fff"
      // opacity={0.6}
      {...props}
    >
      <g>
        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
      </g>
    </svg>
  );
};

export const DeleteIcon = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      style={{
        width: "24px",
        height: "24px",
      }}
      fill="#fff"
      opacity={0.6}
      aria-hidden="true"
      {...props}
    >
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
    </svg>
  );
};
