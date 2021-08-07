import Image from 'next/image';
import * as React from 'react';

const Logo = () => {
	const src =
		'https://crazeenvironmental.com/wp-content/uploads/2020/10/cropped-Web-Grey-logo-with-WB-160x101.png';
	return (
		<Image width={85} loader={() => src} height={45} src={src} alt="logo" />
	);
};

export default Logo;
