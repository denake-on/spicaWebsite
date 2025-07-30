export const seo = {
  title: 'Cali Castle | 如果記憶是一罐罐頭',
  description:
    '小孔雀往四處走走',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
