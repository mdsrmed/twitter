import { SparklesIcon } from "@heroicons/react/outline";
import {
  collection,
  onSnapshot,
  orderBy,
  Query,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    []
  );
  /*const posts = [
    {
      id : "1",
      name : "Md Shohidur Rahman",
      username : "shaheed",
      userImg : "https://i.pinimg.com/564x/ba/6e/26/ba6e2651a161b6c7d270845a82f888d9.jpg",
      img : "https://images.unsplash.com/photo-1658524389254-9ac4bd0083e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
      text : "abstract",
      timestamp : "1 hour ago"
    },
    {
      id : "2",
      name : "Muhammad Shohidur Rahman",
      username : "shahid",
      userImg : "https://cdn.shopify.com/s/files/1/0803/3763/products/9468-1_5000x.jpg?v=1571567703",
      img : "https://images.unsplash.com/photo-1658518832556-9d3fcbf51be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      text : "antique",
      timestamp : "2 hours ago"
    },
  ]*/
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[580px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex justify-between py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer p-1">
          Home
        </h2>
        <div className="hoverEffect flex items-center justify-center px-0 w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
