# Wedding Portfolio – Twoja oferta sprzedażowa

Strona główna prezentująca **4 warianty stron ślubnych** w formie kafelków-katalogu. Klient klika kafelek → otwiera się demo wybranego stylu → klient wybiera, składa zamówienie.

---

## 🚀 SZYBKI START w VS Code

### Wymagania
- [Node.js 18+](https://nodejs.org)
- [Visual Studio Code](https://code.visualstudio.com)
- [Git](https://git-scm.com/downloads)

### Uruchomienie lokalne

1. `File → Open Folder...` → wybierz `portfolio`
2. Otwórz terminal: `` Ctrl + ` ``
3. ```bash
   npm install
   npm run dev
   ```
4. Otwórz: http://localhost:3000

---

## ⚙️ KONFIGURACJA (URL-e wzorcowych stron)

W tym projekcie **konfiguracja jest na górze pliku**:

```
src/App.jsx
```

Znajdź obiekt `config` na początku pliku i wstaw URL-e 4 wzorcowych stron:

```js
sites: [
  {
    id: 'klasyczna',
    title: 'Klasyczna Elegancja',
    url: 'https://twoja-strona-klasyczna.vercel.app',  // <-- TUTAJ
    ...
  },
  {
    id: 'boho',
    url: 'https://twoja-strona-boho.vercel.app',       // <-- TUTAJ
    ...
  },
  // ... 4 warianty
]
```

Możesz też zmienić:
- `studio.nazwa` – nazwa Twojego studia
- `oferta` – co oferujesz w pakiecie
- Każdy wariant: `title`, `subtitle`, `desc`, `colors`, `preview` (URL podglądowego zdjęcia)

---

## 🎯 Workflow sprzedażowy

```
KROK 1 – Wdroż 4 wzorcowe strony (każdą osobno)
         strona-1-klasyczna  → https://wariant-klasyczna.vercel.app
         strona-2-boho       → https://wariant-boho.vercel.app
         strona-3-romantyczna → https://wariant-romantyczna.vercel.app
         strona-4-minimalistyczna → https://wariant-minimalistyczna.vercel.app

KROK 2 – Wpisz powyższe URL-e w portfolio/src/App.jsx (config.sites[].url)

KROK 3 – Wdroż portfolio (poniższa instrukcja)
         → https://wedding-portfolio.vercel.app
         → wysyłasz klientom

KROK 4 – Klient wybiera styl, dogadujecie się
         → kopiujesz odpowiednią wzorcową stronę dla nowego klienta
         → edytujesz config.js (jego dane)
         → wdrażasz pod nowym URL-em
         → wysyłasz klientowi link
```

---

## 🌐 DEPLOY na Vercel przez GitHub

### 1. GitHub repo

1. https://github.com/new → np. `wedding-portfolio` → **Public** lub Private (Twój wybór)
2. Skopiuj URL repo

### 2. Push z VS Code

```bash
git init
git add .
git commit -m "Portfolio - oferta wedding studio"
git branch -M main
git remote add origin https://github.com/TWOJ-LOGIN/wedding-portfolio.git
git push -u origin main
```

### 3. Vercel Import

1. https://vercel.com/new
2. Wybierz repo → Import
3. Framework: **Vite** ✓
4. Deploy

Otrzymujesz URL np. `https://wedding-portfolio.vercel.app` lub `https://twoja-domena.pl` po podpięciu domeny.

### Aktualizacje

```bash
git add . && git commit -m "Update" && git push
```
Vercel sam zbuduje i wdroży.

---

## 🎨 Personalizacja portfolio

W `src/App.jsx`:

| Pole | Co edytować |
|---|---|
| `config.studio.nazwa` | Nazwa Twojego studia (np. "Anna Wedding Design") |
| `config.studio.cytat` | Slogan/tagline portfolio |
| `config.sites[].url` | URL-e do Twoich wzorcowych deploymentów |
| `config.sites[].preview` | Zdjęcie podglądowe kafelka (Unsplash URL) |
| `config.oferta` | Lista funkcji w pakiecie (8 punktów) |

Pliki w `public/`:
- `favicon.svg` – ikona w karcie (zmień na logo studia)
- `og-image.jpg` – miniaturka przy udostępnianiu linku do oferty
- `site.webmanifest` – nazwa po dodaniu do ekranu głównego

---

## 🛠️ Build / Preview

```bash
npm run build       # produkcja → dist/
npm run preview     # test buildu lokalnie
```

---

## 📞 Pytania?

Zobacz `README.md` w głównym folderze `wedding-portfolio/` – tam jest pełna instrukcja workflow z klientami.

**Powodzenia w sprzedaży 💍**
