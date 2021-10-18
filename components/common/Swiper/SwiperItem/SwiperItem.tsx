import * as React from 'react';
import { default as cn } from 'classnames';

type SwiperProps = {
	children: React.ReactNode;
} & React.HTMLProps<HTMLDivElement>;

const SwiperItem = ({ children, className }: SwiperProps) => (
	<div className={cn('h-full w-full', className)}>{children}</div>
);

export default SwiperItem;
