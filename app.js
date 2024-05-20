const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(8080);








// ------new code


// const path = require('path');
// const fs = require('fs');
// const https = require('https');
// const express = require('express');
// const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');

// const app = express();

// app.set('view engine', 'ejs');
// app.set('views', 'views');

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);

// app.use(errorController.get404);

// // SSL certificates
// const options = {
//   cert: fs.readFileSync(path.join(__dirname, './ssl/wezeal_me.crt')),
//   ca: fs.readFileSync(path.join(__dirname, './ssl/wezeal_me.ca-bundle')),
//   key: fs.readFileSync(path.join(__dirname, './ssl/wezeal_me.key')),
// };

// https.createServer(options, app).listen(443);
