import React from 'react';
import App from 'next/app';
import Head from "next/head";
import { ThemeProvider } from '@mui/material/styles';

import 'react-contexify/dist/ReactContexify.css';
import '@styles/cReactToastify.css';

import '@styles/animation.css';
import '@styles/cAnimation.css';
import '@styles/main.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@cores/index';

import { theme } from '@styles/theme';

import RootContainer from '@containers/root';

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
				</Head>
				<ThemeProvider theme={theme}>
					<RootContainer>
						<Component {...pageProps} />
					</RootContainer>
				</ThemeProvider>
			</>
		);
	}
}

export default MyApp;