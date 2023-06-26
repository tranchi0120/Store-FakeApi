import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import router from './router/router.tsx'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom'

import store, { persistor } from './redux/store.ts'
import GlobalStyles from './components/globalStyles/GlobalStyles.tsx'

import 'react-toastify/dist/ReactToastify.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles>
        <PersistGate loading={null} persistor={persistor}>
          <ToastContainer />
          <RouterProvider router={router} />
        </PersistGate>
      </GlobalStyles>
    </Provider>
  </React.StrictMode>,
)
