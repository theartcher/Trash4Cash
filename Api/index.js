const { Sequelize, DataTypes, Model, QueryTypes } = require('sequelize');
const config = require('../config.json');

const cors = require('cors');
const express = require('express');
const app = express();

app.use(express.json());

//TODO: Add textinput fields
//TODO: Add signin feature
//TODO: check if password is strong enough
//TODO: Centralize 'Trash4Cash' table name

//Configure sensitive variables from config.json
const sequelize = new Sequelize(
  config.MYSQLDATABASE,
  config.MYSQL_USERNAME,
  config.MYSQLPASSWORD,
  {
    host: config.MYSQL_HOST,
    port: config.MYSQL_PORT,
    dialect: 'mysql',
  }
);

//Attempt to execute 'SELECT 1+1 AS RESULT' as a test.
try {
  sequelize.authenticate();
  console.log('\n Connection has been established successfully. \n');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

//Define table and column types
class trash4cash extends Model {}
trash4cash.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bottlesSaved: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    credits: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    registeredCity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
    gender: {
      type: DataTypes.CHAR,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    sequelize,
    modelName: 'trash4cash',
    tableName: 'trash4cash',
    timestamps: false,
  }
);

async function createNewID() {
  const highestID = await trash4cash.max('id');
  const newID = Number(highestID) + 1;
  return newID;
}

//Check if an there is an account associated with email OR username
async function checkRegistered(email, username) {
  try {
    const parameters = [email, username];
    const results = await sequelize.query(
      'SELECT * FROM trash4cash WHERE email = ? OR username = ?',
      {
        type: QueryTypes.SELECT,
        replacements: parameters,
      }
    );
    if (results.length == 0) {
      console.log(
        '\nAccount NOT found with email ' + email,
        'or username ' + username + '\n'
      );
      return false;
    } else if (results.length != 0) {
      console.log(
        '\nAccount found with either email ' + email,
        'or username ' + username + '\n'
      );
      return true;
    }
  } catch (error) {
    console.log('An error occurred: ' + error);
  }
}

function isPasswordStrong(password) {
  let passwordStrength = {
    hasCapitalLetters: false,
    hasNumbers: false,
    hasLowerLetters: false,
    hasSpecialCharacters: false,
    allowedLength: false,
  };
  if (password.match(/[a-z]+/)) {
    passwordStrength.hasLowerLetters = true;
  }
  if (password.match(/[A-Z]+/)) {
    passwordStrength.hasCapitalLetters = true;
  }
  if (password.match(/[0-9]+/)) {
    passwordStrength.hasNumbers = true;
  }
  if (password.match(/[$@#&!]+/)) {
    passwordStrength.hasSpecialCharacters = true;
  }
  if (password.length > 10 && password.length < 20) {
    passwordStrength.allowedLength = true;
  }

  const passwordAllowed = Object.values(passwordStrength).every(
    (value) => value === true
  );
  console.log(passwordAllowed);
  return passwordAllowed;
}

//Default READ handler
app.get('/', cors((origin = '*')), (req, res) => {
  res.send('Read request handled.');
});

// Check if a username/email already exists in database
app.get('/api/user', async (req, res) => {
  if (!Object.keys(req.body).length) {
    return res.status(400).json({
      message: 'Request body cannot be empty',
    });
  }

  const { email, username } = req.body;
  const results = await checkRegistered(email, username);
  res.send(results);
  console.log(
    '\n = Fetched using this data =\n' + email + '\n' + username + '\n'
  );
});

//Return checks if user OR email exist in database, if not makes new account
app.post('/api/user', cors(), async (req, res) => {
  if (!Object.keys(req.body).length) {
    return res.status(400).json({
      message: 'Request body cannot be empty',
    });
  }

  const { firstName, lastName, email, password, username, registeredCity } =
    req.body;
  const bottlesSaved = 0;
  const credits = 0;
  const userExists = await checkRegistered(email, username);

  if (userExists === true) {
    res.send('Error: Username or email already registered.');
  }
  if (userExists === false) {
    if (isPasswordStrong(password) === true) {
      try {
        const id = await createNewID();
        await trash4cash.create({
          id: id,
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          username: username,
          bottlesSaved: bottlesSaved,
          credits: credits,
          registeredCity: registeredCity,
          type: QueryTypes.INSERT,
        });
        console.log(
          '\nUser successfully injected with email ' + email,
          'And username ' + username + '\n'
        );
        res.send(JSON.stringify('Successfully created user.'));
      } catch (err) {
        res.send(JSON.stringify('Something went wrong.'));
        console.log(err);
      }
    } else if (isPasswordStrong(password) === false) {
      res.send(
        JSON.stringify(
          'Password not sufficient, must have 1 special character, 1 capital letter, 1 lowercase letter, 1 number and must be  between 10 and 20 characters long.'
        )
      );
    }
  }
});

// app.post("/api/newID", cors(), async (req, res) => {
//   if (!Object.keys(req.body).length) {
//     return res.status(400).json({
//       message: "Request body cannot be empty",
//     });
//   }
// });

//Assign port and log it to console
const port = process.env.PORT || 7070;
app.listen(port, () => console.log(`Listening on port ${port}..`));
