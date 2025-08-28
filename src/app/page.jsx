import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import CommentModal from "@/components/Modals/CommentModal";
import PostFeed from "@/components/PostFeed/PostFeed";
import Sidebar from "@/components/Sidebar/Sidebar";
import SignUpPrompt from "@/components/SignUpPrompt/SignUpPrompt";
import Widgets from "@/components/Widgets/Widgets";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="text-[#0F1419] min-h-screen border-2 border-black max-w-[1400px] ml-auto mr-auto flex justify-center">
      <Sidebar />
      <PostFeed />
      <Widgets />
      
    </div>
    <CommentModal />
    <SignUpPrompt />
    <LoadingScreen />
    </>
  );
}
