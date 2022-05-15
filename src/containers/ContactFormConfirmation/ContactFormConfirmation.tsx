import React from 'react'
import classNames from 'classnames'

type Props = {
  data: {
    [x: string]: any
  }
  isVisible: boolean
}

const ContactFormConfirmation: React.FC<Props> = ({ data, isVisible = false }) => {
  const elemsnts = Object.keys(data).map((k) => {
    return (
      <div key={k}>
        <h3>{k}</h3>
        <p>{data[k]}</p>
      </div>
    )
  })

  return (
    <div className={classNames(
      'flex',
      'flex-col',
      'gap-12',
      'bg-green-300',
      isVisible
        ? 'visible opacity-100 duration-500 delay-500'
        : 'invisible opacity-0 duration-500'
    )}>
      {elemsnts}
    </div>
  )
}

export default ContactFormConfirmation
