// app/index.tsx
import { Redirect } from "expo-router";
import { useState } from "react";

export default function Index() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(false);

  if (isAuthenticated === null) return null; // Optional loading UI

  return <Redirect href={isAuthenticated ? "/home" : "/login"} />;
}
