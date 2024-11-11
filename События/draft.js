function addToCart(product) {
    // Найти список корзиныу
    const cart = document.querySelector('.cartEl');

    // Создать новый элемент списка для добавления в корзину
    const cartItem = document.createElement('li');
    cartItem.textContent = product;

    // Добавить новый товар в корзину
    cart.appendChild(cartItem);
}
//Как это работает:
 1 HTML: У каждого товара есть кнопка "Добавить в корзину", которая вызывает функцию addToCart() и передаёт в неё название товара (например, 'Товар 1').
 2 JavaScript: Когда кнопка нажата, функция addToCart():
 ◦ Находит элемент с классом cart (список корзины).
 ◦ Создаёт новый элемент списка (<li>), в который записывает название товара.
 ◦ Добавляет этот элемент в корзину с помощью метода appendChild().
Пример работы:
 • Пользователь нажимает на кнопку "Добавить в корзину" для товара "Товар 1".
 • В списке корзины появляется новая строка: "Товар 1".
 • Аналогично для других товаров.
Это простое решение, которое позволяет динамически добавлять товары в корзину, основываясь на выборе пользователя.