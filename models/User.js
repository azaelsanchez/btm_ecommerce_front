'use strict'

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User',
        {
            email: {
                type: DataTypes.STRING(500),
                allowNull: false,
                unique: true,
                validate: { isEmail: true }
            },
            password: {
                type: DataTypes.STRING(500),
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING(500),
                allowNull: false,
                validate: { isAlpha: true, notEmpty: true }
            },
            surname1: {
                type: DataTypes.STRING(50),
                allowNull: false,
                validate: { isAlpha: true, notEmpty: true }
            },
            surname2: {
                type: DataTypes.STRING(50),
                allowNull: false,
                validate: { isAlpha: true, notEmpty: false }
            },
            isAdmin: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
                validate: { notEmpty: true }
            },
            city: {
                type: DataTypes.STRING(50),
                allowNull: false,
                validate: { isAlpha: true, notEmpty: true }
            },
            postalCode: {
                type: DataTypes.INTEGER(5),
                allowNull: false,
                validate: { isNumeric: true }
            },
            phone: {
                type: DataTypes.STRING(20),
                allowNull: false,
                validate: { isNumeric: true, notEmpty: true }
            },
            // emailVerified: {
            //     type: DataTypes.BOOLEAN,
            //     allowNull: false
            // },
            // regionId: {
            //     type: DataTypes.INTEGER(2),
            //     allowNull: false
            // },
            // verificationQuestion: {
            //     type: DataTypes.STRING(140),
            //     allowNull: false,
            //     validate: { notEmpty: true }
            // },
            address1: {
                type: DataTypes.STRING(100),
            },
            address2: {
                type: DataTypes.STRING(100),
            },
            createdAt: {
                allowNull: false,
                defaultValue: DataTypes.NOW,
                type: DataTypes.DATE
            },
            updatedAt: {
                allowNull: false,
                defaultValue: DataTypes.NOW,
                type: DataTypes.DATE
            },
            // createdAt: {
            //     field: 'created_at',
            //     type: DataTypes.DATE,
            // },
            // updatedAt: {
            //     field: 'updated_at',
            //     type: DataTypes.DATE,
            // },
            token: {
                type: DataTypes.STRING
            }
        });
    User.associate = models => {
        User.hasMany(models.Order);
    };
    return User;
};