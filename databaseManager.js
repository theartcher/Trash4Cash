const { Sequelize, DataTypes, Model, QueryTypes } = require('sequelize');
const config = require('./config.json');

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

try {
  sequelize.authenticate();
  console.log('\n Connection has been established successfully. \n');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

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

export async function checkRegistered(email, username) {
  try {
    const parameters = [email, username];
    const results = await sequelize.query(
      'SELECT * FROM trash4cash WHERE email = ? OR username = ?',
      {
        type: QueryTypes.SELECT,
        replacements: parameters,
      }
    );
    console.log(results.length + ' ' + results);
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

export async function createAccount(
  firstName,
  lastName,
  email,
  password,
  username,
  registeredCity
) {
  const userExists = await checkRegistered(email, username);
  const parameters = [
    999,
    firstName,
    lastName,
    email,
    password,
    username,
    0,
    0,
    registeredCity,
  ];

  if (userExists == false) {
    try {
      const newUser = await trash4cash.create({
        id: parameters[0],
        firstName: parameters[1],
        lastName: parameters[2],
        email: parameters[3],
        password: parameters[4],
        username: parameters[5],
        bottlesSaved: parameters[6],
        credits: parameters[7],
        registeredCity: parameters[8],
        type: QueryTypes.INSERT,
      });
      console.log(
        '\nUser succesfully injected with email ' + email,
        'And username ' + username + '\n'
      );
    } catch (err) {
      console.log(err);
    }
  }
}

export function isPasswordStrong(password) {
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
}

// isPasswordStrong('r^#Ptdwo;P?H23444');

// createAccount(
//   'Joris',
//   'Brugman',
//   'Joris@toqira.nl',
//   'admin',
//   'Joribori04',
//   'eindhoven'
// );
