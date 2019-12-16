'use strict'

module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order',
        {
            amount: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            shipName: {
                type: DataTypes.STRING(100),
                allowNull: false,
                validate: { notEmpty: true }
            },
            shipAddress1: {
                type: DataTypes.STRING(100),
                allowNull: false,
                validate: { notEmpty: true }
            },
            shipAddress2: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            city: {
                type: DataTypes.STRING(50),
                allowNull: false,
                validate: { notEmpty: true }
            },
            province: {
                type: DataTypes.STRING(50),
                allowNull: false,
                validate: { notEmpty: true }
            },
            postalCode: {
                type: DataTypes.INTEGER(5),
                allowNull: false
            },
            phone: {
                type: DataTypes.STRING(20),
                allowNull: false,
                validate: { notEmpty: true }
            },
            emailContact: {
                type: DataTypes.STRING(100),
                allowNull: false,
                validate: { isEmail: true }
            },
            shipped: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            trackingNumber: {
                type: DataTypes.STRING(80),
                allowNull: true,
                validate: { notEmpty: true }
            }
        });
    Order.associate = models => {
        // Order.hasMany(models.Order);
    };
    // Order.sync().catch(error =>
    //     console.error(`::[Error]:: Couldn't connect to database`, error),
    // );
    return Order;
};

