import Image from 'next/image';
import * as React from 'react';

const Logo = () => {
	const src =
		'/assets/EcoMojaLogoDesign_HorizontalLogoAndName_GreenAndBlack.svg';
	return (
		<Image width={270} loader={() => src} height={155} src={src} alt="logo" />
	);
};

export default Logo;
