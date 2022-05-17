import classNames from 'classnames'
import React from 'react'

export const ContactFormCompletion: React.FC = () => {
  return (
    <div className={classNames(
      'flex', 'flex-col', 'items-center',
    )}>
      <header>
        <h1>お問い合わせを受け付けました。</h1>
      </header>
    </div>
  )
}
