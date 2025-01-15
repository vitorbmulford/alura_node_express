import { autor } from "../models/Autor.js";

class AutoresController {
  static async listarAutores(req, res) {
    
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} falha na requisição` });
    }
  }

  static async listarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      if (!autorEncontrado) {
        return res.status(404).json({ message: "Autor não encontrado" });
      }
      res.status(200).json(autorEncontrado);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} falha na requisição do autor` });
    }
  }

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res
        .status(201)
        .json({ message: "Autor criado com sucesso", autor: novoAutor });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao cadastrar autor` });
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      const autorAtualizado = await autor.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!autorAtualizado) {
        return res.status(404).json({ message: "Autor não encontrado" });
      }
      res
        .status(200)
        .json({ message: "Autor atualizado", autor: autorAtualizado });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} falha na atualização do autor` });
    }
  }

  static async deletarAutor(req, res) {
    try {
      const id = req.params.id;
      const autorDeletado = await autor.findByIdAndDelete(id);
      if (!autorDeletado) {
        return res.status(404).json({ message: "Autor não encontrado" });
      }
      res.status(200).json({ message: "Autor excluído com sucesso" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} falha na exclusão do autor` });
    }
  }
}

export default AutoresController;
