function findAccountById(accounts, id) {
    const found = accounts.find((account) => account.id === id);
    return found;
};

function sortAccountsByLastName(accounts) {
  accounts.sort((nameA, nameB) => nameA.name.last > nameB.name.last ? 1 : -1);
  return accounts;
};

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const borrowInfo = book.borrows;
    
    let idMatch = borrowInfo.filter((book) => book.id === account.id)
      if (idMatch.length > 0) {
    total ++;
      };
  };
  return total;
};

function getBooksPossessedByAccount(account, books, authors) {
  let booksOut = books.filter((book) => book.borrows[0].returned === false && book.borrows[0].id === account.id);

  let newBooks = booksOut.map((book) => ( {...book, author: authors.find(author => author.id === book.authorId)} ));

  return newBooks;
};

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
