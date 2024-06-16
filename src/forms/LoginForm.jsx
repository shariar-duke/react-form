import Feild from "../components/Feild";
import FeildSet from "../components/FeildSet";
import {useForm} from "react-hook-form"

export default function LoginForm() {
   const {
    register , 
    handleSubmit,
    formState:{errors}
   } = useForm()

   const submitForm = (formData) => 
   {
    console.log(formData)
   }
  return (
    <>
      <form onSubmit={handleSubmit(submitForm)} className="shadow-lg p-8 bg-gray-200 rounded-md">
        <FeildSet label="Login">
          <Feild label="Email" error={errors.email}>
            <input
              {...register("email" , {required:"Email is required"})}
              className="p-2 border box-border border-gray-200 w-[300px] rounded-md"
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
            />
          </Feild>

          <Feild label="Password" error={errors.password}>
            <input
              {...register("password", {required:"Password is required", minLength:{
                value:8,
                message: "Your Password must be at least 8 Chcaracter"
              }})}
              className="p-2 border box-border border-gray-200 w-[300px] rounded-md"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
            />
          </Feild>
        </FeildSet>

        <Feild >
           
           <button className="text-[14px] text-white cursor-pointer  border rounded-md m-auto bg-gray-500 py-[8px] px-4 font-bold mt-[8px]">Login</button>
          </Feild>
      </form>
    </>
  );
}
