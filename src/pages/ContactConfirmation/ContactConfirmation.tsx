import React from 'react'
import { useForm } from 'react-hook-form'

export const ContactConfirmation: React.FC = () => {
  const methods = useForm()
  
  console.log(methods.formState)

  return (
    <div></div>
  )
}
