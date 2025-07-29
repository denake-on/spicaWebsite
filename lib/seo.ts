export const seo = {
  title: 'Cali Castle | 开发者、设计师、细节控、创始人',
  description:
    '往四处走走',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
