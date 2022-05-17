type TInputFieldProps = {
  label: string
  name: string
}

export const inputLabelsAndNames: { [key: string]: TInputFieldProps } = {
  inquiryAbout: {
    label: '対象の製品・サービス',
    name: 'inquiry-about',
  },
  inquiryTitle: {
    label: '件名',
    name: 'inquiry-title',
  },
  inquiryDetail: {
    label: 'お問い合わせの詳細',
    name: 'inquiry-detail',
  },
  familyName: {
    label: '姓',
    name: 'family-name',
  },
  givenName: {
    label: '名',
    name: 'given-name',
  },
  familyNameKana: {
    label: '姓 (ふりがな)',
    name: 'family-name-kana',
  },
  givenNameKana: {
    label: '名 (ふりがな)',
    name: 'given-name-kana',
  },
  email: {
    label: 'メールアドレス',
    name: 'email',
  },
  emailRepeat: {
    label: 'メールアドレス (確認)',
    name: 'email-repeat',
  },
  organization: {
    label: '会社名',
    name: 'organization',
  },
  postalCode: {
    label: '郵便番号',
    name: 'postal-code',
  },
  address: {
    label: '住所',
    name: 'address',
  },
  isCallable: {
    label: '電話での返答を希望する',
    name: 'is-callable',
  },
  tel: {
    label: '電話番号',
    name: 'tel',
  },
} as const
