import { useState } from "react";
import ProdutoCard from "./components/ProdutoCard";
import FormularioProduto from "./components/FormularioProduto";
import produtosIniciais from "./data/produtos";
import { formatarMoeda } from "./utils/formatarMoeda";
import "./App.css";

function App() {
  // useState (Desafio Extra) guarda a lista para permitir adicionar novos produtos
  const [produtos, setProdutos] = useState(produtosIniciais);

  const adicionarProduto = (novoProduto) => {
    setProdutos((atuais) => [...atuais, novoProduto]);
  };

  // reduce para o preço total do catálogo
  const precoTotal = produtos.reduce((total, produto) => total + produto.preco, 0);

  return (
    <div className="app">
      <header className="app__header">
        <span className="app__badge">Unidade 2 · React</span>
        <h1>Tech Store</h1>
        <p>Catálogo de produtos renderizado com componentes e JSX.</p>
      </header>

      <section className="app__resumo">
        <div>
          <span className="app__resumo-label">Produtos no catálogo</span>
          <strong>{produtos.length}</strong>
        </div>
        <div>
          <span className="app__resumo-label">Preço total (reduce)</span>
          <strong>{formatarMoeda(precoTotal)}</strong>
        </div>
      </section>

      {/* map dentro do JSX para listar todos os produtos na tela */}
      <section className="app__grid">
        {produtos.map((produto) => (
          <ProdutoCard
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            categoria={produto.categoria}
          />
        ))}
      </section>

      <section className="app__form">
        <h2>Desafio extra: cadastrar produto</h2>
        <FormularioProduto onAdicionar={adicionarProduto} />
      </section>

      <section className="app__comparacao">
        <h2>Console (JS puro) vs. React</h2>
        <p>
          Na Unidade 1, o catálogo existia só como <code>console.log</code>: para ver o resultado
          era preciso ler texto no terminal, e qualquer mudança exigia rodar o script de novo do
          zero. Em React, os mesmos dados (variáveis, array, <code>map</code>/<code>reduce</code>,
          ternário) viram interface: o navegador exibe os produtos como elementos visuais, e o{" "}
          <code>useState</code> permite atualizar a tela automaticamente quando um produto é
          adicionado, sem recarregar a página. React troca "imprimir texto" por "renderizar e
          reagir a mudanças de estado".
        </p>
      </section>
    </div>
  );
}

export default App;
