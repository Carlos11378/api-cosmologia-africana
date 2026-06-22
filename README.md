# API Cosmologia Africana v3.0

API de pesquisa academica sobre Cosmologia Africana, com dados sobre conceitos, divindades, inkices (nkisis), cosmogonias, ritos, civilizacoes, linguas, escritas, autores, arquetipos e livros.

## Categorias

- **Conceitos** (16) — Ubuntu, Maat, Asé, Nkisi, Sankofa, Mandombe, Kalunga, Dikenga...
- **Divindades** (24) — Rá, Ísis, Osíris, Hórus, Iemanjá, Oxum, Xangô, Ogum, Exu...
- **Inkices** (15) — Aluvaiá, Mukumbi, Mutakalambô, Katendê, Kawungo, Angorô, Zaze, Kitembu, Matamba, Dandalunda, Kaitumba, Zumbarandá, Wuji, Lembaranganga, Mesa Jurema Sagrada
- **Cosmogonias** (8) — Criação de Amma, Nilo como Hapi, Kalunga...
- **Ritos** (7) — Candomblé, Vodun, Toque de Atabaques...
- **Civilizações** (8) — Egito Antigo, Reino de Cuxe, Dinastias Núbias, Mali, Benin...
- **Línguas** (14) — Árabe, Chokwe, Kassanje, Kikongo, Kimbundo, Lingala, Ngangela, Swahili, Umbundo, Yoruba, Akan, Wolof, Zulu, Ge'ez
- **Escritas** (9) — Adinkra, Ge'ez, Kassanje, Hieróglifos, Mandombe, Nsibidi, Sona, Tifinagh, Vai
- **Autores** (25) — Cheikh Anta Diop, Jung, Bachelard, Durand, Fu-Kiau, Obenga, Sophie Oluwole...
- **Arquétipos** (21) — Fogo, Água, Serpente, Tambor, Travessia, Ancestral, Árvore...
- **Livros** (15) — Obras dos principais autores catalogados

## Rotas da API

| Rota | Descrição |
|------|-----------|
| `GET /` | Interface web |
| `GET /pesquisar/:termo` | Pesquisa em todas as categorias |
| `GET /tradicao/:termo` | Filtra por tradição |
| `GET /categoria/:nome` | Lista categoria específica |
| `GET /conceitos` | Lista conceitos |
| `GET /divindades` | Lista divindades |
| `GET /inkices` | Lista inkices |
| `GET /cosmogonias` | Lista cosmogonias |
| `GET /ritos` | Lista ritos |
| `GET /civilizacoes` | Lista civilizações |
| `GET /linguas` | Lista línguas |
| `GET /escritas` | Lista escritas |
| `GET /autores` | Lista autores |
| `GET /arquetipos` | Lista arquétipos |
| `GET /livros` | Lista livros |

## Deploy no Railway

1. Crie um repositório no GitHub e faça upload destes arquivos
2. Acesse [railway.app](https://railway.app) e crie uma conta
3. Clique em "New Project" → "Deploy from GitHub repo"
4. Selecione seu repositório
5. Pronto! A API estará online 24h

## Uso local

```bash
npm install
node index.js
```

Acesse: http://localhost:3000

## Licença

MIT
