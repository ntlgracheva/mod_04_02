'use strict'
const productName = "Ноутбук";
const productAmount = 5;
const productCategory = "Персональные компьютеры";
const productPrice = 500;

console.log('Наименование товара: ', productName);
console.log('Общая сумма товара: ', productAmount * productPrice, "$");

{
    const productName = prompt("Введите Наименование товара");
    const productAmount = + prompt("Введите Количество товара");;
    const productCategory = prompt("Введите Категорию товара");
    const productPrice = + prompt("Введите Цену товара");

    console.log(typeof (productName));
    console.log(typeof (productAmount));
    console.log(typeof (productCategory));
    console.log(typeof (productPrice));

    console.log(`На складе ${productAmount} единицы товара "${productName}" на сумму ${productAmount * productPrice} деревянных`);
}