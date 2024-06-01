import { VehicleForm } from "../../../../components/form";

const CreateVehicle = () => {
  return (
    <section>
      <header className="flex items-center justify-between p-2">
        <h1 className="font-black">Add New Vehicle</h1>
      </header>
      <div className="p-2">
        <VehicleForm />
      </div>
    </section>
  );
};

export default CreateVehicle;
