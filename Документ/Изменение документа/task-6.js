{
  /* <body> */
}

<ul>
  <li>
    Животные
    <ul>
      <li>
        Млекопитающие
        <ul>
          <li>Коровы</li>
          <li>Ослы</li>
          <li>Собаки</li>
          <li>Тигры</li>
        </ul>
      </li>
      <li>
        Другие
        <ul>
          <li>Змеи</li>
          <li>Птицы</li>
          <li>Ящерицы</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    Рыбы
    <ul>
      <li>
        Аквариумные
        <ul>
          <li>Гуппи</li>
          <li>Скалярии</li>
        </ul>
      </li>
      <li>
        Морские
        <ul>
          <li>Морская форель</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>;

// <script>
let lis = document.getElementsByTagName("li");

for (let li of lis) {
  // получить количество всех <li> ниже этого <li>
  let descendantsCount = li.getElementsByTagName("li").length;
  if (!descendantsCount) continue;

  // добавить непосредственно к текстовому узлу (добавить к тексту)
  li.firstChild.data += " [" + descendantsCount + "]";
}
{
  /* </script> */
}

{
  /* </body> */
}
