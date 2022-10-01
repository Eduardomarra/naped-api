import { Router, Request, Response } from 'express';
import { Categorie } from '../models/categorie.model';

const router = Router();

const categories: Array<Categorie> = [
    {
        "id": 2,
        "src": "assets/images/filmes/batman.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Batman",
        "date": "2022-03-15",
        "category": "filmes"
      },
      {
        "id": 3,
        "src": "assets/images/filmes/faster.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Batman",
        "date": "2022-03-15",
        "category": "filmes"
      },
      {
        "id": 4,
        "src": "assets/images/filmes/interestelar.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        "date": "2022-03-15",
        "category": "filmes"
      },
      {
        "id": 5,
        "src": "assets/images/filmes/Kombat.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        "date": "2022-03-15",
        "category": "filmes"
      },
      {
        "id": 6,
        "src": "assets/images/filmes/sonic.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        "date": "2022-03-15",
        "category": "filmes"
      },
      {
        "id": 7,
        "src": "assets/images/filmes/terror.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        "date": "2022-03-15",
        "category": "filmes"
      },
      {
        "id": 8,
        "src": "assets/images/filmes/valente.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        "date": "2022-03-15",
        "category": "filmes"
      },
      {
        "id": 9,
        "src": "assets/images/filmes/avatar.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Avatar",
        "date": "2022-03-15",
        "category": "filmes"
      },
      {
        "id": 10,
        "src": "https://cineclick-static.flixmedia.cloud/1280/69/1080x1620_1595514091.jpg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        "date": "2022-03-15",
        "category": "filmes"
      },
      {
        "id": 11,
        "src": "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/02/tom-sturridge-sandman-social.jpg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "teste",
        "date": "2022-03-15",
        "category": "filmes"
      },
      {
        "id": 12,
        "src": "assets/images/series/breaking.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.TTTTTTT",
        "date": "2022-03-15",
        "category": "series"
      },
      {
        "id": 13,
        "src": "assets/images/series/chris.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        "date": "2022-03-15",
        "category": "series"
      },
      {
        "id": 14,
        "src": "assets/images/series/dark.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        "date": "2022-03-15",
        "category": "series"
      },
      {
        "id": 15,
        "src": "assets/images/series/friends.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        "date": "2022-03-15",
        "category": "series"
      },
      {
        "id": 16,
        "src": "assets/images/series/sandman.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        "date": "2022-03-15",
        "category": "series"
      },
      {
        "id": 17,
        "src": "assets/images/series/stranger.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        "date": "2022-03-15",
        "category": "series"
      },
      {
        "id": 18,
        "src": "assets/images/series/swat.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        "date": "2022-03-15",
        "category": "series"
      },
      {
        "id": 19,
        "src": "assets/images/series/the-100.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        "date": "2022-03-15",
        "category": "series"
      },
      {
        "id": 20,
        "src": "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/02/tom-sturridge-sandman-social.jpg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "teste",
        "date": "2022-03-15",
        "category": "series"
      },
      {
        "id": 21,
        "src": "assets/images/animes/dragon-ball.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        "date": "2022-03-15",
        "category": "animes"
      },
      {
        "id": 22,
        "src": "assets/images/animes/goku.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.aaaaaa",
        "date": "2022-03-15",
        "category": "animes"
      },
      {
        "id": 23,
        "src": "assets/images/animes/naruto-2.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        "date": "2022-03-15",
        "category": "animes"
      },
      {
        "id": 24,
        "src": "assets/images/animes/naruto.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        "date": "2022-03-15",
        "category": "animes"
      },
      {
        "id": 25,
        "src": "assets/images/animes/one-piece.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        "date": "2022-03-15",
        "category": "animes"
      },
      {
        "id": 26,
        "src": "assets/images/animes/yuyu.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        "date": "2022-03-15",
        "category": "animes"
      },
      {
        "id": 27,
        "src": "assets/images/animes/zodiaco-2.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        "date": "2022-03-15",
        "category": "animes"
      },
      {
        "id": 28,
        "src": "assets/images/animes/zodiaco.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        "date": "2022-03-15",
        "category": "animes"
      },
      {
        "id": 29,
        "src": "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/02/tom-sturridge-sandman-social.jpg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "teste",
        "date": "2022-03-15",
        "category": "animes"
      },
      {
        "id": 30,
        "src": "assets/images/games/crew.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        "date": "2022-03-15",
        "category": "games"
      },
      {
        "id": 31,
        "src": "assets/images/games/ghost.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        "date": "2022-03-15",
        "category": "games"
      },
      {
        "id": 32,
        "src": "assets/images/games/god.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        "date": "2022-03-15",
        "category": "games"
      },
      {
        "id": 33,
        "src": "assets/images/games/halo.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        "date": "2022-03-15",
        "category": "games"
      },
      {
        "id": 34,
        "src": "assets/images/games/horizon.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        "date": "2022-03-15",
        "category": "games"
      },
      {
        "id": 35,
        "src": "assets/images/games/last-of-us.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        "date": "2022-03-15",
        "category": "games"
      },
      {
        "id": 36,
        "src": "assets/images/games/spider.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Spider-man",
        "date": "2022-03-15",
        "category": "games"
      },
      {
        "id": 37,
        "src": "assets/images/games/uncharted-game.svg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.",
        "date": "2022-03-15",
        "category": "games"
      },
      {
        "id": 38,
        "src": "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/02/tom-sturridge-sandman-social.jpg",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t",
        "description": "teste",
        "date": "2022-03-15",
        "category": "games"
      }
];

router.get('/all', (req: Request, res: Response) => {
    res.send(categories);
});

router.get('/:id', (req: Request, res: Response) => {
    res.send(categories.find((categorie) => categorie.id === parseInt(req.params.id)));
});

router.post('/create', (req: Request, res: Response) => {
    const categorie = req.body;
    categorie.id = (categories[(categories.length - 1)].id + 1);
    categories.push(categorie);
    res.status(201).send({ message: 'Produto criado com sucesso!' });

});

router.put('/update/:id', (req: Request, res: Response) => {
    const categorie = req.body;
    const id = parseInt(req.params.id);
    const categorieIndex = categories.findIndex((p) => p.id === id);
    if(categorieIndex === -1) res.status(404).send({ message: 'Categoria não encontrada para fazer atualização!' });
    categories[categorieIndex] = categorie;
    res.status(200).send({ message: 'Produto atualizado com sucesso!' });
});

router.delete('/remove/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const categorieIndex = categories.findIndex((categorie) => categorie.id === id);
    if(categorieIndex === -1) res.status(404).send({ message: 'Categoria não encontrada para fazer a remoção!' });
    categories.splice(categorieIndex, 1);
    res.status(200).send({ message: 'Produto excluído com sucesso!' });
});

export default router;