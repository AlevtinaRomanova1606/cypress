describe ('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru ');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.get('#messageHeader').contains('Авторизация прошла успешно');
       cy.get('#messageHeader').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
       })

       it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('alevtinaromanova1606@yandex.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

        it('Верный логин и не верный пароль', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('german@dolnikov.ru ');
            cy.get('#pass').type('iLoveqastudio');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').contains('Такого логина или пароля нет');
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
            })

            it('НЕ Верный логин и верный пароль', function () {
                cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('german1@dolnikov.ru');
                cy.get('#pass').type('iLoveqastudio1');
                cy.get('#loginButton').click();
                cy.get('#messageHeader').contains('Такого логина или пароля нет');
                cy.get('#messageHeader').should('be.visible');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                })

                it('Проверка валидации', function () {
                    cy.visit('https://login.qa.studio/');
                    cy.get('#mail').type('germandolnikov.ru');
                    cy.get('#pass').type('iLoveqastudio1');
                    cy.get('#loginButton').click();
                    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
                    cy.get('#messageHeader').should('be.visible');
                    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                    })

                    it('Проверка на приведение к строчным буквам в логине', function () {
                        cy.visit('https://login.qa.studio/');
                        cy.get('#mail').type('GerMan@Dolnikov.ru');
                        cy.get('#pass').type('iLoveqastudio1');
                        cy.get('#loginButton').click();
                        cy.get('#messageHeader').contains('Такого логина или пароля нет');
                        cy.get('#messageHeader').should('be.visible');
                        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                        })
})
