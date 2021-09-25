import React, { ReactElement, useEffect } from 'react'
import { Router } from '@reach/router'
import { initializeData } from './utils/data'

import AboutPage from './pages/about/AboutPage'
import ContactPage from './pages/contact/ContactPage'
import HomePage from './pages/home/HomePage'
import NotFoundPage from './pages/notfound/NotFoundPage'
import PrivacyPage from './pages/privacy/PrivacyPage'

const App: React.FC = (): ReactElement => {
  useEffect(() => {
    console.log('App | Initialized')
    initializeData()
  }, [])

  return (
    <>
      <Router>
        <NotFoundPage default />
        <HomePage path="/" />
        <AboutPage path="about" />
        <ContactPage path="contact" />
        <PrivacyPage path="privacy" />
      </Router>
    </>
  )
}

export default App
