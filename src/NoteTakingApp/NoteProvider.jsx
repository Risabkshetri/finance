import { Provider } from 'react-redux';
import { store } from './Store/store';
import NoteApp from './NoteApp';


const NoteProvider = () => {
    return (
        <Provider store={store}>
            <NoteApp />
        </Provider>
    );
};

export default NoteProvider