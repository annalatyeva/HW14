// массив с информацией про режиссеров
const directors = [
    {
        name: 'Стивен Спилберг',
        career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
        films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
        top_rated_film: 'Список Шиндлера'
    },
    {
        name: 'Кристофер Нолан',
        career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
        films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
        top_rated_film: 'Начало'
    },
    {
        name: 'Виктор Шамиров',
        career: 'Режиссер, Сценарист, Актер, Продюссер, Монтажер',
        films: 'https://www.film.ru/person/viktor-shamirov',
        top_rated_film: 'Со мною вот что происходит',
    },
    {
        name: 'Мартин МакДона',
        career: 'Сценарист, Режиссёр, Продюсер',
        films: 'https://www.film.ru/person/martin-makdonah',
        top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
        name: 'Алексей Балабанов',
        career: 'Режиссёр, Сценарист, Актёр, Продюсер',
        films: 'https://www.film.ru/person/aleksey-balabanov',
        top_rated_film: 'Брат'
    },
    {
        name: 'Питер Фаррелли',
        career: 'Продюсер, Режиссёр, Сценарист, Актёр',
        films: 'https://www.film.ru/person/piter-farrelli',
        top_rated_film: 'Зелёная книга'
    },
    {
        name: 'Юрий Быков',
        career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
        films: 'https://www.film.ru/person/yuriy-bykov',
        top_rated_film: 'Дурак'
    },
    {
        name: 'Жан-Марк Валле',
        career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
        films: 'https://www.film.ru/person/zhan-mark-valle',
        top_rated_film: 'Далласский клуб покупателей'
    },
];

window.onload = function () {

// создание заголовка "мои любимые..." (h1)
    let h1 = document.createElement ('h1');
    h1.innerText = `${String.fromCharCode(0x2665)} ${String.fromCharCode(0x2665)} ${String.fromCharCode(0x2665)} Мои любимые режиссеры ${String.fromCharCode(0x2665)} ${String.fromCharCode(0x2665)} ${String.fromCharCode(0x2665)}`;
    document.querySelector('.container').appendChild(h1);

    // создание контейнера для информации о режиссере
    for (let i = 0; i < directors.length; i++) {
        let directorСontainer = document.createElement ('div');
        directorСontainer.className = 'director-container';
        document.querySelector('.container').appendChild (directorСontainer);
    }

    // // создание блока с именем режиссера (h3) и порядковым номером
    createEl ('nameContainer', 'h3', 'director', '', '.director-container');

    directors.forEach ((item, index) =>{
        document.querySelectorAll('.director')[index].innerText = `${index + 1}. ${item.name}`;
    })

    // создание блока с информацией о карьере (p)
    createEl ('careerСontainer', 'p', 'career', '', '.director-container');

    directors.forEach ((item, index) =>{
        document.querySelectorAll('.career')[index].innerText = item.career;
    })

    // создание блока со ссылкой на фильмографию
    createEl ('filmographyContainer', 'p', 'filmography-container', '', '.director-container');

    createEl ('filmographyLink', 'a', 'filmography-link', 'фильмография', '.filmography-container');

    directors.forEach ((item, index) =>{
        document.querySelectorAll('.filmography-link')[index].href = item.films;
    })

    // создание контейнера для лучших фильмов режиссеров
    let filmsContainer = document.createElement('div');
    filmsContainer.className = 'films-container';
    document.querySelector('.container').appendChild(filmsContainer);

    let filmsTitle = document.createElement('h2');
    filmsTitle.className = 'films-title';
    filmsTitle.innerText = 'Лучшие фильмы этих режиссеров';
    document.querySelector('.films-container').appendChild(filmsTitle);

    let films = document.createElement('p');
    films.className = 'films';
    document.querySelector('.films-container').appendChild(films);
    
    const topRatedFilms = directors.map(function (item) {
        return item.top_rated_film;
    })
    let topRatedFilmsList = topRatedFilms.join(', ');
    document.querySelector('.films').innerText = topRatedFilmsList;
}

// elName - имя, создаваемого элемента
// elTag - тег, создаваемого элемента
// elClass - класс, который мы присваем элементу
// elInnerText - текст внутри элемента
// elAdress - элемент, внутрь которого мы вставляем наш элемент
function createEl (elName, elTag, elClass, elInnerText, elAdress) {
    for (let i = 0; i < directors.length; i++){
        let elName = document.createElement(elTag);
        elName.className = elClass;
        elName.innerText = elInnerText;
        document.querySelectorAll(elAdress)[i].appendChild(elName);
    }
}

