# Day 13

## Spotify: Application state using redux - Part 2

- On [Day 11](https://github.com/exponentsoftware/FDOC_FE_12) we have integrated the spotify API and used it to fetch the albums and songs in `componentDidMount` functin of `Albums` component. You may have store this response in the `Albums` state.
- Now the task is to dispatch an action as below to the reducer after the API call returned the success response with data. So in reducer create a new type called `GET_ALBUMS` which adds the data in the redux state
```js
 const albumsAction = {
     type: "GET_ALBUMS",
     payload: <respose data>
 }
```
- Use the albums data from the redux state and use it whereever is necessary
- Now move the API call from `componentDidMount` to redux using `redux-thunk` or `redux-saga`. These are used to make asynchronus actions in redux. So you can use these to make any api calls in redux. [Research](https://medium.com/fullstack-academy/thunks-in-redux-the-basics-85e538a3fe60) more about and implement
