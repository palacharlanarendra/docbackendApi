# Endpoints

### Authentication Header:

You can read the authentication header from the headers of the request

`Authorization: Token jwt.token.here`


### Authentication:

`POST /api/users/login`

Example request body:
```JSON
{
  "user":{
    "email": "jake@jake.jake",
    "password": "jakejake"
  }
}
```

No authentication required, returns a [User](/specs/backend-specs/api-response-format.md#users-for-authentication)

Required fields: `email`, `password`


### Registration:

`POST /api/users`

Example request body:
```JSON
{
  "user":{
    "username": "Jacob",
    "email": "jake@jake.jake",
    "password": "jakejake"
  }
}
```

No authentication required, returns a [User](/specs/backend-specs/api-response-format.md#users-for-authentication)

Required fields: `email`, `username`, `password`




### List Articles

`GET /api/articles`

Returns most recent articles globally by default, provide `tag`, `author` or `favorited` query parameter to filter results

Query Parameters:

Filter by tag:

`?tag=AngularJS`

Filter by author:

`?author=jake`

Favorited by user:

`?favorited=jake`

Limit number of articles (default is 20):

`?limit=20`

Offset/skip number of articles (default is 0):

`?offset=0`

Authentication optional, will return [multiple articles](/specs/backend-specs/api-response-format.md#multiple-articles), ordered by most recent first



### Feed Articles

`GET /api/articles/feed`

Can also take `limit` and `offset` query parameters like [List Articles](/specs/backend-specs/api-response-format.md#list-articles)

Authentication required, will return [multiple articles](/specs/backend-specs/api-response-format.md#multiple-articles) created by followed users, ordered by most recent first.


### Get Article

`GET /api/articles/:slug`

No authentication required, will return [single article](/specs/backend-specs/api-response-format.md#single-article)

### Create Article

`POST /api/articles`

Example request body:

```JSON
{
  "article": {
    "title": "How to train your dragon",
    "description": "Ever wonder how?",
    "body": "You have to believe",
    "tagList": ["reactjs", "angularjs", "dragons"]
  }
}
```

Authentication required, will return an [Article](/specs/backend-specs/api-response-format.md#single-article)

Required fields: `title`, `description`, `body`

Optional fields: `tagList` as an array of Strings



### Update Article

`PUT /api/articles/:slug`

Example request body:

```JSON
{
  "article": {
    "title": "Did you train your dragon?"
  }
}
```

Authentication required, returns the updated [Article](/specs/backend-specs/api-response-format.md#single-article)

Optional fields: `title`, `description`, `body`

The `slug` also gets updated when the `title` is changed


### Delete Article

`DELETE /api/articles/:slug`

Authentication required


No authentication required, returns a [List of Tags](/specs/backend-specs/api-response-format.md#list-of-tags)

### Post nested Comments to an Comment
`GET /api/articles/:slug/fetchComments

```js

{
  "comment": {
    "body": "this is the third comment.",
    "commentId":"6180e88ecdbeb666a529e2d3"
  }
}

```

Authentication optional, returns [Nested comments](/specs/backend-specs/api-response-format.md#multiple-comments)

