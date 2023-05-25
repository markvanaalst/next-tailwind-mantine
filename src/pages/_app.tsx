import '@/styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { ThemeProvider, useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
	const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
	const [mounted, setMounted] = useState(false);
	const { theme, resolvedTheme } = useTheme();
	const { Component, pageProps } = props;

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
	console.log(theme);

	if (theme != undefined) theme == 'dark' ? toggleColorScheme('dark') : toggleColorScheme('light');

	return (
		<>
			<Head>
				<title>Page title</title>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			</Head>
			<ThemeProvider attribute="class">
				<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
					<MantineProvider theme={{ colorScheme }}>
						<Component {...pageProps} />
					</MantineProvider>
				</ColorSchemeProvider>
			</ThemeProvider>
		</>
	);
}
