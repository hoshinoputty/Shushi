'use strict';

/* 入力値を受け取る　合計に足す　合計を表示する */

{
  let single_sum = 0;

  const sushi_1 = document.getElementById('sushi_1');
  const sushi_1_lists = document.querySelectorAll('#sushi_1 td input');
  const single_total_1 = document.getElementById('single_total_1');

  sushi_1.addEventListener('change', () => {
    single_sum = 0;

    sushi_1_lists.forEach(sushi_1_list => {
      single_sum += parseInt(sushi_1_list.value);
      single_total_1.textContent = single_sum;
    });
  });
}