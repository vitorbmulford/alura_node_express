import express from "express";
import LivrosController from "../controllers/livrosControllers.js";

const routes = express.Router();

routes.get("/livros", LivrosController.listarLivros);
routes.get("/livros/busca", LivrosController.listarLivrosPorEditora);
routes.get("/livros/:id", LivrosController.listarLivroPorId);
routes.post("/livros", LivrosController.cadastrarLivro);
routes.put("/livros/:id", LivrosController.atualizarLivro);
routes.delete("/livros/:id", LivrosController.deletarLivro);

export default routes;
