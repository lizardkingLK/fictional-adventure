import { DataTable } from "@/components/table";
import React from "react";
import { columns } from "./columns";
import { Database } from "@/types/db.types";
import { PencilIcon, PlusIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { TooltipComponent } from "@/components/tooltip";

async function getData(): Promise<
  Database["public"]["Tables"]["Vehicle"]["Row"][]
> {
  return [
    {
      id: 1,
      category: "CEDAN",
      color: "red",
      customerId: 1,
      name: "Toyota",
      ownerId: 1,
      registration: "2000ToyotaCedanRed",
      state: "ACTIVE",
      status: "ACTIVE",
      year: 2000,
    },
    {
      id: 2,
      category: "COUPE",
      color: "green",
      customerId: 2,
      name: "Nissan",
      ownerId: 1,
      registration: "2001NissanGreenCoupe",
      state: "ACTIVE",
      status: "ACTIVE",
      year: 2001,
    },
  ];
}

const Vehicles = async () => {
  const data = await getData();

  return (
    <section>
      <header className="flex items-center justify-between p-2">
        <h1 className="font-black">Vehicles</h1>
        <div className="flex items-center gap-4">
          <TooltipComponent message="Add New Vehicle">
            <Link href={"/dashboard/vehicles/create"} className="p-2">
              <PlusIcon className="h-4 w-4" />
            </Link>
          </TooltipComponent>
          <TooltipComponent message="Update Vehicle Details">
            <Link href={"/dashboard/vehicles/edit/1"} className="p-2">
              <PencilIcon className="h-4 w-4" />
            </Link>
          </TooltipComponent>
          <TooltipComponent message="Delete Vehicle">
            <Link href={"/dashboard/vehicles/edit/1"} className="p-2">
              <XIcon className="h-4 w-4" />
            </Link>
          </TooltipComponent>
        </div>
      </header>
      <div className="p-2">
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
};

export default Vehicles;
