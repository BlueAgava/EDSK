const humans = [
    {
      data: "10.12.2021",
      text: "это было супер",
      name: "Человек-паук",
      genres: ["Фантастика", "боевик", "приключения"],
    },
    {
      data: "11.12.2021",
      text: "это было супер",
      name: "Петя Иванов",
      genres: ["фентези", "драмма", "комедия"],
    },
    {
      data: "13.12.2021",
      text: "мне не понравилось, было мало мяса",
      name: "Чужой",
      genres: ["Мультфильмы", "фентези", "комедия"],
    },
    {
      data: "13.12.2021",
      text: "это были они",
      name: "Люди в черном",
      genres: ["Фантастика", "боевик", "комедия"],
    },
    {
      data: "14.12.2021",
      text: "это было супер",
      name: "Человек-паук",
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

  class FilmHelper {
    constructor(human) {
      this.human = human;
    }
    getData() {
      return this.human.data ;
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
  function renderFilmTableItem(human) {
    const filmHelper = new FilmHelper(human);
    return `
    <tr>
          <td>${filmHelper.getData()}</td>
          <td>${filmHelper.getName()}</td>
          <td>${filmHelper.getText()}</td>       
    </tr> `;
  }
  // вывод информации из массива
  for (const human of humans) {
      tbody.innerHTML += renderFilmTableItem(human);   
  }