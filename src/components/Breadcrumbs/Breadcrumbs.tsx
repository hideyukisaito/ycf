import { Link } from 'react-router-dom'
import React from 'react'

const Breadcrumbs: React.FC = () => {
  return (
    <nav className="breadcrumbs hidden md:block px-9 py-4">
      <ol className="flex flex-row">
        <li className="breadcrumb">
          <Link to="/" className="inline-block underline after:content-['›'] after:inline-block after:mx-2">トップ</Link>
        </li>
        <li className="breadcrumb inline-block">
          お問い合わせ
        </li>
      </ol>
    </nav>
  )
}

export default Breadcrumbs
