import '@/styles/globals.css'
import { Metadata } from 'next'
import { Nav, Provider } from '@/components'

export const metadata: Metadata = {
  title: 'Promptopia',
  description:
    'Promptopia is a place to find writing prompts and share your own.',
}

const RootLayout = ({ children }: ChildrenProps) => {
  return (
    <html>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <div className="app">
            <Nav />
            {children}
          </div>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
