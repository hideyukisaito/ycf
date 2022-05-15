import { useEffect, useState } from "react"
import { useFormContext } from "react-hook-form"

export type TFormError = {
  type: string,
  message: string
  [x: string]: any
}

const useFormError = (name: string) => {
  const [error, setErrors] = useState<TFormError | null>(null)
  const [hasError, setHasError] = useState(false)
  const { formState: { errors } } = useFormContext()

  useEffect(() => {
    setErrors(errors[name] === undefined ? null : errors[name])
    setHasError(errors[name] !== undefined)
  }, [errors[name]])

  return { error, hasError }
}

export default useFormError
