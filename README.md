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

get 3 images of pizza  
  
```sh
npx pizzabay-scraper pizza 3
```

Generates the following JSON file

```json
[
	{
		"imageUrl": "https://cdn.pixabay.com/photo/2022/03/04/00/47/wine-7046276_640.jpg",
		"tags": ["wine", "pizza", "food"]
	},
	{
		"imageUrl": "https://cdn.pixabay.com/photo/2014/04/02/14/12/pizza-306495_640.png",
		"tags": ["pizza", "mushroom", "peppers"]
	},
	{
		"imageUrl": "https://cdn.pixabay.com/photo/2014/06/10/15/47/pizza-366111_640.jpg",
		"tags": ["pizza", "chef", "cook"]
	}
]
```
