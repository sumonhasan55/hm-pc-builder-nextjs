import Banner from "@/components/Banner";
import Components from "@/components/Components";
import Head from "next/head";
import Link from "next/link";


const HomePage = ({ components }) => {
  return (
    <>
      <Head>
        <title>HM_PC_Builder</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner></Banner>
      <Components components={components}></Components>
      <button className="my-5 text-4xl btn btn-link"><Link href="/featuredCategory">featured category</Link></button>

    </>

  )
}
export default HomePage;


export const getServerSideProps = async () => {
  const res = await fetch("https://pc-builder-data.onrender.com/components")
  const data = await res.json()
  console.log(data)

  return {
    props: {
      components: data
    },

  };
};


