import Image from 'next/image';
import * as React from 'react';

const Logo = () => {
	const src =
		'/assets/ecomojalogodesign_horizontallogoandname_greenandblack.png';
	return (
		<Image width={105} loader={() => src} height={125} src={src} alt="logo" />
	);
};

export default Logo;
