import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider enableSystem={true} attribute="class">
			<Component {...pageProps} />
			<Analytics />
		</ThemeProvider>
	);
}

export default MyApp;
