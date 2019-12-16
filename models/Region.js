'use strict'

module.exports = (sequelize, DataTypes) => {
    const Region = sequelize.define('Region',
        {
            name: {
                type: DataTypes.STRING(50),
                allowNull: false,
                validate: { isAlpha: true, notEmpty: true }
            }
        }
    );
    Region.associate = models => {
        Region.hasMany(models.User);
        Region.hasMany(models.Product);
    };
    Region.sync().catch(error =>
        console.error(`::[Error]:: Couldn't connect to database`, error),
    );
    return Region;
};
