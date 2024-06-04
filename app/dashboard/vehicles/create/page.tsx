import { getCustomers } from "@/services/api";
import { VehicleForm } from "../../../../components/form";

const CreateVehicle = async () => {
  const customers = (await getCustomers() ?? []);

  return (
    <section>
      <header className="flex items-center justify-between p-2">
        <h1 className="font-black">Add New Vehicle</h1>
      </header>
      <div className="p-2">
        <VehicleForm customers={customers} />
      </div>
    </section>
  );
};

export default CreateVehicle;
