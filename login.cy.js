describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // Зайти на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяем, что после авторизации виден текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
     })

     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#forgotEmailButton').click(); // Нажал кнопку "Забыли пароль"
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввели адрес электронной почты
        cy.get('#restoreEmailButton').click(); // Нажал кнопку "Отправить код"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяем, что после отправки кода виден текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
        cy.get('#pass').type('iLoveqastudio2'); // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяем, что виден текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#mail').type('dinar@shakirov.ru'); // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяем, что виден текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    })

    it('Валидация на наличие @', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяем, что виден текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // Зайти на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Приведение к строчным буквам в логине
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяем, что после авторизации виден текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
    })
 })
