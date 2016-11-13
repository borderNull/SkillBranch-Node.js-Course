# Задача 2С: @username

## Краткое описание задачи

```
вырезать из строки вида `telegram.me/skillbranch` username `skillbranch`
```

## Полное описание задачи 

Многие сервисы, такие как ВК, Twitter, Telegram позволяют занимать унивальные имена пользователей. Очень часто пользователи заполняя формы на сайте, вставляют не стандартные ссылки на свои профили в соц.сетях.

Клиент выполняет GET запрос с параметром Query: `?username` в разных форматах.

Задача: привести все ссылки к единому формату, а именно к виду `@username`.

В случае если в url находится некорретная строка, необходимо вывести `Invalid username`

### Примеры 


*Пример 1*

```
?username=https://vk.com/skillbranch
-
@skillbranch
```

*Пример 2*

```
?username=//vk.com/skillbranch
-
@skillbranch
```

*Пример 3*

```
?username=skillbranch
-
@skillbranch
```

*Пример 4*

```
?username=https://vk.com/skillbranch?w=wall-117903599_1076
-
@skillbranch
```




