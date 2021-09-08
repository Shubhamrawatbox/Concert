import React from 'react'
import EmailSecttion from './EmailSecttion'
import './EmailForm.scss'

const EmailFormDisplay = () => {
    return (
        <div className="email-list-from-display">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                    <EmailSecttion/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailFormDisplay
