# Soamee-test

#### App demo:

### Description

**Mel-Phones** (SPA) is an online mobile phone store.

### Server Install

```sh
npm install
```

### Server Usage

```sh
npm run dev
```


### Server .env variables needed

- PORT=5005
- ORIGIN=http://localhost:3000
- MONGODB_URI
- CLOUDINARY_NAME = Your Cloudinary user name
- CLOUDINARY_KEY = Key to your Cloudinary account
- CLOUDINARY_SECRET = Secret key of your Cloudinary account


### On client:

- REACT_APP_BASE_URL=http://localhost:5005


### Client Install

```sh
npm install
```

### Client Usage

```sh
npm run start
```


### Endpoints

|	Method	|	Path	|	Description	|
|	-	|	-	|	-	|
|	GET	|	/phones	|		Brings all phones |
|	GET	|	/phones/details/:id	|		Bring one phone |
|	POST	|	/phones	|	Create a phone |
|	PUT	|	/phones	|		Edit a phone |
|	DELETE	|	/phones	|	Delete a phone	|
|	POST	|	/uploads	|	Upload an image |
|	GET	|	/reviews/:id	|		Bring the reviews of a phone |
|	POST	|	/reviews/:id	|	Create a review |





### Front-end Endpoints

| Routes file | Path                       | Action                                            | 
| ----------- | -------------------------- |-------------------------------------------------- |
| User 
|             | /                  | Render all phones                  |
|             | /details/:id                    | Details of a phone |
|             | /cart           | Shopping Cart|




### Technologies

- React - Hooks
- MongoDB
- Express
- Node
- Javascript (ES6)
- HTML & CSS
- Bootstrap

