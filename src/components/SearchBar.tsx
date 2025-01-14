"use client";

import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  const router = useRouter();
  const searchRef = useRef<HTMLInputElement>(null);
  const [term, setTerms] = useState("");

  const onClickSearch = () => {
    if (term.length === 0) {
      searchRef.current?.focus();
      alert("검색어를 입력해주세요");
      return;
    }
    setTerms("");
    router.push(`/stadium/search?q=${term}`);
  };

  const submitOnEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter") {
      onClickSearch();
    }
  };

  return (
    <div className="flex flex-row items-center justify-center lg:w-[50%] w-[80%] border-[3px] rounded-lg py-[2px]">
      <input
        ref={searchRef}
        value={term}
        onChange={(e) => setTerms(e.target.value)}
        onKeyDown={submitOnEnter}
        className="h-[30px] lg:h-[40px] outline-none flex-1 focus:outline-none pl-[6px] lg:text-[20px] text-[16px] font-kyobo tracking-widest"
      />
      <IoSearch
        onClick={onClickSearch}
        className="cursor-pointer pr-[5px] lg:text-[40px] text-[28px]"
      />
    </div>
  );
}
