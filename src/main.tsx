import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './components/globalStyles/GlobalStyles.tsx'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './redux/store.ts'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.tsx'

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
