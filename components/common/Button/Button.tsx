import * as React from 'react';
import { default as cn } from 'classnames';

type ButtonOwnProps<E extends React.ElementType = React.ElementType> = {
	/** The children element(s) of the component */
	children?: React.ReactNode;
	/** Specifies the component variant to render */
	variant?: 'contained' | 'outlined';
	/** Specifies full width Button */
	full?: boolean;
	/** Specifies the HTML element to render */
	as?: E;
};

type PrimaryButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
	Omit<React.ComponentProps<E>, keyof ButtonOwnProps> & {
		/** Indicate primary variant of the Button */
		primary: boolean;
		/** Indicate secondary variant of the Button */
		secondary?: never;
		/** Indicate dark variant of the Button */
		dark?: never;
		/** Indicate light variant of the Button */
		light?: never;
	};

type SecondaryButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
	Omit<React.ComponentProps<E>, keyof ButtonOwnProps> & {
		/** Indicate secondary variant of the Button */
		secondary: boolean;
		/** Indicate primary variant of the Button */
		primary?: never;
		/** Indicate dark variant of the Button */
		dark?: never;
		/** Indicate light variant of the Button */
		light?: never;
	};

type DarkButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
	Omit<React.ComponentProps<E>, keyof ButtonOwnProps> & {
		/** Indicate dark variant of the Button */
		dark: boolean;
		/** Indicate primary variant of the Button */
		primary?: never;
		/** Indicate secondary variant of the Button */
		secondary?: never;
		/** Indicate light variant of the Button */
		light?: never;
	};

type LightButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
	Omit<React.ComponentProps<E>, keyof ButtonOwnProps> & {
		/** Indicate light variant of the Button */
		light: boolean;
		/** Indicate primary variant of the Button */
		primary?: never;
		/** Indicate secondary variant of the Button */
		secondary?: never;
		/** Indicate dark variant of the Button */
		dark?: never;
	};

type ButtonProps<E extends React.ElementType> =
	| PrimaryButtonProps<E>
	| SecondaryButtonProps<E>
	| DarkButtonProps<E>
	| LightButtonProps<E>;

const createClassNames = (
	classes: {
		primary: boolean;
		secondary: boolean;
		dark: boolean;
		light: boolean;
	},
	variant: 'contained' | 'outlined',
): string => {
	let result =
		'flex items-center justify-center py-2 px-3 rounded-sm font-semibold hover:scale-105 hover:animate-heartbeat ' +
		'focus-within:border focus-within:border-opacity-20';
	if (variant === 'contained') {
		if (classes.primary) {
			result +=
				' bg-primary text-white focus-within:border-primary hover:text-white hover:no-underline';
		} else if (classes.secondary) {
			result +=
				' bg-secondary text-black focus-within:border-secondary hover:text-black hover:no-underline';
		} else if (classes.dark) {
			result +=
				' bg-gray-500 text-white focus-within:border-bg-gray-500 hover:text-white hover:no-underline';
		} else if (classes.light) {
			result += ' bg-gray-100 text-black focus-within:border-bg-gray-100';
		}
	} else if (variant === 'outlined') {
		if (classes.primary) {
			result +=
				' bg-gray-200 border border-primary border-solid text-black focus-within:border-primary';
		} else if (classes.secondary) {
			result +=
				' bg-gray-200 border border-secondary border-solid text-black focus-within:border-secondary';
		} else if (classes.dark) {
			result +=
				' bg-gray-200 border border-black border-solid text-black focus-within:border-bg-gray-500';
		} else if (classes.light) {
			result +=
				' bg-gray-100 border border-black border-solid text-black focus-within:border-bg-gray-100';
		}
	}

	return result;
};

const defaultElement = 'button';

const Button = React.forwardRef(
	<E extends React.ElementType = typeof defaultElement>(
		{
			children,
			primary = false,
			secondary = false,
			dark = false,
			light = false,
			variant = 'contained',
			className,
			as,
			...props
		}: ButtonProps<E>,
		ref,
	) => {
		const buttonStyling = createClassNames(
			{
				primary,
				secondary,
				dark,
				light,
			},
			variant,
		);

		// TODO: The following has to be improved
		const TagName = as? 'a' : defaultElement;
		// TODO: Currently if a user passes a classes such as py-4, the component will render classes with duplicate padding classes. This should be avoided
		return (
			<TagName className={cn(buttonStyling, className)} {...props} ref={ref}>
				{children}
			</TagName>
		);
	},
);

Button.displayName = 'Button';

export default Button;
