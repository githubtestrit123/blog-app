import PostFeed from "@/components/PostFeed/PostFeed";
import Sidebar from "@/components/Sidebar/Sidebar";
import Widgets from "@/components/Widgets/Widgets";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-[#0F1419] min-h-screen border-2 border-black max-w-[1400px] ml-auto mr-auto flex">
      <Sidebar />
      <PostFeed />
      <Widgets />
    </div>
  );
}
