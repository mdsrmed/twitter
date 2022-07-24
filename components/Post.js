import { ChartBarIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from "@heroicons/react/outline";


export default function Post({post}) {
  return (
    <div className = "flex p-3 cursor-pointer border-b border-gray-200">
        {/* image*/}
        <img src={post.userImg} alt = "user-img" className = "w-11 h-11 rounded-full mr-4" />
        <div> 
            {/* header */}
            <div className = "flex items-certer justify-between"> 
                {/* userinfo */}
                <div className = "flex items-center space-x-1.5 whitespace-nowrap"> 
                    <h4 className = "font-bold test-[15px] sm:text-[16px] hover:underline"> {post.name}</h4>
                    <span className = "text-sm sm:text-[15px]"> @{post.username} -</span>
                    <span className = "text-sm sm:text-[15px] hover:underline"> {post.timestamp}</span>

                </div>
                {/* icon */}
                <DotsHorizontalIcon className = "h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2"/>
            </div>
            {/* post text */}
            <p className = "text-gray-800 text-[15px] sm:text-[16px] mb-2"> {post.text}</p>

            {/* post img */}
            <img src={post.img} alt = "img"  className ="rounded-2xl mr-2 w-[500px] h-[350px]" />
            {/* bottom icons*/}
            <div className = "flex justify-between text-gray-500 p-2"> 
                <ChatIcon className = "h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"/>
                <TrashIcon className = "h-9 w-9 hoverEffect p-2 hover:text-red-500 hover:bg-red-100"/>
                <HeartIcon className = "h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"/>
                <ShareIcon className = "h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"/>
                <ChartBarIcon className = "h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"/>
            </div>
        </div>
    </div>
  )
}
