import React from 'react'
import { HomeIcon, HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, UserIcon, EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";
import Image from 'next/image';
import SidebBarUserInfo from '../SideBarUserInfo/SidebBarUserInfo';


export default function Sidebar() {
  
  return (
    <nav className="h-screen hidden sm:flex flex-col sticky top-0 p-3 xl:ml-20">
      <div className="relative h-full flex flex-col">
        <div className="py-3">
          <Image src={'/assets/bee_logo.png'} alt="logo" width={52} height={52} />
        </div>
        <ul className='text-white'>
            <SidebarLink Icon={HomeIcon} text="Home"/>
            <SidebarLink Icon={HashtagIcon} text="Explore"/>
            <SidebarLink Icon={BellIcon} text="Notifications"/>
            <SidebarLink Icon={InboxIcon} text="Messages"/>
            <SidebarLink Icon={BookmarkIcon} text="BookMarks"/>
            <SidebarLink Icon={UserIcon} text="Profile"/>
            <SidebarLink Icon={EllipsisHorizontalCircleIcon} text="More"/>
            
            
        </ul>
        <SidebBarUserInfo />
      </div>
        
    </nav>
  )
}

function SidebarLink({text, Icon}){
  return (
  <li className="flex item-center text-xl mb-2 space-x-3 p-2.5 hover:text-yellow-400 cursor-pointer transition-colors duration-200">
    <Icon className="h-7" />
    <span className="hidden xl:block">{text}</span>
    </li>
  );
}

