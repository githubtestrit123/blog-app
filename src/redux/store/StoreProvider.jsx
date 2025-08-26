"use client";
import React from 'react'
import { Provider } from 'react-redux';
import {store} from '@/redux/store/store.js';

export default function StoreProvider({children}) {
  return (
    <Provider store={store}>
        {children}

    </Provider>
  );
    
}
