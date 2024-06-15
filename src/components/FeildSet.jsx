/* eslint-disable react/prop-types */


export default function FeildSet({label, children}) {
  return (
    <fieldset className="mt-2 border-none p-0">

        {label && <legend className="text-md font-bold mb-2">{label}</legend>}
        <div className="flex flex-col justify-between self-start" >{children}</div>
    </fieldset>
  )
}
