const express = require('express')
const router = express.Router()
const path = require('path');
const { ensureAuth, ensureAdmin } = require('../middleware/auth');

express().set('views', path.join(__dirname, 'views'));
express().set('view engine', 'ejs')

router.get('/', ensureAuth, function (req, res) {
    res.render('pages/home', {articles: [
        {
            title: 'title1',
            desc: 'Desc1',
            genres: ['comedy', 'tragedy']
        },
        {
            title: 'title1',
            desc: 'Desc1',
            genres: ['comedy', 'tragedy']
        },
        {
            title: 'title1',
            desc: 'Desc1',
            genres: ['comedy', 'tragedy']
        },
        {
            title: 'title1',
            desc: 'Desc1',
            genres: ['comedy', 'tragedy']
        },
        {
            title: 'title1',
            desc: 'Desc1',
            genres: ['comedy', 'tragedy']
        },
    ]});
});

router.get('/someRoute', function (req, res) {
    res.send('Hello SomeRoute!');
});

module.exports = router
