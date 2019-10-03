const jsend = require('jsend');
const bcrypt = require('bcryptjs');
const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');

const User = require('../../models/User/user.model');
const Institution = require('../../models/Institution/institution.model');

const config = require('../../../config');

/**
 * @api {get} /books
 * @apiGroup Books
 * @apiDescription Get books list
 * @apiHeader Authorization Bearer <token>
 *
 * @apiSuccess {Array} - Books list
 */
module.exports.create = async (req, res) => {
  try {
    const { name, email, role, password } = req.body;

    if (!email) return res.status(404).send(jsend.error('Email not found'));

    const regExPattern = `${email.split('@')[1]}$`;
    const institution = await Institution.findOne({
      where: {
        email: {
          [Sequelize.Op.regexp]: regExPattern,
        },
      },
    });

    if (!institution) return res.status(404).send(jsend.error('Wrong email'));

    const encryptionLevel = 10;
    const salt = await bcrypt.genSalt(encryptionLevel);
    const hashPassword = await bcrypt.hash(password, salt);

    const createdUser = await User.create({
      name,
      email,
      role,
      password: hashPassword,
      institutionId: institution.id,
    });
    return res.status(201).send(jsend.success({ createdUser }));
  } catch (error) {
    return res.status(500).send(jsend.error(error));
  }
};

/**
 * @api {get} /books
 * @apiGroup Books
 * @apiDescription Get books list
 * @apiHeader Authorization Bearer <token>
 *
 * @apiSuccess {Array} - Books list
 */
module.exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return res.status(404).send(jsend.error('You did not fill in all fields'));

    const user = await User.findOne({ where: { email } });

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        const oneHour = 60 * 60;
        const token = jwt.sign({
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        }, config.passport.secretKey, { expiresIn: oneHour });

        return res.status(200).send(jsend.success({ user, token }));
      }

      return res.status(401).send(jsend.error('Wrong password'));
    }

    return res.status(404).send(jsend.error('User with this email is not found'));
  } catch (error) {
    return res.status(500).send(jsend.error(error));
  }
};
