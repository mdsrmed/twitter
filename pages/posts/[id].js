import { ArrowLeftIcon } from "@heroicons/react/outline";
import Head from "next/head";
import CommentModal from "../../components/CommentModal";
import Sidebar from "../../components/Sidebar";
import Widgets from "../../components/Widgets";
import Post from "../../components/Post";
import { useRouter } from "next/router";
import {
  collection,
  doc,
  documentId,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import Comment from "../../components/comment";

export default function PostPage({ newsResults, randomUserResults }) {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);
  useEffect(
    () => onSnapshot(doc(db, "posts", id), (snapshot) => setPost(snapshot)),
    [db, id]
  );
  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => setComments(snapshot.docs)
    );
  }, [db, id]);
  return (
    <div>
      <Head>
        <title>Post Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen  mx-auto">
        {/* sidebar */}
        <Sidebar />

        {/* feed */}

        <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[580px] sm:ml-[73px] flex-grow max-w-xl">
          <div className="flex items-center space-x-2 justify-between py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className="hoverEffect" onClick={() => router.push("/")}>
              <ArrowLeftIcon className="h-5" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer p-1">
              Tweet
            </h2>
          </div>
          <Post id={id} post={post} />
          {comments.length > 0 && (
            <div>
              {comments.map((comment) => (
                <Comment
                  key={comment.id}
                  commentId={comment.id}
                  originalPostId={id}
                  comment={comment.data()}
                />
              ))}
            </div>
          )}
        </div>

        {/* widgets */}
        <Widgets
          newsResults={newsResults.articles}
          randomUserResults={randomUserResults.results}
        />

        {/* modal */}
        <CommentModal />
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
