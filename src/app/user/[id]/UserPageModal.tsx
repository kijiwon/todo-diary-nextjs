"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function UserPageModal() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 1000);
  }, [router]);

  return (
    <div className="w-[100%] h-[100%] relative flex justify-center pt-[20px] bg-gray-200">
      <div className="absolute flex flex-col justify-center items-center lg:px-[120px] px-[60px] lg:py-[80px] py-[40px] bg-white rounded-[15px] shadow-md font-paper_logy lg:text-[22px] text-[20px]">
        <p>접근 권한이 없습니다!</p>
        <span className="text-[14px] mt-[10px] font-s_core">
          잠시 후 시작 페이지로 이동합니다...
        </span>
      </div>
    </div>
  );
}
