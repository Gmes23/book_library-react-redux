export function selectBook(book) {
    // select book is an ActionCreator, it needs to return and action,
    // and object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}