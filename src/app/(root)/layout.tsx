import Navbar from '../../components/Navbar'

export const metadata = {
  title: 'The Founders Folio',
  description: 'For Founders From Founders',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
