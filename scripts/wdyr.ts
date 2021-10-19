import * as React from 'react';

if (process.env.NODE_ENV === 'development') {
	if (typeof window !== 'undefined') {
		// eslint-disable-next-line global-require,import/no-extraneous-dependencies
		const whyDidYouRender = require('@welldone-software/why-did-you-render');
		whyDidYouRender(React, {
			trackAllPureComponents: true,
		});
	}
}
