"use client";

import { useGetAccounts } from "@/features/use-get-accounts";

export default function Home() {
  const { data: accounts, isLoading } = useGetAccounts();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return <div>Dashboard Page</div>;
}
