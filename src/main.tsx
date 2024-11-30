import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from '@pages/AppRouter';

import { IntlProvider } from 'react-intl';
import messages, { DEFAULT_LOCALE, getLocales } from '@lang/index';

import {
  defaultCatalogContextValue,
  CatalogProvider,
} from '@context/CatalogContext';

import './index.scss';

const navigatorLanguage = navigator.language.split(/[-_]/)[0];
const locale = getLocales().includes(navigatorLanguage)
  ? navigatorLanguage
  : DEFAULT_LOCALE;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IntlProvider
      locale={locale}
      messages={messages[locale as keyof typeof messages]}
      defaultLocale={DEFAULT_LOCALE}
    >
      <CatalogProvider values={defaultCatalogContextValue}>
        <AppRouter />
      </CatalogProvider>
    </IntlProvider>
  </StrictMode>
);
