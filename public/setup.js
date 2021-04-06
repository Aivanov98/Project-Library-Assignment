const module = { exports: {findAccountsByID} };
function findAccountsByID (accounts, ID) {
    const found = accounts.find((account) => account[ID] === ID);
    return found;
}
return findAccountsByID;