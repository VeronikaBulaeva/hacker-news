[Посмотреть проект](https://stackblitz.com/github/VeronikaBulaeva/hacker-news)

# Интерфейс для сайта [Hacker News](https://news.ycombinator.com/news).

## Продуктовые требования

### Главная страница

- Показывает новости в виде списка, отсортированного по дате, самые свежие сверху.
- Каждая новость содержит:
  - название
  - рейтинг
  - ник автора
  - дату публикации
  - По клику на новость происходит переход на страницу новости
- Список новостей автоматически обновляется раз в минуту без участия пользователя
- На странице есть кнопка для принудительного обновления списка новостей

### Страница новости

- Содержит:
  - ссылку на новость
  - заголовок новости
  - дату
  - автора
  - счётчик количества комментариев
  - список комментариев в виде дерева
- Корневые комментарии подгружаются сразу же при входе на страницу, вложенные - по клику на корневой.
- Список комментариев автоматически обновляется раз в минуту без участия пользователя
- На странице есть кнопка для принудительного обновления списка комментариев
- На странице есть кнопка для возврата к списку новостей

## Технические требования

- Приложение разработано с использованием React с использованием:
  - TypeScript
  - State management (RTK.)
  - React Hooks
- Использована [улучшенная версия HNPWA API](https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md). Вызовы Hacker News API и обработка данных от него производятся напрямую с фронтенда.
- Роутинг выполнен с использованием `React Router`
- Библиотека [MUI](https://mui.com/)
- Пакетный менеджер `npm`
- Приложение запускается по адресу `localhost:3000` командой `npm start`
- После запуска приложения все переходы по ссылкам не перезагружают страницу
- Форматирование: eslint и prettier
