import React from 'react'
import './InputLabel.css'

type TProps = {
  label: string
  children?: React.ReactNode
}

export const InputLabel: React.FC<TProps> = ({ label, children }) => (
  <span className='input-label'>
    {label}
    {children}
  </span>
)