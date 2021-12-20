const humans = [
    {
      data: "10.12.2021",
      text: "это было супер",
      name: "Человек-паук",
      email: "abc@mail.ru",
      genres: ["Фантастика", "боевик", "приключения"],
    },
    {
      data: "11.12.2021",
      text: "это было супер",
      name: "Петя Иванов",
      email: "def@mail.ru",
      genres: ["фентези", "драмма", "комедия"],
    },
    {
      data: "13.12.2021",
      text: "мне не понравилось, было мало мяса",
      name: "Чужой",
      email: "ghd@mail.ru",
      genres: ["Мультфильмы", "фентези", "комедия"],
    },
    {
      data: "13.12.2021",
      text: "это были они",
      name: "Люди в черном",
      email: "ghd@mail.ru",
      genres: ["Фантастика", "боевик", "комедия"],
    },
    {
      data: "14.12.2021",
      text: "это было супер",
      name: "Человек-паук",
      email: "ghd@mail.ru",
      genres: ["Фантастика", "боевик", "приключения"],
    },
    {
      data: "15.12.2021",
      text: "это было супер",
      name: "Василий Иванович",
      genres: ["фентези", "драмма", "комедия"],
    },
    {
      data: "16 декабря 2021",
      text: "это было супер",
      name: "Петрович",
      genres: ["Мультфильмы", "фентези", "комедия"],
    }
  ];

  class TableHelper {
    constructor(human) {
      this.human = human;
    }
    getData() {
      return this.human.data ;
    }
    getEmail() {
      return this.human.email ;
    }
    getName() {
      return this.human.name;
    }
    getText() {
      return this.human.text;
    }
  }
  
  let tbody = document.getElementById("table-body");
  tbody.innerHTML = "";
// вывод в таблицу 
  function renderTableItem(human) {
    const tableHelper = new TableHelper(human);
    return `
    <tr>
          <td>${tableHelper.getData()}</td>
          <td>${tableHelper.getEmail()}</td>
          <td>${tableHelper.getName()}</td>
          <td>${tableHelper.getText()}</td>       
    </tr> `;
  }
  // вывод информации из массива
  for (const human of humans) {
      tbody.innerHTML += renderTableItem(human);   
  }