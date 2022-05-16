import React from 'react'

export const NotesBeforeSubmit: React.FC = () => {
  return (
    <div>
      <h2>注意事項</h2>
      <ul>
        <li>土日祝日のお問い合わせに関しましては翌営業日以降にご連絡させていただきます。</li>
        <li>1週間経過しても返答がない場合は、恐れ入りますが info@example.com までご連絡ください。</li>
      </ul>
      <input type="button">OK</input>
    </div>
  )
}