import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/context/ThemeContext";
import RootLayout from "@/components/Layout/RootLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem >
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ThemeProvider>
)
}
