function findAuthorById(authors, id) {
  for (let i = 0; i < authors.length; i++) {
    if (authors[i].id === id) 
      return authors[i];
    
  }
};

function findBookById(books, id) {
  let result = books.find((book) => book.id === id);
  return result;
};

function partitionBooksByBorrowedStatus(books) {
  let booksOut = books.filter((book) => book.borrows[0].returned === false);
  let booksIn = books.filter((book) => book.borrows[0].returned === true);
  let borrowedStats = [ booksOut, booksIn ];

  return borrowedStats;
};

// helper function 
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
      let account = findAccountById(accounts, borrow.id);
      account.returned = borrow.returned;
      return account;
  }).slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  findAccountById,
  getBorrowersForBook 
};
