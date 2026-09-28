# Catálogo de Produtos — Atividade Unidade 2 (React)

Catálogo de produtos em React (Vite), aplicando os conceitos da Unidade 2:
configuração de projeto, componentes, props, JSX, `map`/`reduce` na renderização,
condicional com ternário e `useState` (desafio extra).

## Como rodar

Requer [Node.js](https://nodejs.org/) instalado.

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (geralmente `http://localhost:5173`).

## 1. Evolução do Front-End — console vs. React

Na Unidade 1, o catálogo existia só como `console.log`: para ver o resultado
era preciso ler texto no terminal, e qualquer mudança exigia rodar o script de
novo do zero. Em React, os mesmos dados e conceitos (variáveis, array,
`map`/`reduce`, ternário) viram interface: o navegador exibe os produtos como
elementos visuais (cards), e o `useState` permite atualizar a tela
automaticamente quando um produto é adicionado, sem recarregar a página.
React troca "imprimir texto" por "renderizar e reagir a mudanças de estado".

## Estrutura

```
src/
├── components/
│   ├── ProdutoCard.jsx        → card de produto (recebe nome, preco, categoria via props)
│   └── FormularioProduto.jsx  → formulário controlado com useState (desafio extra)
├── data/
│   └── produtos.js            → array de produtos
├── utils/
│   └── formatarMoeda.js       → formata preços em R$
└── App.jsx                    → importa os produtos, lista com map, soma com reduce
```

## Checklist

- [x] Projeto React configurado e rodando (Vite)
- [x] Pastas `src/components/` e `src/data/`
- [x] `App.jsx` importa o array de produtos
- [x] Componente `ProdutoCard.jsx` recebendo `nome`, `preco` e `categoria` via props
- [x] JSX exibindo os dados formatados em card
- [x] `map` dentro do JSX para listar os produtos
- [x] Preço total exibido com `reduce`
- [x] Destaque de promoções com operador ternário
- [x] Comparação console vs. React (acima e na própria tela)
- [x] Desafio extra: formulário com `useState` para cadastrar novos produtos
