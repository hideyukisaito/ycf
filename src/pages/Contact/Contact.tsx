import ContactForm from '../../containers/ContactForm'

const Contact: React.FC = () => {
  const onSubmit = (data: any) => console.log(data)
  
  return (
    <ContactForm onSubmit={onSubmit} />
  )
}

export default Contact
