"use client";

import { useRouter } from "next/navigation";
import Main from "../_component/Main";

// import { redirect } from "next/navigation";

export default function Login() {
  // redirect("/i/flow/login"); //서버 컴포넌트에서의 리다이렉트
  const router = useRouter();
  router.replace("/i/flow/login");
  return <Main />;
}

// router.push -> history에 저장
// router.replace -> history에 저장 x
