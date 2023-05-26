import "@/styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const { Component, pageProps } = props;

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider attribute="class" enableSystem={true}>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider theme={{ colorScheme }}>
            <Component {...pageProps} />
          </MantineProvider>
        </ColorSchemeProvider>
      </ThemeProvider>
    </>
  );
}
