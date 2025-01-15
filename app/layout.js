import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GPTGenius",
  description:
    "This app is powered by ChatGPT API. You can ask any question as you like and it will give you the best answer. You can also request your next vacation plans with the destinations of your choice and it will automatically create the trip plans with places to go to for you, which can be saved on the Postgre SQL DB on the cloud",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
