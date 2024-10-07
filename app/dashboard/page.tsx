"use client";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const session = useSession();
  console.log("My Log session: ", session);
  return <div>Dashboard</div>;
};

export default Dashboard;
