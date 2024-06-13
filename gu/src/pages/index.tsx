import Head from "next/head";
import styles from "@/styles/Home.module.css";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [day, setDay] = useState(2);
  const [wolfImages, setWolfImages] = useState<React.ReactNode[]>([]);
  const [villagerImages, setVillagerImages] = useState<React.ReactNode[]>([]);

  const router = useRouter();

  useEffect(() => { }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="WerenWorlf" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.containerIndex}>
        <button
          type="submit"
          onClick={() => {
            router.push("/dashboard");
          }}
          className={styles.buttonIndex}
        >
          Dashboard
        </button>
      </div>
    </>
  );
}
