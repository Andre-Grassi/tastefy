import './global.css'

export const metadata = {
  title: 'Tastefy',
  description: 'Discover new tastes and share your own',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='bg-primary container'>{children}</body>
    </html>
  )
}
