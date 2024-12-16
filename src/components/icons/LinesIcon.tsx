import React from 'react';

export const ConvergingParticleSVG = () => {
  return (
    <svg 
      width="1096" 
      height="392" 
      viewBox="0 0 1096 392" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <style>{`
        @keyframes converge-top-left {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
        @keyframes converge-top-right {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
        @keyframes converge-left-top {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
        @keyframes converge-left-bottom {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
        @keyframes converge-right-top {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
        @keyframes converge-right-bottom {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
        @keyframes converge-bottom-left {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
        @keyframes converge-bottom-right {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
        @keyframes converge-horizontal {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
        @keyframes converge-vertical {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
      `}</style> */}

      {/* Paths (kept as original light gray) */}
      <path 
        d="M0 233H320.151C331.197 233 340.151 241.954 340.151 253V295C340.151 306.046 349.106 315 360.151 315H550" 
        stroke="#E5E7EB"
        strokeWidth="1"
        id="path-top-left"
      />
      <path 
        d="M1081 233H776.679C765.633 233 756.679 241.954 756.679 253V295C756.679 306.046 747.724 315 736.679 315H550" 
        stroke="#E5E7EB"
        strokeWidth="1"
        id="path-top-right"
      />
      <path 
        d="M550 227L550 175.361C550 164.316 541.046 155.361 530 155.361L263 155.361C251.954 155.361 243 146.407 243 135.361L243 43" 
        stroke="#E5E7EB"
        strokeWidth="1"
        id="path-left-top"
      />
      <path 
        d="M550 227L550 175.361C550 164.316 541.046 155.361 530 155.361L413 155.361C401.954 155.361 393 146.407 393 135.361L393 43" 
        stroke="#E5E7EB"
        strokeWidth="1"
        id="path-left-bottom"
      />
      <path 
        d="M550 226L550 176.279C550 165.234 558.954 156.279 570 156.279L835 156.279C846.046 156.279 855 147.325 855 136.279L855 43" 
        stroke="#E5E7EB"
        strokeWidth="1"
        id="path-right-top"
      />
      <path 
        d="M550 226L550 175.712C550 164.667 558.954 155.712 570 155.712L690 155.713C701.046 155.713 710 146.758 710 135.712L710 43" 
        stroke="#E5E7EB"
        strokeWidth="1"
        id="path-right-bottom"
      />
      <path 
        d="M1096 391H777.426C766.381 391 757.426 382.046 757.426 371V335C757.426 323.954 748.472 315 737.426 315H550" 
        stroke="#E5E7EB"
        strokeWidth="1"
        id="path-bottom-left"
      />
      <path 
        d="M15 390H320.151C331.197 390 340.151 381.046 340.151 370V335C340.151 323.954 349.106 315 360.151 315H550" 
        stroke="#E5E7EB"
        strokeWidth="1"
        id="path-bottom-right"
      />
      <path 
        d="M19 314.5L1053 314.5" 
        stroke="#E5E7EB"
        strokeWidth="1"
        id="path-horizontal"
      />
      <line 
        x1="550.5" 
        y1="2.18557e-08" 
        x2="550.5" 
        y2="300" 
        stroke="#E5E7EB"
        strokeWidth="1"
        id="path-vertical"
      />

      {/* Animated Particles */}
      {/* <circle 
        r="3" 
        fill="#4A3CE1"
        style={{
          offsetPath: 'path("M0 233H320.151C331.197 233 340.151 241.954 340.151 253V295C340.151 306.046 349.106 315 360.151 315H550")',
          animation: 'converge-top-left 2s linear infinite',
          offsetRotate: '0deg'
        }}
      />
      <circle 
        r="3" 
        fill="#4A3CE1"
        style={{
          offsetPath: 'path("M1081 233H776.679C765.633 233 756.679 241.954 756.679 253V295C756.679 306.046 747.724 315 736.679 315H550")',
          animation: 'converge-bottom-left 3s linear infinite',
          offsetRotate: '0deg'
        }}
      />
      <circle 
        r="3" 
        fill="#4A3CE1"
        style={{
          offsetPath: 'path("M550 227L550 175.361C550 164.316 541.046 155.361 530 155.361L263 155.361C251.954 155.361 243 146.407 243 135.361L243 43")',
          animation: 'converge-left-top 3s linear infinite',
          offsetRotate: '0deg'
        }}
      />
      <circle 
        r="3" 
        fill="#4A3CE1"
        style={{
          offsetPath: 'path("M550 227L550 175.361C550 164.316 541.046 155.361 530 155.361L413 155.361C401.954 155.361 393 146.407 393 135.361L393 43")',
          animation: 'converge-left-bottom 3s linear infinite',
          offsetRotate: '0deg'
        }}
      />
      <circle 
        r="3" 
        fill="#4A3CE1"
        style={{
          offsetPath: 'path("M550 226L550 176.279C550 165.234 558.954 156.279 570 156.279L835 156.279C846.046 156.279 855 147.325 855 136.279L855 43")',
          animation: 'converge-right-top 3s linear infinite',
          offsetRotate: '0deg'
        }}
      />
      <circle 
        r="3" 
        fill="#4A3CE1"
        style={{
          offsetPath: 'path("M550 226L550 175.712C550 164.667 558.954 155.712 570 155.712L690 155.713C701.046 155.713 710 146.758 710 135.712L710 43")',
          animation: 'converge-right-bottom 3s linear infinite',
          offsetRotate: '0deg'
        }}
      />
      <circle 
        r="3" 
        fill="#4A3CE1"
        style={{
          offsetPath: 'path("M1096 391H777.426C766.381 391 757.426 382.046 757.426 371V335C757.426 323.954 748.472 315 737.426 315H550")',
          animation: 'converge-bottom-left 3s linear infinite',
          offsetRotate: '0deg'
        }}
      />
      <circle 
        r="3" 
        fill="#4A3CE1"
        style={{
          offsetPath: 'path("M15 390H320.151C331.197 390 340.151 381.046 340.151 370V335C340.151 323.954 349.106 315 360.151 315H550")',
          animation: 'converge-bottom-right 3s linear infinite',
          offsetRotate: '0deg'
        }}
      />
      <circle 
        r="3" 
        fill="#4A3CE1"
        style={{
          offsetPath: 'path("M19 314.5L1053 314.5")',
          animation: 'converge-horizontal 3s linear infinite',
          offsetRotate: '0deg'
        }}
      />
      <circle 
        r="3" 
        fill="#4A3CE1"
        style={{
          offsetPath: 'path("M550.5 0V346")',
          animation: 'converge-vertical 3s linear infinite',
          offsetRotate: '0deg'
        }}
      /> */}
    </svg>
  );
};

export default ConvergingParticleSVG;