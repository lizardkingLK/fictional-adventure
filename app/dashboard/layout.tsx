import React, { ReactNode } from "react";
import Link from "next/link";
import { DashboardItem } from "@/types/app.types";
import { DashboardItems } from "./config";
import { Button } from "@/components/ui/button";
import { MenuIcon, SettingsIcon } from "lucide-react";

const DashboardMenuItem = ({ path, name }: DashboardItem) => {
  return (
    <Link href={path}>
      <div className="flex min-h-10 items-center justify-center p-4">
        <h2 className="font-black text-black">{name}</h2>
      </div>
    </Link>
  );
};

const DashboardSliderHead = () => {
  return (
    <Link href={"/"}>
      <div className="flex min-h-10 items-center justify-center bg-green-400 p-2">
        <h1 className="font-black text-white">GarageSales</h1>
      </div>
    </Link>
  );
};

const DashboardSliderBody = () => {
  return DashboardItems.map(
    (
      item: React.JSX.IntrinsicAttributes & { name: any; path: any },
      index: React.Key | null | undefined,
    ) => <DashboardMenuItem key={index} {...item} />,
  );
};

const DashboardContentHead = () => {
  return (
    <header className="flex items-center justify-between p-2">
      <Button variant="outline" size="icon" className="font-black text-black">
        <MenuIcon className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" className="font-black text-black">
        <SettingsIcon className="h-4 w-4" />
      </Button>
    </header>
  );
};

const Dashboard = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <section className="flex">
      <div className="min-h-screen w-1/5 bg-green-300">
        <DashboardSliderHead />
        <DashboardSliderBody />
      </div>
      <div className="min-h-screen w-4/5">
        <DashboardContentHead />
        {children}
      </div>
    </section>
  );
};

export default Dashboard;
