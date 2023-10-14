import { createContext, useContext, useEffect } from 'react';

const AppContext = createContext();

export const { Provider } = AppContext;

export const useAppContext = () => {
  return useContext(AppContext);
};

const CustomProvider = ({ children }) => {
  const homeTitle = 'home title from context';

  useEffect(() => {
    //mas codigo
  }, []);

  const contextValue = { homeTitle };

  return <Provider value={contextValue}>{children}</Provider>;
};

export default CustomProvider;
