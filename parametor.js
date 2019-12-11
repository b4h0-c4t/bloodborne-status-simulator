const basic_parametor = 50;
const require_status = [40, 20, 0, 35, 0, 40];

const default_status = [
  [11, 10, 12, 10, 9, 8],
  [14, 11, 11, 10, 7, 7],
  [9, 14, 9, 13, 6, 9],
  [12, 11, 15, 9, 6, 7],
  [9, 12, 9, 15, 7, 8],
  [10, 10, 14, 13, 7, 6],
  [7, 8, 9, 13, 14, 9],
  [10, 12, 10, 9, 5, 14],
  [10, 9, 10, 9, 7, 9]
];

const attached_status = default_status.map(
  (status) => status.map(
    (param, i) => param > require_status[i]
      ? param
      : require_status[i]))

const each_level = attached_status.map(status => status.reduce((cur, acc) => cur + acc) - 50)

console.log(attached_status);
console.log(each_level);
