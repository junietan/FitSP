//////////////////////////////////////////////////////
// INCLUDES
//////////////////////////////////////////////////////
const app = require('./src/app');

//////////////////////////////////////////////////////
// SETUP ENVIRONMENT
//////////////////////////////////////////////////////
const PORT = 3000;

//////////////////////////////////////////////////////
// START SERVER
//////////////////////////////////////////////////////
app.listen(PORT,()=> {
    console.log(`My Fitness App listening to port ${PORT}`);
});
//console.log(data.player.map(player => player.name));