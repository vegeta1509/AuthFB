// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : 'your id', // your App ID
        'clientSecret'  : 'your secret', // your App Secret
        'callbackURL'   : 'http://localhost:4000/auth/facebook/callback',
        'profileFields'   : ['id', 'displayName', 'name', 'gender' , 'email', 'photos']
    }

};
