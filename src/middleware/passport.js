const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const config = require('../../config');
const User = require('../../src/models/User/user.model');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.passport.secretKey,
};

module.exports = passport => {
  passport.use(
    new JwtStrategy(options, async ({ id }, done) => {
      try {
        const user = await User.findOne({ where: { id } });

        if (user) return done(null, user);

        return done(null, false);
      } catch (error) {
        return done(error, false);
      }
    })
  );
};
