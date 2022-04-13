import Head from "next/head";
import styles from "../styles/Home.module.css";
import Test from "../components/Test";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-700">
        Hello world!
      </h1>
      <Test />
      <Navbar />
    </div>
  );
}
