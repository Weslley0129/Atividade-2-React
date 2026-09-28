import { formatarMoeda } from "../utils/formatarMoeda";
import "./ProdutoCard.css";

const LIMITE_PROMOCAO = 200;

function ProdutoCard({ nome, preco, categoria }) {
  const emPromocao = preco < LIMITE_PROMOCAO;

  return (
    <article className={`produto-card${emPromocao ? " produto-card--promocao" : ""}`}>
      <div className="produto-card__topo">
        <h3 className="produto-card__nome">{nome}</h3>
        <span className="produto-card__categoria">{categoria}</span>
      </div>
      <p className="produto-card__preco">{formatarMoeda(preco)}</p>
      {/* Condicional JSX com operador ternário, destacando produtos em promoção */}
      {emPromocao ? (
        <span className="produto-card__selo produto-card__selo--promocao">Em promoção</span>
      ) : (
        <span className="produto-card__selo">Preço normal</span>
      )}
    </article>
  );
}

export default ProdutoCard;
