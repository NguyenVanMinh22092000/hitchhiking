import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@mui/styles';

export default class MyDocument extends Document {

	static async getInitialProps(ctx) {
		let initialSeoConfig = {};
		const sheet = new ServerStyleSheets();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collect(<App {...props} />),
				})

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps, initialSeoConfig,
				styles: [
					...React.Children.toArray(initialProps.styles),
					sheet.getStyleElement(),
				],
			}
		} finally {
			// sheet.seal()
		}
	}

	render() {
		const { initialSeoConfig } = this.props;
		const seoConfig = initialSeoConfig || {};
		return (
			<Html lang="en">
				<Head>
					<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
					{/* START: favicon */}
					<link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
					<link rel="manifest" href="/static/favicon/site.webmanifest" />
					<link rel="shortcut icon" href="/static/favicon/favicon.ico" />
					<link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#009343" />
					<meta name="msapplication-TileImage" content="/static/favicon/mstile-144x144.png" />
					<meta name="msapplication-config" content="/static/favicon/browserconfig.xml" />
					<meta name="theme-color" content={'#ffffff'} />
					{/* END: favicon */}
					{/* START: custom header */}
					<meta name="google-site-verification" content="" />
					<link rel="canonical" href={seoConfig.canonical} />
					<meta name="description" content={seoConfig.description} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:site" content={"@Castrol"} />

					{/* <meta name="twitter:creator" content="@kds(minhnguyenkhoi)" /> */}
					<meta property="og:type" content="website" />
					<meta property="og:locale" content="en_US" />
					<meta property="og:site_name" content={seoConfig.siteName || "Castrol"} />
					<meta property="og:title" content={seoConfig.siteName || ''} />
					<meta property="og:url" content={seoConfig.canonical} />
					<meta property="og:title" content={seoConfig.title} />
					<meta property="og:description" content={seoConfig.description} />
					<meta property="og:image" content={seoConfig.thumbnail} />
					<meta property="og:image:alt" content="" />
					<meta property="og:image:width" content="800" />
					<meta property="og:image:height" content="600" />
					{/* END: custom header */}
					<meta name="robots" content="index,follow" />
					<meta name="googlebot" content="index,follow" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}

}