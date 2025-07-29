export const seo = {
  title: 'CLOUDCAT'S NAP',
  description:
    '往四处走走',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
