# I Love Dogs

Проект был разработан в рамках второго этапа отбора в nFactorial Incubator

## Описание

Это веб-приложение для любителей собак, предоставляющее информацию о различных породах собак и позволяющее пользователям наслаждаться просмотром фотографий этих замечательных животных.

## Технологии

- **Фронтенд:** Angular
- **Бэкенд:** Django

## Инициализация приложения

### Требования
* Установленный `Node.js`
* Установленный `Python`
* Установленный `Django`
* Установленный `Angular CLI`

### Установка

1. Скачайте или клонируйте репозиторий: `git clone https://github.com/KakarovDamir/ILoveDogs.git`
2. Установите зависимости фронтенда: `cd frontend && npm install`
3. Установите зависимости бэкенда: `cd backend && pip install -r requirements.txt && pip install django-cors-headers`
4. Запустите бэкенд: `cd backend && myvenv\Scripts\activate && python manage.py runserver`
5. Запустите фронтенд: `cd frontend && ng serve`

## Процесс проектирования:

Определение функций и контента сайта стало наиболее трудоемкой задачей, так как мой опыт посещения подобных веб-ресурсов был ограничен. После формирования примерного представления о контенте, я начал поиск доступных API о собаках.

Было найдено два дополнительных API, но информации все же казалось недостаточно, поэтому я принял решение о разработке собственного бэкенда.

Использованные API:
* [random-facts](https://github.com/kinduff/dog-api)
* [dog-images](https://dog.ceo/dog-api/)
* [breeds](https://api-ninjas.com/api/dogs)

## Разработка и исправление ошибок:

* В процессе разработки столкнулся с рядом проблем. К примеру, возникала ошибка "core.mjs:6484 ERROR TypeError: Cannot read properties of undefined (reading 'name')", решение которой было быстро найдено.

* Еще одной трудностью стало отсутствие опыта подключения фронтенда к бэкенду, что потребовало больше времени, чем ожидалось, для освоения этого процесса.

## Компромиссы:

* Из-за ограниченного времени не удалось полностью реализовать авторизацию на серверной стороне. В связи с этим, данная функция была реализована на стороне фронтенда с использованием localstorage.  Прошу не судить строго страницы login и sign-up.

* Также, возможно, что из-за различий в разрешениях экранов на разных устройствах отображение сайта может немного отличаться от задуманного.

* Из-за ограниченного времени доступности бесплатной подписки к одному из API, надеюсь, что проверка проекта будет завершена до 15 мая 2024 года. Если это не удастся, вы можете [зарегистрироваться здесь](https://api-ninjas.com/api/dogs) и получить ключ к API. Полученный ключ API можете изменить в `post.service.ts -> private apiKey="your_apiKey"`. Спасибо за понимание❤️.