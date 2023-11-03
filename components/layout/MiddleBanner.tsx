import * as React from 'react';
import Head from 'next/head';
import { url } from 'inspector';

const MiddleBanner = ({image}) => (
	<div className='bg-fixed h-screen bg-cover bg-origin-border bg-no-repeat' style={{backgroundImage: `url("${image}")`}}/>
);

export default MiddleBanner;
