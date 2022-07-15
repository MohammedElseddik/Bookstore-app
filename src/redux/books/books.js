import axios from 'axios';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';
const beaseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/qLsFjmbcj4drPI4jG9EK/';

const initailState = [];

export const addBookAction = (book) => ({
  type: ADD_BOOK,
  payload: {
    item_id: book.id,
    title: book.title,
    author: book.author,
    category: book.category,
  },
});

export const removBookAction = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    item_id: id,
  },
});

export const onSuccessAction = (books) => ({
  type: FETCH_BOOKS,
  payload: books,
});

export const fetchBookApiAction = () => async (dispatch) => {
  const response = await axios.get(`${beaseUrl}books`);
  const booksFetched = Object.entries(response.data).map((item) => {
    const { title, author } = item[1][0];
    return { item_id: item[0], title, author };
  });
  dispatch(onSuccessAction(booksFetched));
};

export const addBookApi = (book) => async (dispatch) => {
  console.log(book);
  await axios.post(`${beaseUrl}books`, book, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  dispatch(addBookAction(book));
};

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
      books = state.filter((book) => book.item_id !== action.payload.item_id);
      return books;

    case FETCH_BOOKS:
      books = action.payload;
      return books;

    default:
      return state;
  }
};

export default bookReducer;
