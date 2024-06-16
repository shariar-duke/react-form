import Feild from "../components/Feild";
import FeildSet from "../components/FeildSet";
export default function LoginForm() {
  return (
    <>
      <form action="" className="shadow-lg p-8 bg-gray-200 rounded-md">
        <FeildSet label="Login">
          <Feild label="Email">
            <input
              className="p-2 border box-border border-gray-200 w-[300px] rounded-md"
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
            />
          </Feild>

          <Feild label="Password">
            <input
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
