import Feild from "../components/Feild"
import FeildSet from "../components/FeildSet"
export default function LoginForm() {
  return (
    <>
      
      <form action="">
        {/* lebel props ta acutally holo pura form er title */}
        <FeildSet label="Login"> 
         {/* ekhn ekhne children hisebe j props gula dbo ogula hbe holo form er er ek ekta input element  */}
         <Feild label="Email">
          {/* Feild er name holo oi input feild er name  */}
         <input className="p-2 border box-border border-gray-200 w-[300px] rounded-md" type="email" name="email" id="email" placeholder="Enter email address" />
         </Feild>
        </FeildSet>
      </form>
        
    </>
  )
}
