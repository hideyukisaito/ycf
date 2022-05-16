import React from 'react'
import classNames from 'classnames'
import { inputLabelsAndNames } from '../../constants/inputLabelsAndNames'

type Props = {
  data: {
    [x: string]: any
  }
  isVisible: boolean
}

const ContactFormConfirmation: React.FC<Props> = ({ data, isVisible = false }) => {
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
      <section className='flex flex-col gap-4'>
        <header>
          <h3>1.お問い合わせ内容</h3>
        </header>

        <div>
          <h4>{inputLabelsAndNames.inquiryAbout.label}</h4>
          <p>{data[inputLabelsAndNames.inquiryAbout.name]}</p>
        </div>
        
        <div>
          <h4>{inputLabelsAndNames.inquiryTitle.label}</h4>
          <p>{data[inputLabelsAndNames.inquiryTitle.name]}</p>
        </div>

        <div>
          <h4>{inputLabelsAndNames.inquiryDetail.label}</h4>
          <p>{data[inputLabelsAndNames.inquiryDetail.name]}</p>
        </div>
      </section>

      <section className='flex flex-col gap-4'>
        <header>
          <h3>2.お名前とメールアドレス</h3>
        </header>

        <div className='flex flex-row justify-between items-center'>
          <div>
            <h4>{inputLabelsAndNames.familyName.label}</h4>
            <p>{data[inputLabelsAndNames.familyName.name]}</p>
          </div>

          <div>
            <h4>{inputLabelsAndNames.givenName.label}</h4>
            <p>{data[inputLabelsAndNames.givenName.name]}</p>
          </div>
        </div>
        
        <div className='flex flex-row justify-between items-center'>
          <div>
            <h4>{inputLabelsAndNames.familyNameKana.label}</h4>
            <p>{data[inputLabelsAndNames.familyNameKana.name]}</p>
          </div>

          <div>
            <h4>{inputLabelsAndNames.givenNameKana.label}</h4>
            <p>{data[inputLabelsAndNames.givenNameKana.name]}</p>
          </div>
        </div>

        <div>
          <h4>{inputLabelsAndNames.email.label}</h4>
          <p>{data[inputLabelsAndNames.email.name]}</p>
        </div>

        <div>
          <h4>{inputLabelsAndNames.emailRepeat.label}</h4>
          <p>{data[inputLabelsAndNames.emailRepeat.name]}</p>
        </div>
      </section>

      <section className='flex flex-col gap-4'>
        <header>
          <h3>3.その他</h3>
        </header>

        <div>
          <h4>{inputLabelsAndNames.organization.label}</h4>
          <p>{data[inputLabelsAndNames.organization.name]}</p>
        </div>
        
        <div>
          <h4>{inputLabelsAndNames.postalCode.label}</h4>
          <p>{data[inputLabelsAndNames.postalCode.name]}</p>
        </div>

        <div>
          <h4>{inputLabelsAndNames.isCallable.label}</h4>
          <p>{data[inputLabelsAndNames.isCallable.name] ? 'はい' : 'いいえ'}</p>
        </div>

        {data[inputLabelsAndNames.isCallable.name] &&
          <div>
            <h4>{inputLabelsAndNames.tel.label}</h4>
            <p>{data[inputLabelsAndNames.tel.name]}</p>
          </div>
        }
      </section>
    </div>
  )
}

export default ContactFormConfirmation
