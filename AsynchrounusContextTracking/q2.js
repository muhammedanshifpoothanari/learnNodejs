//How does asyncLocalStorage.run() work? Can you give a simple example?
//asyncLocalStorage.run work by intialising asyncLocalStorage then attaching run into it and pass the data and a callBack funtion.
//where it maintain that state accross the run scope.and disable imidiatly after run is compleated.

const { AsyncLocalStorage } = require('node:async_hooks');
const store = new AsyncLocalStorage();

store.run('anshif',() => {
    console.log(store.getStore());
    return;
})