interface SectionDividerProps {
  fromColor: string;
  toColor: string;
  variant?: 'curve' | 'wave';
}

const SectionDivider = ({ fromColor, toColor, variant = 'curve' }: SectionDividerProps) => {
  const path =
    variant === 'wave'
      ? 'M0,64 C320,120 640,0 960,64 C1280,128 1440,32 1440,32 L1440,0 L0,0 Z'
      : 'M0,96 C480,0 960,128 1440,48 L1440,0 L0,0 Z';

  return (
    <div className="relative -mt-1" style={{ background: toColor }}>
      <svg
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        className="block w-full h-12 sm:h-16 md:h-20"
        aria-hidden="true"
      >
        <path d={path} fill={fromColor} />
      </svg>
    </div>
  );
};

export default SectionDivider;
