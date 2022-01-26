import {createStore, createHook, StoreActionApi} from 'react-sweet-state';

type State = {
  loading: boolean;
  error: string;
};
type StoreApi = StoreActionApi<State>;
type Actions = typeof actions;

const initialState: State = {
  loading: false,
  error: '',
};

const actions = {
  loadingHandler:
    (loading: boolean) =>
    ({setState}: StoreApi) => {
      setState({
        loading: loading,
      });
    },

  errorHandler:
    (error: string) =>
    ({setState}: StoreApi) => {
      setState({
        error: error,
      });
    },
};

const Store = createStore<State, Actions>({
  initialState,
  actions,
});

export const useRequestContext = createHook(Store);
