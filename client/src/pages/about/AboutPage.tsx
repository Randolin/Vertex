import React, { ReactElement, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'

const AboutPage: React.FC = (props: RouteComponentProps): ReactElement => {
  useEffect(() => {
    console.log('AboutPage | Initialized with RouteComponentProps: ', props)
  }, [])

  return <div className="page-container">About Page</div>
}

export default AboutPage
