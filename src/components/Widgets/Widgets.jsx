import { EllipsisHorizontalIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function Widgets() {
  return (
    <div className="p-3 hidden  lg:flex flex-col bg-black w-[350px] space-y-4 text-white ps-10">
      {/* 🔍 Search Bar */}
      <div className="flex items-center space-x-3 bg-[#EFF3F4] text-[#89959D] rounded-full px-4 py-2">
        <MagnifyingGlassIcon className="w-5 h-5" />
        <input
          type="text"
          placeholder="Search Busy Bee"
          className="bg-transparent outline-none text-sm flex-1 text-black"
        />
      </div>

      {/* 📌 What's Happening Section */}
      <div className="bg-black border border-white rounded-xl p-3 space-y-4 text-white">
        <h1 className="text-xl font-bold">What's Happening?</h1>

        {[
          { title: "ReactJS", count: "240K Bumbles" },
          { title: "Angular", count: "120K Bumbles" },
          { title: "Donald Trump", count: "300K Bumbles" },
          { title: "JavaScript", count: "100K Bumbles" },
        ].map((trend, i) => (
          <div key={i} className="flex flex-col text-sm space-y-1">
            <div className="flex justify-between text-[#536471]">
              <span>Trending in Australia</span>
              <EllipsisHorizontalIcon className="w-5 h-5" />
            </div>
            <span className="font-bold text-md">{trend.title}</span>
            <span className="text-[#536471] text-xs">{trend.count}</span>
          </div>
        ))}
      </div>

      {/* 👥 Who to Follow Section */}
      <div className="bg-black border border-white rounded-xl p-3 space-y-4 text-white">
        <h1 className="text-xl font-bold">Who to Follow</h1>

        {[
          {
            name: "Imam Musa",
            username: "@imamcodes",
            img: "https://i.pravatar.cc/40?img=1",
          },
          {
            name: "Elon Musk",
            username: "@elonmusk",
            img: "https://i.pravatar.cc/40?img=2",
          },
          {
            name: "Kim Kardashian",
            username: "@kimkardashian",
            img: "https://i.pravatar.cc/40?img=3",
          },
        ].map((user, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src={user.img}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col">
                <span className="font-semibold">{user.name}</span>
                <span className="text-[#536471] text-sm">{user.username}</span>
              </div>
            </div>
            <button className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
