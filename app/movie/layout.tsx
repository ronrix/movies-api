import Header from "@/app/components/header";
import { Metadata } from "next";
import "../globals.css";
import Head from "next/head";

/*
 * Metadata
 * this is set to the metadata of the html element
 */
export const metadata: Metadata = {
  title: "Movie API | Overview",
  description: "Movie Overview",
};
// end metadata

/*
 * This is another page
 *
 * this doesn't need to have html and body
 */
export default function MovieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <section className=''>
        <div>{children}</div>
      </section>
    </>
  );
}
