/* eslint-disable react/prop-types */


export default function FeildSet({label, children}) {
  return (
    <fieldset className="mt-2 border-none p-0 ">
        <div className="flex justify-center items-center">
        {label && <legend className="text-md font-bold mb-2 text-gray-600 text-[18px]">{label}</legend>}
        </div>
    
        <div className="flex flex-col justify-between self-start" >{children}</div>
    </fieldset>
  )
}
