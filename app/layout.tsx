import '@/styles/globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Promptopia',
  description:
    'Promptopia is a place to find writing prompts and share your own.',
}

const RootLayout = ({ children }: ChildrenProps) => {
  return (
    <html>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <div className="app">{children}</div>
      </body>
    </html>
  )
}

export default RootLayout
