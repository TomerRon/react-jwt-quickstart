require('dotenv').config()
const   express = require('express'),
        path = require('path'),
        bodyParser = require('body-parser'),
        app = express();

app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const   passport = require('passport'),
        session = require('express-session');

app.use(session({ secret: process.env.SESSION_SECRET }));
app.use(passport.initialize());
app.use(passport.session());

const   localSignupStrategy = require('./server/passport/local-signup'),
        localLoginStrategy = require('./server/passport/local-login');

passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

const   authCheckMiddleware = require('./server/middleware/auth-check'),
        authRoutes = require('./server/routes/auth'),
        apiRoutes = require('./server/routes/api');

app.use('/api', authCheckMiddleware);
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

app.get('*', (req, res) => {
    res.sendFile((path.join(__dirname+'/server/static/index.html')));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is running on port',port);
});

module.exports = app;
