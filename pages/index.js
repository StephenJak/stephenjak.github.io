import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full">
      <Head>
        <title>Stephen Jakku</title>
        <meta name="description" content="Portfolio website of Stephen Jakku" />
      </Head>
      <div className="flex h-full w-full bg-black text-white justify-center items-center text-2xl">
        <Link href="https://stephenjakku.github.io/">
          <a>Hey there! Click here.</a>
        </Link>
      </div>
    </div>
  );
}
