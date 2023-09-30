'use client';

import { ReactNode, FC } from 'react';
import { Provider } from 'react-redux';
import store from './store';

type Props = {
  children: ReactNode;
};

const ReduxProvider: FC<Props> = ({ children }) => {
  return <Provider store={store}> {children} </Provider>;
};

export default ReduxProvider;
