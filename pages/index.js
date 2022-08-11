import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

export default function Home({ newsResults, randomUserResults }) {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen  mx-auto">
        {/* sidebar */}
        <Sidebar />

        {/* feed */}
        <Feed />

        {/* widgets */}
        <Widgets
          newsResults={newsResults.articles}
          randomUserResults={randomUserResults.results}
        />

        {/* modal */}
      </main>
    </div>
  );
}
//https://saurav.tech/NewsAPI/everything/cnn.json
//https://randomuser.me/api/?results=100&inc=name,login,picture

export async function getServerSideProps() {
  //whats happening section
  const newsResults = await fetch(
    "https://saurav.tech/NewsAPI/everything/cnn.json"
  ).then((res) => res.json());

  const randomUserResults = await fetch(
    "https:/randomuser.me/api/?results=100&inc=name,login,picture"
  ).then((res) => res.json());

  return {
    props: {
      newsResults,
      randomUserResults,
    },
  };
}
