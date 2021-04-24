const initialState = [
  {
    title: 'Last Episode',
    id: 0,
    cards: [
      {
        id: 0,
        text: 'We creeeeeeeeeeeeeeeeeeeeeeee',
      },
      {
        id: 1,
        text: 'yooooooooooooooooooooooooooo',
      },
    ],
  },
  {
    title: 'Last Episode',
    id: 0,
    cards: [
      {
        id: 0,
        text: 'We creeeeeeeeeeeeeeeeeeeeeeee',
      },
      {
        id: 1,
        text: 'yooooooooooooooooooooooooooo',
      },
      {
        id: 1,
        text: 'yooooooooooooooooooooooooooo',
      },
    ],
  },
];
export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
