function routes(app, db, accounts, contactList) {
	app.get('/contacts', async (request, response) => {
    try {
      console.log(contactList);
      
      let cache = [];
      const COUNTER = await contactList.methods.count().call();
  
      for (let i = 1; i <= COUNTER; i++) {
        const contact = await contactList.methods.contacts(i).call();
        cache = [...cache, contact];
      }
      
      response.json(cache);
    } catch (err) {
      console.log(err.message);
      response.json([]);
    }
  });
}

module.exports = routes
