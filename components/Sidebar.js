import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon} from "@heroicons/react/solid";
import {BellIcon, ClipboardIcon, HashtagIcon, InboxIcon, UsersIcon,BookmarkIcon, DotsCircleHorizontalIcon,DotsHorizontalIcon} from "@heroicons/react/outline"


export default function Sidebar() {
  return (
    <div className = "hidden sm:flex flex-col p-2 xl:items-start fixed h-full"> 
        {/* logo  */}
        <div className = "hoverEffect p-0 hover:bg-blue-100 xl:px-1">
            <Image width = "50" height="50" src = "https://help.twitter.com/content/dam/help-twitter/brand/logo.png"></Image>
        </div>


        {/* menu items */}
        <div className="mt-4 mb-2 xl:items-start ">

          <SidebarMenuItem text = "Home" Icon = {HomeIcon} active />    
          <SidebarMenuItem text = "Explore" Icon = {HashtagIcon} />    
          <SidebarMenuItem text = "Notifications" Icon = {BellIcon} />    
          <SidebarMenuItem text = "Messages" Icon = {InboxIcon} />    
          <SidebarMenuItem text = "Bookmarks" Icon = {BookmarkIcon} />    
          <SidebarMenuItem text = "Lists" Icon = {ClipboardIcon} />    
          <SidebarMenuItem text = "Profile" Icon = {UsersIcon} />    
          <SidebarMenuItem text = "More" Icon = {DotsCircleHorizontalIcon} />    
            
        </div>


        {/* button  */}
        <button className ="bg-blue-400 text-white rounded-full w-200 h-11 px-20 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline "
        >
            Tweet
        </button>


        {/* mini-profile */}
        <div className = "hoverEffect text-gray-700 flex items-certer justify-center xl:justify-start mt-auto">

            <img  src ="https://i.pinimg.com/564x/ba/6e/26/ba6e2651a161b6c7d270845a82f888d9.jpg" 
            alt= "user-img" 
            className = "h-10 w-10 rounded-full xl:mr-2"
            />

            <div className = "leading-5 hidden xl:inline">
                <h4 className = "font-bold">shaheed</h4>
                <p className = "text-gray-500">@mdshohidurrahman</p>
            </div>
            <DotsHorizontalIcon className = "h-5 mt-3.5 xl:ml-8 hidden xl:inline"/>
           
        </div>
    </div>
  )
}
