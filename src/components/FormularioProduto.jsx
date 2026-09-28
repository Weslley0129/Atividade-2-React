import { useState } from "react";
import "./FormularioProduto.css";

const CATEGORIAS = ["Eletrônicos", "Móveis", "Vestuário"];

const ESTADO_INICIAL = { nome: "", preco: "", categoria: CATEGORIAS[0] };

// Desafio Extra: formulário controlado com useState para cadastrar novos produtos
function FormularioProduto({ onAdicionar }) {
  const [form, setForm] = useState(ESTADO_INICIAL);

  const atualizarCampo = (evento) => {
    const { name, value } = evento.target;
    setForm((atual) => ({ ...atual, [name]: value }));
  };

  const enviar = (evento) => {
    evento.preventDefault();
    if (!form.nome.trim() || !form.preco) return;

    onAdicionar({
      id: Date.now(),
      nome: form.nome.trim(),
      preco: Number(form.preco),
      categoria: form.categoria,
    });

    setForm(ESTADO_INICIAL);
  };

  return (
    <form className="formulario-produto" onSubmit={enviar}>
      <div className="formulario-produto__campo">
        <label htmlFor="nome">Nome</label>
        <input id="nome" name="nome" value={form.nome} onChange={atualizarCampo} placeholder="Ex: Caixa de Som" />
      </div>
      <div className="formulario-produto__campo">
        <label htmlFor="preco">Preço (R$)</label>
        <input
          id="preco"
          name="preco"
          type="number"
          min="0"
          step="0.01"
          value={form.preco}
          onChange={atualizarCampo}
          placeholder="199.90"
        />
      </div>
      <div className="formulario-produto__campo">
        <label htmlFor="categoria">Categoria</label>
        <select id="categoria" name="categoria" value={form.categoria} onChange={atualizarCampo}>
          {CATEGORIAS.map((categoria) => (
            <option key={categoria}>{categoria}</option>
          ))}
        </select>
      </div>
      <button type="submit">Adicionar produto</button>
    </form>
  );
}

export default FormularioProduto;
