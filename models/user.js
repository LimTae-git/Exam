'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true     // eamil 양식이 맞는지 확인
      },
      primaryKey: true     // eamil 컬럼을 고유키로 설정
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING
    }
  });

  /*
  user.associate = function(models) {
    // associations can be defined here
  };
  */

  return user;
};
