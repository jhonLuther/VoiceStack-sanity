import React from 'react';

export const PulsingConnectionSVG = () => {
  return (
    <svg 
      width="1096" 
      height="392" 
      viewBox="0 0 1096 392" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{`
        @keyframes pulse-left-right {
          0% { stroke-dashoffset: 1000; }
          50% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -1000; }
        }

        @keyframes pulse-right-left {
          0% { stroke-dashoffset: -1000; }
          50% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 1000; }
        }
      `}</style>

      {/* Top Left Path */}
      <path 
        d="M0 233H320.151C331.197 233 340.151 241.954 340.151 253V295C340.151 306.046 349.106 315 360.151 315H550" 
        stroke="#3B82F6" 
        strokeWidth="2"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        style={{
          animation: 'pulse-left-right 3s linear infinite',
          animationDelay: '0s'
        }}
      />

      {/* Top Right Path */}
      <path 
        d="M1081 233H776.679C765.633 233 756.679 241.954 756.679 253V295C756.679 306.046 747.724 315 736.679 315H550" 
        stroke="#10B981" 
        strokeWidth="2"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        style={{
          animation: 'pulse-right-left 3s linear infinite',
          animationDelay: '0.5s'
        }}
      />

      {/* Left Middle Path 1 */}
      <path 
        d="M550 227L550 175.361C550 164.316 541.046 155.361 530 155.361L263 155.361C251.954 155.361 243 146.407 243 135.361L243 43" 
        stroke="#8B5CF6" 
        strokeWidth="2"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        style={{
          animation: 'pulse-left-right 3s linear infinite',
          animationDelay: '1s'
        }}
      />

      {/* Left Middle Path 2 */}
      <path 
        d="M550 227L550 175.361C550 164.316 541.046 155.361 530 155.361L413 155.361C401.954 155.361 393 146.407 393 135.361L393 43" 
        stroke="#F43F5E" 
        strokeWidth="2"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        style={{
          animation: 'pulse-left-right 3s linear infinite',
          animationDelay: '1.5s'
        }}
      />

      {/* Right Middle Path 1 */}
      <path 
        d="M550 226L550 176.279C550 165.234 558.954 156.279 570 156.279L835 156.279C846.046 156.279 855 147.325 855 136.279L855 43" 
        stroke="#F59E0B" 
        strokeWidth="2"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        style={{
          animation: 'pulse-right-left 3s linear infinite',
          animationDelay: '2s'
        }}
      />

      {/* Right Middle Path 2 */}
      <path 
        d="M550 226L550 175.712C550 164.667 558.954 155.712 570 155.712L690 155.713C701.046 155.713 710 146.758 710 135.712L710 43" 
        stroke="#6366F1" 
        strokeWidth="2"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        style={{
          animation: 'pulse-right-left 3s linear infinite',
          animationDelay: '2.5s'
        }}
      />

      {/* Bottom Paths */}
      <path 
        d="M1096 391H777.426C766.381 391 757.426 382.046 757.426 371V335C757.426 323.954 748.472 315 737.426 315H550" 
        stroke="#22D3EE" 
        strokeWidth="2"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        style={{
          animation: 'pulse-right-left 3s linear infinite',
          animationDelay: '3s'
        }}
      />

      <path 
        d="M15 390H320.151C331.197 390 340.151 381.046 340.151 370V335C340.151 323.954 349.106 315 360.151 315H550" 
        stroke="#A855F7" 
        strokeWidth="2"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        style={{
          animation: 'pulse-left-right 3s linear infinite',
          animationDelay: '3.5s'
        }}
      />

      {/* Horizontal Line */}
      <path 
        d="M19 314.5L1053 314.5" 
        stroke="#E5E7EB" 
        strokeDasharray="10 10"
        style={{
          animation: 'dash 2s linear infinite'
        }}
      />

      {/* Vertical Line */}
      <line 
        x1="550.5" 
        y1="2.18557e-08" 
        x2="550.5" 
        y2="346" 
        stroke="#E5E7EB" 
        strokeDasharray="10 10"
        style={{
          animation: 'dash 2s linear infinite'
        }}
      />

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
      `}</style>
    </svg>
  );
};

export default PulsingConnectionSVG;