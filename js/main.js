'use strict';

/* 入力値を受け取る　合計に足す　合計を表示する */

{
  function addQuantity(tr, last_td) {
    tr.forEach(sushi_list=> {
      single_sum += parseInt(sushi_list.value);
      last_td.textContent = single_sum;
    });
  }

  /* 初期値 */
  let single_sum = 0;

  /* 要素の取得 */
  const sushi_1 = document.getElementById('sushi_1');
  const sushi_1_lists = document.querySelectorAll('#sushi_1 td input');
  const single_total_1 = document.getElementById('single_total_1');

  /* 各列の合計値 */

  sushi_1.addEventListener('change', () => {
    single_sum = 0;
    
    addQuantity(sushi_1_lists, single_total_1);
  });
}