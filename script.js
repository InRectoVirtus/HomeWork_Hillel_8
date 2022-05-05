/*
Написать функцию getMaxs(args), где args - любое количество массивов.

Функция должна вернуть максимальные чисельные значения всех переданных массивов в виде строки, через разделитель `,`
*/



function getMax(...args) {
    let maxArg = [];
    // debugger
    for(i = 0; i < args.length; i++){
        maxArg.push(Math.max.apply(null, args[i]));
    };
    return maxArg.join(`, `);
};

console.log(getMax([2,1],[2,4],[34,54,11,2]));