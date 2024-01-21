import Banner from "@/components/Banner";
import Components from "@/components/Components";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [components, setComponents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://pc-builder-data.onrender.com/components");
        const data = await res.json();
        setComponents(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>HM_PC_Builder</title>
        <meta
          name="description"
          content="This is the news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />

      {loading ? (
       <span className="loading loading-spinner text-accent"></span>
      ) : (
        <>
          <Components components={components} />
          <button className="my-5 text-4xl btn btn-link">
            <Link href="/featuredCategory">featured category</Link>
          </button>
        </>
      )}
    </>
  );
};

export default HomePage;
