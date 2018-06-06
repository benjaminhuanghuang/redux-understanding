
## most important Redux actors
The store, the reducer and an action.

## The Redux principle
- The **state of applicaiton** is stored in an object tree within a single Redux **store**
- The only way to change the **state** is to emit an **action**, an object describing what happened.
- To specify how the state tree is transformed by actions, you write **pure reducers**



## Key points
- unlike setState() in pure React, the only way you update the state of a Redux application is by dispatching an action.
- An action is accurately described with a plain JavaScript object, but it must have a type field.
- In a Redux app, every action flows through the reducer. All of them.
- By using a switch statement, you can handle different action types within your Reducer.
- Action Creators are simply functions that return action objects.
- It is a common practice to have the major actors of a redux app live within their own folder/directory.
- You should not mutate the state received in your Reducer. Instead, you should always return a new copy of the state.
- To subscribe to store updates, use the store.subscribe() method.
