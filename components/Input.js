import { EmojiHappyIcon } from "@heroicons/react/outline";
import { PhotographIcon } from "@heroicons/react/outline";
import { data } from "autoprefixer";
import { useSession, signOut } from "next-auth/react";

export default function Input() {
  const { data: session, status } = useSession();

  console.log(session, status);

  return (
    <>
      {session && (
        <div className="flex border-b border-gray-200 p-3 space-x-3">
          <img
            onClick={signOut}
            src={session.user.image}
            alt="user-img"
            className="h-11 w-11 cursor-pointer hover:brightness-95 rounded-full m-2"
          />

          <div className="w-full divide-y divide-gray-200">
            <div>
              <textarea
                className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
                row="2"
                placeholder="What's happening?"
              />
            </div>
            <div className=" flex items-center justify-between p-2">
              <div className="flex">
                <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
                <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
              </div>
              <button className="bg-blue-400 text-white px-4 py-2 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50">
                {" "}
                Tweet{" "}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
