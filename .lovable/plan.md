# Dárkové poukazy – online prodej

## Co přibude na webu
- Nová sekce **„Dárkový poukaz"** mezi *Co nabízím* a *Portfolio* (a odkaz v navigaci).
- Karta s popisem poukazu a třemi variantami:
  - Individuální kurz make-upu – **3 000 Kč**
  - Líčení – **3 000 Kč**
  - Volná částka (zadá kupující) – volitelně
- Tlačítko **„Koupit poukaz"** → otevře Stripe Checkout (platba kartou, Apple/Google Pay).
- Po úspěšné platbě se kupující vrátí na stránku s poděkováním a obdrží **e-mail s PDF poukazem** (unikátní kód, hodnota, platnost 12 měsíců).
- Vy dostanete notifikační e-mail o každém prodeji.

## Co je potřeba zapnout (na pozadí)
1. **Lovable Cloud** – databáze pro evidenci poukazů a odesílání e-mailů.
2. **Stripe Payments** (vestavěné v Lovable, není potřeba vlastní účet při testování) – pro přijímání plateb. Spustí se v testovacím režimu, ostré platby po ověření.
3. **Email doména** – aby poukaz chodil z vaší adresy (`@ivadaviesmakeup.cz` nebo podobné), ne z obecné.

## Technické detaily
- Tabulka `gift_vouchers` (kód, hodnota, typ kurzu, e-mail kupujícího, e-mail příjemce, vzkaz, stav: `pending`/`paid`/`redeemed`, datum platnosti).
- Edge funkce:
  - `create-checkout` – vytvoří Stripe Checkout session.
  - `stripe-webhook` – po platbě označí poukaz jako `paid`, vygeneruje PDF a pošle e-mail.
- PDF poukaz v designu webu (Playfair Display + Outfit, fotka, kód, hodnota, platnost).
- RLS: poukazy čte jen service_role (edge funkce), klient nemá přímý přístup.

## Otevřené otázky před implementací
1. **Varianty poukazů** – mají být obě (3 000 Kč kurz + 3 000 Kč líčení) a navíc volná částka, nebo jen jedna univerzální hodnota?
2. **Vzkaz a jméno obdarovaného** – chcete, ať kupující při objednávce může vyplnit jméno a osobní vzkaz, který se otiskne na PDF?
3. **Platnost poukazu** – standardně 12 měsíců od zakoupení, vyhovuje?
4. **E-mail pro notifikace prodeje** – má chodit na `info@ivadaviesmakeup.cz`?

Po vašem potvrzení rovnou zapnu Cloud + Stripe a vše naimplementuji.