import React from "react";

function JarSvg({ fill, id }) {
  const clipId = `jarClip-${id}`;
  const gradId = `fillGrad-${id}`;

  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 160 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M30 60 Q28 58 26 55 L22 40 Q20 35 30 33 L130 33 Q140 35 138 40 L134 55 Q132 58 130 60 L128 180 Q128 190 118 192 L42 192 Q32 190 32 180 Z" />
        </clipPath>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={fill} />
          <stop offset="100%" stopColor={fill} />
        </linearGradient>
      </defs>

      <path
        d="M30 60 Q28 58 26 55 L22 40 Q20 35 30 33 L130 33 Q140 35 138 40 L134 55 Q132 58 130 60 L128 180 Q128 190 118 192 L42 192 Q32 190 32 180 Z"
        fill="white"
        stroke="#E5E7EB"
        strokeWidth="1.5"
      />

      <rect
        x="22"
        y="40"
        width="116"
        height="152"
        fill={`url(#${gradId})`}
        clipPath={`url(#${clipId})`}
      />

      <rect
        x="18"
        y="24"
        width="124"
        height="16"
        rx="5"
        fill="#F9FAFB"
        stroke="#E5E7EB"
        strokeWidth="1.5"
      />
      <rect
        x="50"
        y="17"
        width="60"
        height="13"
        rx="4"
        fill="#F9FAFB"
        stroke="#E5E7EB"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default JarSvg;
