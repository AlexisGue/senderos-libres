# Senderos Libres

Sitio web de la agencia de viajes y turismo **Senderos Libres**, con paquetes a Cerro El Pital, Cerro Verde + Lago de Coatepeque y Antigua Guatemala.

## Cómo verlo en local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Cómo subirlo a Vercel

1. Crea un repositorio en GitHub y súbelo:
   ```bash
   git add .
   git commit -m "Sitio de Senderos Libres"
   git remote add origin TU_REPO
   git push -u origin main
   ```
2. Entra a [vercel.com](https://vercel.com), inicia sesión y elige **Add New → Project**.
3. Importa el repositorio. Vercel detecta Next.js solo.
4. Pulsa **Deploy**. En un par de minutos tendrás una URL pública, por ejemplo `senderos-libres.vercel.app`.

También puedes desplegar desde la terminal:

```bash
npx vercel
```

El primer deploy pide iniciar sesión. Después, `npx vercel --prod` publica a producción.
