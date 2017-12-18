# Redux

## What's the problem with distant components in React?

Sharing data/state to distant components is cumbersome and error-prone
Sometimes parent components must track data that they don't even care about, for the sake of their children.

## What is Redux? Why/when do we use it?

Redux provides a store of data to our application, where we can share data among distant components. We use Redux only when it's less painful than using React state.

## What are the steps to add Redux to a React app?

Part 1 - Read
    A. Create store
    B. Hookup  in index.js <Provider> around <App></App> </Provider>
    C. Use connect() to connect to store from components that need data
Part 2 - Write
    A. Create a reducer(s) with actions and action creators
    B. Dispatch actions with dispatch (recommend to use mapDispatchToProps)

## What is a store?

Store is a collection of data that is used by components which are subscribed to the store

## What is a reducer? What does the reducer do for us in Redux?

## What is immutability? Why do we use it?

