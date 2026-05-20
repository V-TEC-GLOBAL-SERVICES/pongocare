# 🎨 GUIA COMPLETO: Onde Adicionar Logo, Favicon e Imagens dos Produtos

---

## 1️⃣ FAVICON (Ícone na Aba do Navegador)

### Localização no HTML:
Na secção `<head>`, adiciona isto depois do `<title>`:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PONGOS CARE</title>
  
  <!-- ✅ ADICIONA AQUI O FAVICON -->
  <link rel="icon" type="image/png" href="imagens/favicon.png" />
  <link rel="apple-touch-icon" href="imagens/apple-icon.png" />
  
  <meta name="description" content="Cosméticos naturais que constroem autoestima e identidade." />
  ...
</head>
```

### Tamanhos Recomendados:
- **favicon.png**: 32x32px ou 64x64px
- **apple-icon.png**: 180x180px (para iOS)

---

## 2️⃣ LOGO (Nav Header + Footer)

### Localização no HTML:

#### Na navegação (topo):
```html
<a href="imagens/Logo Pongos 2.png" class="nav__brand">
  <span class="nav__brand-mark">PC</span>
  <span class="nav__brand-name">Pongos Care</span>
</a>
```

**Opção A - Substituir o "PC" por uma imagem:**
```html
<a href="#home" class="nav__brand">
  <img src="imagens/logo-pongos.png" alt="Pongos Care Logo" class="nav__brand-image" />
  <span class="nav__brand-name">Pongos Care</span>
</a>
```

**CSS para a imagem do logo:**
```css
.nav__brand-image {
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--honey-bright) 0%, var(--honey) 100%);
  padding: 4px;
}
```

---

#### No footer:
```html
<div class="footer__brand">
  <div class="nav__brand-mark nav__brand-mark--lg">PC</div>
  <p class="footer__name">Pongos Care</p>
  <p class="footer__tag"><em>Cosméticos Naturais &middot; Huambo </em></p>
</div>
```

**Substituir por:**
```html
<div class="footer__brand">
  <img src="imagens/logo-pongos.png" alt="Pongos Care Logo" class="footer__brand-logo" />
  <p class="footer__name">Pongos Care</p>
  <p class="footer__tag"><em>Cosméticos Naturais &middot; Huambo </em></p>
</div>
```

**CSS para o footer:**
```css
.footer__brand-logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 0.5rem;
}
```

---

## 3️⃣ IMAGENS DOS PRODUTOS (Cards com Imagem em Full)

### ⚠️ PROBLEMA ATUAL:
Os cards têm "frascos" ilustrados em SVG. Para colocar **imagens reais** dos teus produtos que ocupem **todo o espaço**, precisas:

### Solução: Substituir o `parfum__visual` por uma imagem de fundo

#### HTML Original:
```html
<article class="parfum parfum--feature">
  <div class="parfum__visual parfum__visual--ambre">
    <div class="parfum__bottle parfum__bottle--ambre">
      <div class="parfum__body">
        <span class="parfum__monogram">H</span>
        <span class="parfum__num-label">Hidratante</span>
      </div>
    </div>
  </div>
  <div class="parfum__info">
    ...
  </div>
</article>
```

#### ✅ HTML MODIFICADO (Com Imagem em Full):
```html
<article class="parfum parfum--feature">
  <div class="parfum__visual parfum__visual--image-bg">
    <img src="imagens/hidratante-produto.jpg" alt="Hidratante Pongos" class="parfum__image" />
  </div>
  <div class="parfum__info">
    <span class="parfum__roman">Linha Limpeza</span>
    <h3>Hidratante </h3>
    <p class="parfum__notes">Textura de açúcar, aveia </p>
    <p class="parfum__desc">Proporciona hidratação, nutrição e suavidade na pele...</p>
    <div class="parfum__bottom">
      <a href="#" class="parfum__link">Comprar Agora →</a>
    </div>
  </div>
</article>
```

### CSS para Imagens em Full (Adiciona ao style.css):

```css
/* Remover os estilos antigos e adicionar novos */
.parfum__visual--image-bg {
  background: var(--bg-main);
  padding: 0;
  min-height: 320px;
  overflow: hidden;
}

.parfum--feature .parfum__visual--image-bg {
  min-height: 500px;
}

.parfum__image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* ✅ Ocupa todo o espaço, recortando a imagem */
  display: block;
  transition: transform 0.4s ease;
}

