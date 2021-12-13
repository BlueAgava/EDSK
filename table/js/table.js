const films = [
    {
      id: "1",
      time: "10:00",
      name: "Человек-паук",
      genres: ["Фантастика", "боевик", "приключения"],
    },
    {
      id: "2",
      time: "12:00",
      rate: "R",
      name: "Собачья жизнь 2",
      genres: ["фентези", "драмма", "комедия"],
    },
    {
      id: "3",
      time: "14:00",
      rate: "G",
      name: "История игрушек 4",
      genres: ["Мультфильмы", "фентези", "комедия"],
    },
    {
      id: "10",
      time: "16:00",
      rate: "NC-17",
      name: "Люди в черном: Интернешнл",
      genres: ["Фантастика", "боевик", "комедия"],
    },
    {
      id: "20",
      time: "18.00",
      name: "Человек-паук",
      genres: ["Фантастика", "боевик", "приключения"],
    },
    {
      id: "30",
      time: "20:00",
      rate: "R",
      name: "Собачья жизнь 2",
      genres: ["фентези", "драмма", "комедия"],
    },
    {
      id: "31",
      time: "22:00",
      rate: "G",
      name: "История игрушек 4",
      genres: ["Мультфильмы", "фентези", "комедия"],
    }
  ];
  class FilmHelper {
    constructor(film) {
      this.film = film;
    }
    getId() {
      return this.film.id ;
    }
    getTitle() {
      return this.film.name;
    }
    getTime() {
      return this.film.time;
    }
    getGeneres() {
      return this.film.genres.join(", ");
    }
  }
  let tbody = document.getElementById("table-body");
  tbody.innerHTML = "";
  function renderFilmTableItem(film) {
    const filmHelper = new FilmHelper(film);
    return `
    <tr>
          <td>${filmHelper.getId()}</td>
          <td>${filmHelper.getTime()}</td>
          <td>${filmHelper.getTitle()}</td>
          <td>${filmHelper.getGeneres()}</td>
    </tr> `;
  }
  // вывод информации из массива
  for (const film of films) {
    
      tbody.innerHTML += renderFilmTableItem(film);
    
  }