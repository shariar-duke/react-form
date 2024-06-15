/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import React from 'react'

export default function Feild({label, children, htmlFor, error}) {

    const id = htmlFor || getChildId(children)
    // jode amra htmlFor  props hisebe send kore thake tahole oita id hoye thakbe. Jode send na kore thake tahole j input element ta send koreche setar j id ta thakkbe  setar id ta amra dibo 
  return (
    <div>
        
        {
            label && <label htmlFor={id}>{label}</label>
        }

        {
            // eta mane ekhne input feild text/email/ pass / date etc egular jnno hbe 
            children
        }

        {  
            // error ekta object er modhe message ase , aro onk kisu ase amra message ta use korbo 
            error && <div> {error.message}</div>
        }
    </div>
  )
}

const getChildId =(children)=> {

  const child =  React.Children.only(children)

  if("id" in child?.props) // jode input element er kno id thake 
  {
    // eta tokhnoi catch korlm jokhn amra props hisebe htmlFor o dei nai but pura j input feild ta ase tar modhe id property ta ase 
    return child.props.id
  }

    // ekhen amra react er j child ta nia kaj kortse setar ekta output pabo sei output take amra ekta variable a  catch korbo 
}
