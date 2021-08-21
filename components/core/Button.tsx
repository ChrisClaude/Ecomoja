import * as React from 'react';

type ButtonOwnProps<E extends React.ElementType = React.ElementType> = {
	/** The children element(s) of the component */
	children?: React.ReactNode;
	/** Specifies the component variant to render */
	variant: 'contained' | 'outlined';
	/** Specifies the HTML element to render */
	as?: E;
};

type PrimaryButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
	Omit<React.ComponentProps<E>, keyof ButtonOwnProps> & {
		/** Indicate primary variant of the button */
		primary: boolean;
		/** Indicate secondary variant of the button */
		secondary?: never;
		/** Indicate dark variant of the button */
		dark?: never;
		/** Indicate light variant of the button */
		light?: never;
	};

type SecondaryButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
	Omit<React.ComponentProps<E>, keyof ButtonOwnProps> & {
		/** Indicate secondary variant of the button */
		secondary: boolean;
		/** Indicate primary variant of the button */
		primary?: never;
		/** Indicate dark variant of the button */
		dark?: never;
		/** Indicate light variant of the button */
		light?: never;
	};

type DarkButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
	Omit<React.ComponentProps<E>, keyof ButtonOwnProps> & {
		/** Indicate dark variant of the button */
		dark: boolean;
		/** Indicate primary variant of the button */
		primary?: never;
		/** Indicate secondary variant of the button */
		secondary?: never;
		/** Indicate light variant of the button */
		light?: never;
	};

type LightButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
	Omit<React.ComponentProps<E>, keyof ButtonOwnProps> & {
		/** Indicate light variant of the button */
		light: boolean;
		/** Indicate primary variant of the button */
		primary?: never;
		/** Indicate secondary variant of the button */
		secondary?: never;
		/** Indicate dark variant of the button */
		dark?: never;
	};

type ButtonProps<E extends React.ElementType> =
	| PrimaryButtonProps<E>
	| SecondaryButtonProps<E>
	| DarkButtonProps<E>
	| LightButtonProps<E>;

/**
 * This method switches between classes required for different button variant (contained or outlined) and styles (e.g: primary, secondary, etc...).
 * */
const switchButtonClassesVariant = (
	key: string,
	variant: 'contained' | 'outlined',
) => {
	let value = '';
	if (variant === 'outlined') {
		switch (key) {
			case 'primary':
				value = ' border-primary text-primary hover:bg-primary';
				break;
			case 'secondary':
				value = ' border-secondary text-secondary hover:bg-secondary';
				break;
			case 'light':
				value = ' border-light text-light hover:bg-light hover:text-dark';
				break;
			case 'dark':
				value = ' border-dark text-dark hover:bg-dark';
				break;
			default:
				value = '';
				break;
		}
	} else if (variant === 'contained') {
		switch (key) {
			case 'primary':
				value =
					' border-primary bg-primary text-white hover:bg-light hover:text-primary';
				break;
			case 'secondary':
				value =
					' border-secondary bg-secondary text-white hover:bg-light hover:text-secondary';
				break;
			case 'light':
				value =
					' border-light bg-light text-dark hover:bg-dark hover:text-white';
				break;
			case 'dark':
				value =
					' border-dark bg-dark text-white hover:bg-light hover:text-dark';
				break;
			default:
				value = '';
				break;
		}
	}

	return value;
};

const createClassNames = (
	classes: { [key: string]: boolean },
	variant: 'contained' | 'outlined' | undefined,
): string => {
	let classNames = 'py-3 px-9 rounded-md focus:outline-none';

	for (const [key, value] of Object.entries(classes)) {
		if (value) {
			if (variant === 'outlined') {
				classNames += ` border-solid border-2 hover:text-white`;
			} else if (variant === 'contained') {
				classNames += ` border-solid border-2 hover:bg-light `;
			}

			classNames += switchButtonClassesVariant(key, variant);
		}
	}

	return classNames.trim();
};

const defaultElement = 'button';

// TODO: This is not rendering as expect in production
const Button = <E extends React.ElementType = typeof defaultElement>({
	children,
	primary = false,
	secondary = false,
	dark = false,
	light = false,
	variant,
	as,
}: ButtonProps<E>) => {
	// TODO: Add option for full width buttons
	const classNames = createClassNames(
		{
			primary,
			secondary,
			dark,
			light,
		},
		variant,
	);
	const TagName = as || defaultElement;

	return <TagName className={classNames}>{children}</TagName>;
};

export default Button;
