import React, { ReactElement, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'

const PrivacyPage: React.FC = (props: RouteComponentProps): ReactElement => {
  useEffect(() => {
    console.log('PrivacyPage | Initialized with RouteComponentProps: ', props)
  }, [])

  return <div className="page-container">Privacy Page</div>
}

export default PrivacyPage
