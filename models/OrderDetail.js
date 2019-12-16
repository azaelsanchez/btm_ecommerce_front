'use strict'

module.exports = (sequelize, DataTypes) => {
    const OrderDetail = sequelize.define('OrderDetail',
        {
            // discuss
            orderId: {
                type: DataTypes.BIGINT(11),
                allowNull: false
            },
            userId: {
                type: DataTypes.BIGINT(11),
                allowNull: false
            },
            productId: {
                type: DataTypes.BIGINT(11),
                allowNull: false
            },
            price: {
                type: DataTypes.FLOAT,
                allowNull: false,
                validate: { isFloat: true }
            },
            SKU: {
                type: DataTypes.STRING(50),
                allowNull: false,
                validate: { notEmpty: true }
            },
            amount: {
                type: DataTypes.BIGINT(11),
                allowNull: false
            },
            shippingCosts: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            tax: {
                type: DataTypes.FLOAT,
                allowNull: false
            }
        });
    OrderDetail.associate = models => {
        OrderDetail.hasOne(models.Order);
    };
    OrderDetail.sync().catch(error =>
        console.error(`::[Error]:: Couldn't connect to database`, error),
    );
    return OrderDetail;
};