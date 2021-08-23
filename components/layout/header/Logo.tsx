import Image from 'next/image';
import * as React from 'react';

const Logo = () => {
	const src =
		'/assets/EcoMojaLogoDesign_HorizontalLogoAndName_GreenAndBlack.svg';
	return (
		<Image
			width={250}
			loader={() => src}
			height={65}
			src={src}
			objectFit="cover"
			alt="logo"
		/>
	);
};

export default Logo;
