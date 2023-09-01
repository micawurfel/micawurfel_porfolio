import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/styles.scss'
import {I18nextProvider} from 'react-i18next'
import i18next from 'i18next'

import global_ES from './translations/es/global.json';
import global_EN from './translations/en/global.json';
import { ThemeProvider } from './context/ThemeContext.jsx'

i18next.init({
  interpolation:{ escapeValue: false },
  lng: 'en',
  resources: {
    en: { global: global_EN },
    es: { global: global_ES}
  },
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
