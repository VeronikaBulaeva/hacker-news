import AppRouterProvider from '@/components/router-provider';
import Header from '@/components/Header/Header';
import { store } from '@/store/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ScopedCssBaseline, ThemeProvider } from '@mui/material';
import theme from '@/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline>
        <Provider store={store}>
          <Router>
            <Header />
            <AppRouterProvider />
          </Router>
        </Provider>
      </ScopedCssBaseline>
    </ThemeProvider>
  );
}

export default App;
