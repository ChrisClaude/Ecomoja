import * as React from 'react';
import { default as cn } from 'classnames';

type SwiperButtonProps = {
	children: React.ReactNode;
} & React.HTMLProps<HTMLButtonElement>;

const SwiperButton = ({
	children,
	className,
	onClick,
	...props
}: SwiperButtonProps) => (
	<button
		className={cn(
			'absolute inset-y-1/2 block focus-within:outline-none',
			className,
		)}
		onClick={onClick}
		disabled={props.disabled}
		type="button"
	>
		{children}
	</button>
);

export default SwiperButton;
