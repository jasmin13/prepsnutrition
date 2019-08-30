import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';

import {authenticationMiddleware} from './middleware';
import {findUser} from '../user';

passport.serializeUser((user, cb) => {
  cb(null, user.id)
});

passport.deserializeUser(async (id, cb) => {
  const user = await findUser({id});
  cb(null, user)
});

export function initPassport() {
  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    }, async (email, password, done) => {
      try {
        const user = await findUser({email});
        if (!user || !user.validPassword(password)) {
          return done(null, false, {message: 'Incorrect username/password.'});
        }
        return done(null, user);
      }
      catch (err) {
        return done(err);
      }
    }
  ));

  passport.authenticationMiddleware = authenticationMiddleware
}
