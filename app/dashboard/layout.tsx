import React from "react";
import Brand from "../components/brand";
import Link from "next/link";

type DashboardItem = { name: string; path: string };

const dashboardItems: DashboardItem[] = [
  { name: "Vehicles", path: "/dashboard/vehicles" },
  { name: "Customers", path: "/dashobard/customers" },
];

const DashboardMenuItem = ({ path, name }: DashboardItem) => {
  return (
    <Link href={path}>
      <div className="flex min-h-10 items-center justify-center p-4">
        <h2 className="font-black text-black">{name}</h2>
      </div>
    </Link>
  );
};

const DashboardMenu = () => {
  return dashboardItems.map(
    (
      item: React.JSX.IntrinsicAttributes & { name: any; path: any },
      index: React.Key | null | undefined,
    ) => <DashboardMenuItem key={index} {...item} />,
  );
};

const Dashboard = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="flex">
      <div className="min-h-screen w-1/5 bg-green-300">
        <Brand />
        <DashboardMenu />
      </div>
      <div className="min-h-screen w-64">{children}</div>
    </section>
  );
};

export default Dashboard;
