module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product',
        {
            // SKU: {
            //     // generateSKU function
            //     type: DataTypes.STRING(50),
            // },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false,
                validate: { notEmpty: true }
            },
            price: {
                type: DataTypes.FLOAT,
                allowNull: false,
                validate: { isFloat: true }
            },
            cartDesc: {
                type: DataTypes.STRING(250),
                allowNull: false,
                validate: { notEmpty: true }
            },
            shortDesc: {
                type: DataTypes.STRING(1000),
                allowNull: false,
                validate: { notEmpty: true }
            },
            longDesc: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: { notEmpty: true }
            },
            // categoryId: {
            //     type: DataTypes.BIGINT(11),
            //     allowNull: false
            //     // foreignKey --> FIX [Category]
            // },
            thumbImg1: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            img1: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            thumbImg2: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            img2: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            thumbImg3: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            img3: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            stock: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            promoted: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            // regionId: {
            //     type: DataTypes.BIGINT,
            //     allowNull: false
            // },
            size: {
                type: DataTypes.STRING(3),
                allowNull: false,
                validate: { notEmpty: true }
            },
            dimensions: {
                type: DataTypes.STRING(20),
                allowNull: false,
                validate: { notEmpty: true }
            }
        });
    //
    // generar un autoincremental
    // {
    //     getterMethods: {
    //         SKU() {
    //             return this.regionId + '' + this.categoryId;
    //         }
    //     },
    //     setterMethods: {
    //         SKU(value) {
    //             const names = value.split(' ');

    //             this.setDataValue('firstname', names.slice(0, -1).join(' '));
    //             this.setDataValue('lastname', names.slice(-1).join(' '));
    //         }
    //     }
    // });
    Product.associate = models => {
        // Product.hasMany(models.Order);
    };
    // Product.sync().catch(error =>
    //     console.error(`::[Error]:: Couldn't connect to database`, error),
    // );
    return Product;
};