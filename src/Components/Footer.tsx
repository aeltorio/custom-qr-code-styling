import React from 'react'

function Footer(): JSX.Element {
  return (
    <footer className='mt-auto text-center text-secondary fs-6 fw-light'>
      <p>
        Build with React {React.version}, based on{' '}
        <a className="text-secondary" target='_blank' rel='noopener noreferrer' href='https://github.com/kozakdenys/qr-code-styling'>
          QR Code Styling JS library
        </a>
        {' - '}{' '}
        <a className="text-secondary" target='_blank' rel='noopener noreferrer' href='https://github.com/awran5/custom-qr-code-styling'>
          Custom QR Code Styling
        </a>
        {' - '}{' '}
        <a className="text-secondary" target='_blank' rel='noopener noreferrer' href='https://lesailesdumontblanc.com'>
        © 2024 Les Ailes du Mont-Blanc
        </a>
        &nbsp;and&nbsp;
        <a className="text-secondary" target='_blank' rel='noopener noreferrer' href='https://sctg.eu.org'>
        Ronan Le Meillat
        </a>
      </p>
    </footer>
  )
}

export default Footer
