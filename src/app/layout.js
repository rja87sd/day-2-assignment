import "./globals.css";

export const metadata = {
  title: "Week 2 Day 2 Assignment",
  description: "Basic application used to learn how state works",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
