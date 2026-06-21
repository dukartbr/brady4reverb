import { useRef } from 'react';

export default function Dial({title, position, setPosition}: {title: string, position: number, setPosition: (position: number) => void}) {
  const startY = useRef(0);
  const startValue = useRef(0);

	function handlePointerDown(e) {
		startY.current = e.clientY
		startValue.current = position;

		function handlePointerMove(mover) {
			const deltaY = startY.current - mover.clientY;
			const nextValue = startValue.current + deltaY;
			const clamped = Math.max(-140, Math.min(140, nextValue));
			setPosition(clamped)
		}

		const handlePointerUp = () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };

 		window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
	}

	return (
		<div className="dialContainer">
			<div className="dial" style={{
				transform: `rotate(${position}deg)`
			}} onPointerDown={handlePointerDown}>
					<div className="dialLead"></div>
			</div>
			<div className="dialTitle">{title}</div>
		</div>
	)
}
