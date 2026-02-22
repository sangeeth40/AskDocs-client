import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import React from "react";

async function HomePage() {
  const { userId } = await auth();

  if (userId) {
    redirect("/projects");
  } else {
    redirect("/sign-in");
  }
}

export default HomePage;
