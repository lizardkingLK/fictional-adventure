import CustomerForm from "@/components/form/customer";

const CreateVehicle = async () => {
  return (
    <section>
      <header className="flex items-center justify-between p-2">
        <h1 className="font-black">Add New Customer</h1>
      </header>
      <div className="p-2">
        <CustomerForm />
      </div>
    </section>
  );
};

export default CreateVehicle;
