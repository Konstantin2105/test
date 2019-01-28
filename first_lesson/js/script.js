'use strict';

let money = prompt("Ваш бюджет на месяц", "1400$");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData : time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false 
}

let exps1, exps2;
exps1 = prompt('Введите обязательную статью расходов в этом месяце','');
appData.expenses[exps1] = prompt('Во сколько обойдется?', '');
//appData - главный обьект
//.expenses обьект в обьекте
//[exp1] обращение к переменной

alert('Вам понадобится' + appData.expenses[exps1]/30 +'рублей в день для exps1');