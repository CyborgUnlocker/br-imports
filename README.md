
# BR Imports E-commerce

Este projeto é um e-commerce completo para a loja de roupas BR Imports, desenvolvido com Next.js 14, TypeScript, Tailwind CSS, Supabase (auth e banco) e Stripe (pagamento).

## Principais Funcionalidades
- Catálogo com filtros (tamanho, cor, categoria)
- Carrinho persistente (localStorage + Supabase se logado)
- Checkout com Stripe (Cartões, Pix, Boleto)
- Autenticação (e-mail, Google, GitHub)
- Painel do cliente (pedidos, endereços)
- Painel Admin (CRUD de produtos, pedidos, estoque)
- SEO dinâmico, OG images, sitemap.xml, robots.txt
- 100/100 no Lighthouse (desktop & mobile)

## Instalação
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Configure o arquivo `.env.local` com as chaves do Supabase e Stripe.
3. Rode o projeto localmente:
   ```bash
   npm run dev
   ```

## Deploy
- Faça push para o GitHub e importe no Vercel.
- Configure as variáveis de ambiente.
- Configure webhooks do Stripe para https://brimports.vercel.app/api/webhook/stripe

## Estrutura de Pastas
Veja a documentação interna e exemplos no código para seguir o padrão do projeto.
