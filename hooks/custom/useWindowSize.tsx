import { useEffect, useState } from 'react';

type Size = {
	width: number | undefined;
	height: number | undefined;
}

const useWindowSize = (): Size => {
	const [windowSize, setWindowSize] = useState<Size>({
		width: undefined,
		height: undefined,
	});
	useEffect(() => {
		// Handler to call on window resize
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		
		window.addEventListener("resize", handleResize);
		
		// Call handler right away so state gets updated with initial window size
		handleResize();
		
		return () => window.removeEventListener("resize", handleResize);
	}, []); 
	return windowSize;
}

export default useWindowSize;
