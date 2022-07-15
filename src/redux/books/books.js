const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';
const beaseUrl =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/qLsFjmbcj4drPI4jG9EK/';

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

export const onSuccessAction = (books) => ({
  type: FETCH_BOOKS,
  payload: books,
});

export const fetchBookApiAction = () => async (dispatch) => {
  const response = await axios.get(`${beaseUrl}books`);
  const booksFetched = Object.entries(response.data).map((item) => {
    console.log(item);
    const { title, author } = item[1][0];
    return { item_id: item[0], title, author };
  });
  dispatch(onSuccessAction(booksFetched));
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
      books = state.filter((book) => book.id !== action.payload.id);
      return books;

    case FETCH_BOOKS:
      initailState = action.payload;
      return initailState;

    default:
      return state;
  }
};

export default bookReducer;
