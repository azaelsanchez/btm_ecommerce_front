'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
                email: "typographylover@yahoo.es",
                password: "Aa*12345",
                name: "Jorge",
                surname1: "Vicens",
                surname2: "Valor",
                isAdmin: true,
                city: "Valencia",
                postalCode: "03803",
                phone: "666000666",
                regionId: 10,
                address1: "C/Debajo del Puente, 1",
                address2: "",
                token: "",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                email: "Delorean@hotmail.com",
                password: "Thefuture2015!",
                name: "Marty",
                surname1: "Seamus",
                surname2: "McFly",
                isAdmin: false,
                city: "Hill Valley",
                postalCode: "52005",
                phone: "619551985",
                regionId: 19,
                address1: "C/Wallaby, 42",
                address2: "",
                token: "",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                email: "arribaespaña@gmail.com",
                password: "Españita36!",
                name: "Francisco",
                surname1: "Franco",
                surname2: "Bahamonde",
                isAdmin: false,
                city: "Ferrol",
                postalCode: "15041",
                phone: "619361939",
                regionId: 12,
                address1: "C/Falsa, 123 Pta 36",
                address2: "",
                token: "",
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('User', null, {});
    }
};
