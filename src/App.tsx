import { useEffect, useState } from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Report from './pages/Report';
import NoMatch from './pages/NoMatch';
import AppLayout from './components/layout/AppLayout';
import { theme } from './theme/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import { Transaction } from './types/index';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';


function App() {
  function isFireStoreError (error: unknown): error is {code: string, message: string } {
    return typeof error === 'object' && error !== null && 'code' in error && 'message' in error;
  }

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Transactions"));
        const transactionData = querySnapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          } as Transaction;
        });
        setTransactions(transactionData);
      } catch (error) {
        if (isFireStoreError(error)) {
          console.error("Error fetching transactions: ", error.code, error.message);
        } else {
          console.error("An unexpected error occurred: ", error);
        }
      }
    };
    fetchTransactions();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route index element={<Home />}/>
            <Route path='/report' element={<Report />}/>
            <Route path='*' element={<NoMatch />}/>
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
