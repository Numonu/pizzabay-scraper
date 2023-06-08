<div align="center">
  <div>
    <img width="300" src="https://cdn.leonardo.ai/users/11921fdd-d4bf-451b-899a-d586b1a7ee01/generations/8f9d73d0-3711-477a-812a-7d70e3dabf9a/variations/Default_Splash_art_of_pizza_portrait_poster_pizza_whitebackgr_1_8f9d73d0-3711-477a-812a-7d70e3dabf9a_0.png">
  </div>
  <strong>High Quality Image Scraping</strong>
</div>
<div align="center">Dozens of urls at a single command distance.</div>
<br />
<div align="center">
  <sub>Cooked by <a href="https://www.instagram.com/villegas.arts/">Numonu</a> 👨‍🍳</sub>
</div>

<br />

## 🍕bay scrapper

Generates a json file with links and categories of high quality images

## Installation

#### With NPM

```sh
npm install pizzabay-scraper
```

## Getting Started

Fill in the parameters and execute the command
  
```sh
npx pizzabay-scraper <category-of-images> <amount-of-images>
```
## Example

get 10 images of kittens  
  
```sh
npx pizzabay-scraper kittens 10
```

response

```json
[
	{
		"imageUrl": "https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404_640.jpg",
		"tags": ["Kitty", " Juguetón", " Flores"]
	},
	{
		"imageUrl": "https://cdn.pixabay.com/photo/2018/05/30/19/29/kitten-3442257_640.jpg",
		"tags": ["Gatito", " Gato", " Mascota", " Felino", " Animal"]
	},
	{
		"imageUrl": "https://cdn.pixabay.com/photo/2020/01/10/22/52/cat-4756360_640.jpg",
		"tags": ["Gato", " British Shorthair", " Gatito", " Vista"]
	},
	{
		"imageUrl": "https://cdn.pixabay.com/photo/2021/02/23/09/26/cat-6042858_640.jpg",
		"tags": ["Gato", " Gatito", " Atigrado", " Mascota", " Kitty"]
	},
	{
		"imageUrl": "https://cdn.pixabay.com/photo/2018/03/27/17/25/cat-3266673_640.jpg",
		"tags": ["Gato", " Triste", " Linda", " Pequeño", " Dulce"]
	},
	{
		"imageUrl": "https://cdn.pixabay.com/photo/2019/08/20/21/21/cat-4419763_640.jpg",
		"tags": ["Gato", " Gatito", " Hierba", " Saltar", " Tallo"]
	},
	{
		"imageUrl": "https://cdn.pixabay.com/photo/2022/10/15/21/23/cat-7523894_640.jpg",
		"tags": ["Gato", " Gatito", " Mascota", " Animal", " Felino"]
	},
	{
		"imageUrl": "https://cdn.pixabay.com/photo/2022/01/29/10/59/cat-6977088_640.jpg",
		"tags": ["Gato", " Mascota", " Animal", " British Shorthair"]
	},
	{
		"imageUrl": "https://cdn.pixabay.com/photo/2015/11/16/22/14/cat-1046544_640.jpg",
		"tags": ["Gato", " Atigrado", " Felino", " Rostro"]
	},
	{
		"imageUrl": "https://cdn.pixabay.com/photo/2017/12/25/11/32/cat-3038243_640.jpg",
		"tags": ["Gato", " Gato Atigrado", " Animal"]
	}
]
```