/* Efeito de zoom ao passar o rato */
.parfum:hover .parfum__image {
  transform: scale(1.05);
}
```

### Tamanhos de Imagem Recomendados:
- **Hidratante (destaque)**: 600px × 750px (proporção 3:4)
- **Outros produtos**: 400px × 500px (proporção 4:5)
- **Formato**: JPG ou PNG otimizado (50-200KB)

---

## 📁 ESTRUTURA DE PASTAS RECOMENDADA:

```
projeto/
├── imagens/
│   ├── favicon.png
│   ├── apple-icon.png
│   ├── logo-pongos.png
│   ├── hidratante-produto.jpg
│   ├── sabonete-produto.jpg
│   ├── serum-produto.jpg
│   └── merchandising-produto.jpg
├── css/
│   ├── reset.css
│   ├── style.css
│   └── responsive.css
└── index.html
```

---

## 4️⃣ EXEMPLO COMPLETO - Todos os 4 Produtos com Imagens

```html
<section class="collection" id="produtos">
  <div class="section-head">
    <span class="section-marker">— Nossas soluçoes —</span>
    <h2>A <em>Linha</em> de Autocuidado</h2>
    <p>Oferecemos uma linha de produtos para cuidados da pele</p>
  </div>

  <div class="collection__grid">
    <!-- PRODUTO 1: HIDRATANTE (DESTAQUE) -->
    <article class="parfum parfum--feature">
      <div class="parfum__visual parfum__visual--image-bg">
        <img src="imagens/hidratante-produto.jpg" alt="Hidratante Pongos" class="parfum__image" />
      </div>
      <div class="parfum__info">
        <span class="parfum__roman">Linha Limpeza</span>
        <h3>Hidratante</h3>
        <p class="parfum__notes">Textura de açúcar, aveia</p>
        <p class="parfum__desc">Proporciona hidratação, nutrição e suavidade na pele...</p>
        <div class="parfum__bottom">
          <a href="#" class="parfum__link">Comprar Agora →</a>
        </div>
      </div>
    </article>

    <!-- PRODUTO 2: SABONETE -->
    <article class="parfum">
      <div class="parfum__visual parfum__visual--image-bg">
        <img src="imagens/sabonete-produto.jpg" alt="Sabonete Pongos" class="parfum__image" />
      </div>
      <div class="parfum__info">
        <span class="parfum__roman">Linha Limpeza</span>
        <h3>Sabonete Natural</h3>
        <p class="parfum__notes">Coco, camomila, enxofre</p>
        <div class="parfum__bottom">
          <a href="#" class="parfum__link">Comprar Agora →</a>
        </div>
      </div>
    </article>

    <!-- PRODUTO 3: SERUM -->
    <article class="parfum">
      <div class="parfum__visual parfum__visual--image-bg">
        <img src="imagens/serum-produto.jpg" alt="Sérum Pongos" class="parfum__image" />
      </div>
      <div class="parfum__info">
        <span class="parfum__roman">LINHA DE LIMPEZA</span>
        <h3>Serum</h3>
        <p class="parfum__notes">Autocuidado, nutrição e bem estar</p>
        <div class="parfum__bottom">
          <a href="#" class="parfum__link">Acessar Conteúdo →</a>
        </div>
      </div>
    </article>

    <!-- PRODUTO 4: MERCHANDISING -->
    <article class="parfum">
      <div class="parfum__visual parfum__visual--image-bg">
        <img src="imagens/merchandising-produto.jpg" alt="Merchandising Pongos" class="parfum__image" />
      </div>
      <div class="parfum__info">
        <span class="parfum__roman">Estilo Pessoal</span>
        <h3>Utensílios da Marca</h3>
        <p class="parfum__notes">Frases inspiradoras, T-shirts, Bonés</p>
        <div class="parfum__bottom">
          <a href="#" class="parfum__link">Explorar →</a>
        </div>
      </div>
    </article>
  </div>
</section>
```

---

## 5️⃣ CSS COMPLETO PARA IMAGENS (Adiciona ao style.css)

```css
/* ========== IMAGENS DOS PRODUTOS ========== */

/* Remove os estilos antigos dos "frascos" */
.parfum__bottle,
.parfum__body,
.parfum__monogram,
.parfum__num-label {
  display: none; /* Esconde os frascos ilustrados */
}

/* Novo estilo para imagens em full */
.parfum__visual--image-bg {
  background: var(--bg-soft);
  padding: 0;
  position: relative;
  overflow: hidden;
}

.parfum__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}

/* Efeito ao passar o rato */
.parfum:hover .parfum__image {
  transform: scale(1.08);
}

/* Garantir altura mínima */
.parfum__visual {
  min-height: 320px;
}

.parfum--feature .parfum__visual {
  min-height: 500px;
}
```

---

## 🎯 RESUMO RÁPIDO

| Elemento | Localização | Tamanho | Formato |
|----------|-------------|--------|---------|
| **Favicon** | `<head>` | 32-64px | PNG |
| **Logo Nav** | Header `.nav__brand` | 48x48px | PNG |
| **Logo Footer** | Footer `.footer__brand` | 60x60px | PNG |
| **Produto Destaque** | `#produtos .parfum--feature` | 600x750px | JPG |
| **Outros Produtos** | `#produtos .parfum` | 400x500px | JPG |

---

## ✅ PRÓXIMOS PASSOS

1. Prepara as tuas imagens nas dimensões recomendadas
2. Coloca-as na pasta `imagens/`
3. Substitui o `src="imagens/nome.jpg"` pelo caminho correto
4. Testa no navegador para ver os efeitos de zoom

Qualquer dúvida, avisa! 🚀
