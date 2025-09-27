import { useRef, useEffect } from 'react';

export default function Button({
  onHold = () => {},
  onClick = () => {},
  text,
  cn,
}: {
  onHold?: () => void
  onClick?: () => void;
  text?: string;
  cn?: string;
}) {
  let clickTime = useRef(0);
  const handleMouseDown = () => {
    clickTime.current = new Date().getTime();
  };
  const handleMouseUp = () => {
    const currentTime = new Date().getTime();
    if (currentTime - clickTime.current > 150) { onHold() }
  };

  return (
    <div 
      className={(cn ?? "") + " hover:shadow-xl hover:-translate-x-1 hover:-translate-y-1 transition-[box-shadow,transform] active:translate-x-0 active:translate-y-0 active:shadow-none"}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={onClick}
    >{text ?? ""}</div>
  );
}