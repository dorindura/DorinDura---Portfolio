import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-blue-300 overscroll-y-none`}>{children}</body>
    </html>
  );
}
