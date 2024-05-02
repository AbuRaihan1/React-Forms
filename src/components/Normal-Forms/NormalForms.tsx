import { useForm } from "react-hook-form";

const NormalForms = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit(onsubmit)}
        className="border-2 border-green-300 w-2/3 mx-auto p-5"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-3">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              type="text"
              {...register("name")}
              id="name"
              className="w-full rounded-md"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              id="email"
              className="w-full rounded-md"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type="text"
              {...register("password")}
              id="password"
              className="w-full rounded-md"
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NormalForms;
