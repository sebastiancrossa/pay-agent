import { createStore, combineReducers, compose } from 'redux';
import firebase, { firestore } from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore'

// Reducers
// @todo

const firebaseConfig = {
    apiKey: "AIzaSyDvcT02mGpRWEgn7pUHboos_EEJbyoJjD0",
    authDomain: "payagent-64b5c.firebaseapp.com",
    databaseURL: "https://payagent-64b5c.firebaseio.com",
    projectId: "payagent-64b5c",
    storageBucket: "payagent-64b5c.appspot.com",
    messagingSenderId: "696019941033"
};

// react-redux-firebase config
const rrfConfig = {
    usersProfiles: 'clients',
    useFirestoreForProfiles: true // Uses Firestore instead of Realtime DB
};

// Initizalizing firebase && firestore
firebase.initializeApp(firebaseConfig);

/*
const firestore = firebase.firestore();
const settings = { timeStampsInSnapshots: true };
firestore.settings(settings);
*/

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase)
)(createStore)

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

// Creating the initial state
const initialState = {};

// Creating the store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;