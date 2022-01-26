import React, {useState, ReactNode, createContext} from 'react';
import AlertScreen from './AlertScreen';
import LoadingScreen from './LoadingScreen';

interface Props {
  children: ReactNode;
}

export type MakeRequest = (callAPI: callAPI) => void;

export type callAPI = (
  resultHandler: () => void,
  errorHandler: (err: {message: string}) => void,
) => void;

export const GenericRequestContext = createContext<any | undefined>(undefined);

GenericRequestContext.displayName = 'GenericRequest';

const GenericRequestHandler = ({children}: Props) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onMakeRequest = (callAPI: callAPI) => {
    setLoading(true);
    callAPI(
      () => {
        setErrorMessage('');
        setLoading(false);
      },
      ({message}) => {
        setLoading(false);
        setErrorMessage(message);
      },
    );
  };

  return (
    <GenericRequestContext.Provider value={onMakeRequest}>
      {children}
      <LoadingScreen isVisible={loading} />
      {!loading && (
        <AlertScreen
          isVisible={!!errorMessage}
          onOkPressed={() => setErrorMessage('')}
          message={errorMessage}
        />
      )}
    </GenericRequestContext.Provider>
  );
};

const genericRequestHandler =
  (Component: any) =>
  ({...props}) =>
    (
      <GenericRequestHandler>
        <Component {...props} />
      </GenericRequestHandler>
    );

export default genericRequestHandler;
