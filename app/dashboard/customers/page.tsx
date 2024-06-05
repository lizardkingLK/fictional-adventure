import { DataTable } from "@/components/table";
import React from "react";
import { PencilIcon, PlusIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { TooltipComponent } from "@/components/tooltip";
import { columns } from "./columns";
import { getCustomersWithUserData } from "@/services/api";

async function getData() {
  const customersWithUserData = await getCustomersWithUserData();
  if (!customersWithUserData) {
    return [];
  }

  return customersWithUserData;
}

const Customers = async () => {
  const data = await getData();

  return (
    <section>
      <header className="flex items-center justify-between p-2">
        <h1 className="font-black">Customers</h1>
        <div className="flex items-center gap-4">
          <TooltipComponent message="Add New Customer">
            <Link href={"/dashboard/customers/create"} className="p-2">
              <PlusIcon className="h-4 w-4" />
            </Link>
          </TooltipComponent>
          <TooltipComponent message="Update Customer Details">
            <Link href={"/dashboard/customers/edit/1"} className="p-2">
              <PencilIcon className="h-4 w-4" />
            </Link>
          </TooltipComponent>
          <TooltipComponent message="Delete Customer">
            <Link href={"/dashboard/customers/edit/1"} className="p-2">
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

export default Customers;
