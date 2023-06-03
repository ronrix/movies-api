import "./globals.css";
import { Poppins, Nunito } from "next/font/google";

// init fonts
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
});
// end init fonts

// metadata
export const metadata = {
  title: "Movie API",
  description: "A personal prpoject | Movie Database API",
};
// end metadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <title>Movie API</title>
        <meta
          name='description'
          content='A personal project | Movie Database API'
        />
        <meta name='keywords' content='Movie, API, Projects' />
        <meta name='author' content='Ronrix Lante' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>

        {/* fontawesoem cdn */}
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
          integrity='sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
