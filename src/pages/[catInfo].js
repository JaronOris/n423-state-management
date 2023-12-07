import React from "react";
import { useRouter } from "next/router";

export default function CatInfo() {
  const router = useRouter();

  console.log(router.query);

  return (
    <>
      <h1>Cat Info</h1>
    </>
  );
}
