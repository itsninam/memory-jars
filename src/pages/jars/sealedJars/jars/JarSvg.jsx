import React from "react";

function JarSvg({ fill, id }) {
  const clipId = `jarClip-${id}`;
  const gradId = `fillGrad-${id}`;

  return (
    <svg width="46" viewBox="20 0 120 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id={clipId}>
          <rect x="20" y="40" width="120" height="152" rx="18" />
        </clipPath>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={fill} />
          <stop offset="100%" stopColor={fill} />
        </linearGradient>
      </defs>

      <rect
        x="20"
        y="40"
        width="120"
        height="152"
        rx="18"
        fill="white"
        stroke="#E5E7EB"
        strokeWidth="1.5"
      />

      <rect
        x="20"
        y="40"
        width="120"
        height="152"
        fill={`url(#${gradId})`}
        opacity="0.45"
        clipPath={`url(#${clipId})`}
      />

      <rect
        x="32"
        y="54"
        width="7"
        height="124"
        rx="3.5"
        fill="white"
        opacity="0.55"
      />

      <rect
        x="30"
        y="28"
        width="100"
        height="14"
        rx="5"
        fill="#F5F5F7"
        stroke="#E5E7EB"
        strokeWidth="1.2"
      />

      <rect x="52" y="13" width="56" height="17" rx="4" fill="#C8975A" />
      <rect
        x="54"
        y="15"
        width="52"
        height="5"
        rx="2"
        fill="#DEBA82"
        opacity="0.55"
      />
      <rect
        x="54"
        y="23"
        width="52"
        height="1.5"
        rx="1"
        fill="#B8824A"
        opacity="0.35"
      />
      <rect
        x="54"
        y="27"
        width="52"
        height="1.5"
        rx="1"
        fill="#B8824A"
        opacity="0.35"
      />

      <rect x="56" y="5" width="48" height="11" rx="5" fill="#DEBA82" />
      <rect
        x="58"
        y="6"
        width="44"
        height="4"
        rx="2"
        fill="#E8C88E"
        opacity="0.6"
      />
    </svg>
  );
}

export default JarSvg;
