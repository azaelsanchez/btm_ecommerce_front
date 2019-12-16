'use strict'

module.exports = (sequelize, DataTypes) => {
    const ProductCategory = sequelize.define('ProductCategory',
        {
            name: {
                type: DataTypes.STRING(50),
                allowNull: false,
                validate: { isAlpha: true, notEmpty: true }
            }
        });
    ProductCategory.associate = models => {
        ProductCategory.hasMany(models.Product);
    };
    ProductCategory.sync().catch(error =>
        console.error(`::[Error]:: Couldn't connect to database`, error),
    );
    return ProductCategory;
};

