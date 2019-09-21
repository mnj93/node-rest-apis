module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        id: {
            allowNull: false,
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
          },
        full_name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        phone_number: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        date_of_birth: {
            allowNull: false,
            type: DataTypes.DATE,
        }
    });
    User.associate = function (models) {
      // associations can be defined here
    };
    return User;
    };