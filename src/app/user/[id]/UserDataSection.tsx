"use client";

import { useState } from "react";
import LikedPlaceList from "./(liked-place)/LikedPlaceList";
import UserCommentList from "./(user-comments)/UserCommentList";

export default function UserDataSection({ userId }: { userId: string }) {
  const [activeTab, setActiveTab] = useState("comments");

  const showComments = () => {
    setActiveTab("comments");
  };

  const showLikedPlace = () => {
    setActiveTab("liked-place");
  };

  return (
    <section className="h-[85%]">
      <div className="border-b-[3px] text-center text-[16px] font-paper_logy">
        <ul className="flex items-center flex-wrap -mb-[3px]">
          <li onClick={showComments} className="me-2">
            <button
              className={`border-b-[3px] p-2 hover:border-main-blue hover:text-black ${
                activeTab === "comments" && "border-main-blue"
              } ${activeTab === "comments" ? "text-black" : "text-gray-300"} `}
            >
              Comments
            </button>
          </li>
          <li onClick={showLikedPlace} className="me-2">
            <button
              className={`border-b-[3px] p-2 hover:border-main-blue hover:text-black ${
                activeTab === "liked-place" && "border-main-blue"
              } ${
                activeTab === "liked-place" ? "text-black" : "text-gray-300"
              }`}
            >
              Liked-Place
            </button>
          </li>
        </ul>
      </div>
      {activeTab === "comments" ? (
        <UserCommentList user_id={userId} />
      ) : (
        <LikedPlaceList userId={userId} />
      )}
    </section>
  );
}