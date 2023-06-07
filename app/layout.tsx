import { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

/*
 * Metadata
 * this is set to the metadata of the html element
 */
export const metadata: Metadata = {
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
      <Head>
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
      </Head>
      <body>{children}</body>
    </html>
  );
}
