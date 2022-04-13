import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Test from "../components/Test";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-700">
        Hello world!
      </h1>
      <Test />
    </div>
  );
}
