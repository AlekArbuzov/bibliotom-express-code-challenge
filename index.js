const app = require('./app.js');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Open http://localhost:3000 to see a response.'));
