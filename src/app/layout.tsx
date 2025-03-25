import QueryProvider from "@/components/QueryProvider";

import "../assets/styles/fonts.scss";
import "../assets/styles/global.scss";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
