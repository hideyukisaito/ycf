import React from 'react'

const Breadcrumbs: React.FC = () => {
  return (
    <nav className="breadcrumbs hidden md:block px-9 py-4">
      <ol className="flex flex-row">
        <li className="breadcrumb">
          <a href="#" className="inline-block underline after:content-['›'] after:inline-block after:mx-2">トップ</a>
        </li>
        <li className="breadcrumb inline-block">
          お問い合わせ
        </li>
      </ol>
    </nav>
  )
}

export default Breadcrumbs
