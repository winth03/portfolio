import type { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "Nutpapop Yasawut — Portfolio",
  description: "System & Platform Engineer | Game Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
