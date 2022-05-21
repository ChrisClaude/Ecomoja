import Image from 'next/image';
import * as React from 'react';
import { default as cn } from 'classnames';

type LogoProps = {
	width: number,
	height: number,
	className?: string
};

const Logo = ({
	width,
	height,
	className,
}: LogoProps) => {
	const src =
		'/assets/EcoMojaLogoDesign_HorizontalLogoAndName_GreenAndBlack.svg';
	return (
		<Image
			width={width}
			loader={() => src}
			height={height}
			src={src}
			objectFit='cover'
			alt='logo'
			className={cn(className)}
			unoptimized
		/>
	);
};

Logo.defaultProps = {
	className: '',
};

export default Logo;
