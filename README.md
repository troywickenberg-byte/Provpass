# Provpass HP – app för iPhone och dator

Det här är Provpass HP gjord som en installerbar webbapp (PWA). Den fungerar offline, har en egen ikon och öppnas i helskärm.

Dina resultat och PDF-prov sparas bara på den enhet du använder. Inget laddas upp.

## Publicera på GitHub Pages (en gång)

1. Logga in på https://github.com, eller skapa ett gratis konto.
2. Klicka på **+** uppe till höger och välj **New repository**.
   - Namn: `provpass`
   - Välj **Public**
   - Klicka på **Create repository**
3. På repots sida klickar du på länken **uploading an existing file**.
4. Dra in **allt innehåll i mappen** `provpass-pwa`, alltså `index.html`, `manifest.webmanifest`, `sw.js` och mapparna `fonts`, `icons` och `vendor`.
   Lägg in filerna direkt och inte mappen `provpass-pwa` själv, så att `index.html` hamnar högst upp i repot.
5. Klicka på **Commit changes**.
6. Gå till **Settings** → **Pages**. Under *Build and deployment* väljer du
   *Source: Deploy from a branch*, *Branch: main* och mappen */ (root)*. Klicka sedan på **Save**.
7. Vänta en till två minuter. Adressen blir `https://DITT-ANVÄNDARNAMN.github.io/provpass/`.

## Installera

**iPhone (Safari eller Chrome):** Öppna adressen och tryck på Dela-knappen. Välj **Lägg till på hemskärmen** och tryck på **Lägg till**.

**Dator (Chrome eller Edge):** Öppna adressen och klicka på installationsikonen till höger i adressfältet.

Öppna appen en gång medan du har internet. Efter det fungerar den offline.

## Läsa in prov

- **iPhone:** Tryck på **Välj PDF-filer** och välj provhäften och facit från appen Filer eller iCloud Drive. Du kan markera flera filer på en gång.
- **Dator:** Använd **Välj mapp** och välj hela mappen med gamla prov.

## Flytta resultat mellan telefon och dator

Telefonen och datorn har var sitt sparat data. Under **Snabbräkning → Säkerhetskopia** exporterar du en fil på den ena enheten och läser in den på den andra. På iPhone öppnas Dela-menyn, där du kan välja **Spara i Filer** eller AirDrop.

## Uppdatera appen

Ladda upp den ändrade `index.html` till repot på samma sätt som ovan. Appen hämtar den nya versionen nästa gång den öppnas med internet.
Om du byter ut andra filer, till exempel ikoner eller typsnitt, höjer du också `VERSION` i `sw.js` (till exempel `provpass-v2`).
