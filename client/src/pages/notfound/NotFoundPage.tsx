import React, { ReactElement, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'

const NotFoundPage: React.FC = (props: RouteComponentProps): ReactElement => {
  useEffect(() => {
    console.log('NotFoundPage | Initialized with RouteComponentProps: ', props)
  }, [])

  return <div className="page-container">404 Page Not Found</div>
}

export default NotFoundPage
