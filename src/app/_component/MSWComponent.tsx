"use client";
import React, { useEffect } from "react";

export default function MSWComponent() {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      process.env.NEXT_PUBLIC_API_MOCKING === "enabled"
    ) {
      require("@/mocks/brower");
    }
  }, []);
  return null;
}
