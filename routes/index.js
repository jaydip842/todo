var express = require('express');
var user = require('../controller/usercontroller');
var login = require('../controller/login');
var contact = require('../controller/contact');
var router = express.Router();

router.post('/',user.index);
router.get('/',user.get_data);

router.get('login/contact/delete/:id',contact.delete_data);

router.post('/login',login.login);
router.get('/login',login.login_data);
router.get('/logout',login.logout);

router.post('/login/contact',contact.contact)
router.get('/login/contact',contact.contact_data)

router.post('/login/update',login.get_login_data)
router.get('/login/update',login.login_update)

    
router.post('/login/contact/update/:id1',contact.contact_update);
router.post('/login/contact/delete/:id1',contact.delete_data);

module.exports = router;
