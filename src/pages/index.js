// import Image from "next/image";
// import { Inter } from "@next/font/google";
import Head from 'next/head';
import MainLayout from '@/layouts/MainLayout';

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>MindMate - Home</title>
      </Head>
      <MainLayout>
        <h1>Home Page</h1>
      </MainLayout>
    </>
  );
}
