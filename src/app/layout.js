import '../styles/globals.css'
import Sidebar from '../components/layout/Sidebar'
import MobileNav from '../components/layout/MobileNav'

export const metadata = {
  title: 'Tanisha Ojha',
  description: 'Portfolio of Tanisha Ojha',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout-with-sidebar">
          <Sidebar />
          <main className="main-content pb-20 md:pb-0">
            {children}
          </main>
        </div>
        <MobileNav />
      </body>
    </html>
  )
}
