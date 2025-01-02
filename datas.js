const { DateTime, Interval } = require('luxon');

const agora = DateTime.now();
console.log(agora);

const dataDoAniversario = DateTime.fromFormat('21/02/1988', 'dd/MM/yyyy');
console.log(dataDoAniversario);

const idade = Interval.fromDateTimes(dataDoAniversario, agora).length('years');
console.log(Math.floor(idade));