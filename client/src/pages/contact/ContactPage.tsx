import React, { ReactElement, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'

const ContactPage: React.FC = (props: RouteComponentProps): ReactElement => {
  useEffect(() => {
    console.log('ContactPage | Initialized with RouteComponentProps: ', props)
  }, [])

  return <div className="page-container">Contact Page</div>
}

export default ContactPage
