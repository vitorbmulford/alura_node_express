import mongoose, { version } from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, require: true },
    editora: { type: String, require: true },
    preco: { type: Number },
    paginas: { type: Number },
  },
  { versionKey: false }
);

const livro = mongoose.model("livros", livroSchema);

export default livro;
