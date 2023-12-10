import Image from 'next/image';
import * as React from 'react';
import { default as cn } from 'classnames';
import router from 'next/router';

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

		function reloadShoppingMobilityButtons(){
			router.push('/').then(()=>{
				router.reload();
			});
		}

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
			onClick={()=>reloadShoppingMobilityButtons()}
		/>
	);
};

Logo.defaultProps = {
	className: '',
};

export default Logo;
