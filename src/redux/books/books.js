const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initailState = [
  {
    id: 'book1',
    title: 'The Redux Books',
    author: 'Suzanne Collins',
    category: 'Action',
  },

  {
    id: 'book2',
    title: 'The React Books',
    author: 'Frank Herbert',
    category: 'Science Fiction',
  },
];

export const addBookAction = (book) => ({
  type: ADD_BOOK,
  payload: {
    id: book.id,
    title: book.title,
    author: book.author,
    category: book.category,
  },
});

export const removBookAction = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    id,
  },
});

const bookReducer = (state = initailState, action) => {
  let books;
  switch (action.type) {
    case ADD_BOOK:
      books = [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          author: action.payload.author,
          category: action.payload.category,
        },
      ];
      return books;

    case REMOVE_BOOK:
      books = state.filter((book) => book.id !== action.payload.id);
      return books;

    default:
      return state;
  }
};

export default bookReducer;
