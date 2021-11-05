# [Movies Explorer](http://api.idiploma.nomoredomains.work/)
Репозиторий для серверного API проекта **Movies Explorer**.

## IP-адрес сервера на Яндекс.Облаке:
~~~
62.84.122.93
~~~
## Домен:
http://api.idiploma.nomoredomains.work/

## Методы API:
| Метод  | Путь              | Описание                                                                                                                                | Требует авторизации |
|--------|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------|---------------------|
|  POST  | `/signup`         | Cоздаёт пользователя с переданными в теле email, password и name                                                                        |        false        |
|  POST  | `/signin`         | Проверяет переданные в теле почту и пароль и возвращает JWT                                                                             |        false        |
|   GET  | `/movies`         | Возвращает все сохранённые пользователем фильмы                                                                                         |         true        |
|  POST  | `/movies`         | Создаёт фильм с переданными в теле country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId  |         true        |
| DELETE | `/movies/movieId` | Удаляет сохранённый фильм из избранного по id                                                                                           |         true        |
