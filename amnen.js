// Ämne per kvantuppgift i gamla prov (XYZ, KVA, NOG och DTK).
// Nyckel: "provdatum|provpass", värde: 40 koder, en per uppgift i ordning (uppgift 1 först).
// Taggarna är satta utifrån lösningarna i forklaringar.js. Ett ämne per uppgift.
window.AMNE_NAMN = {
  ekv:'Ekvationer',
  alg:'Algebra och förenkling',
  brak:'Bråkräkning',
  pot:'Potenser och rötter',
  proc:'Procent och andelar',
  funk:'Funktionsvärden',
  linje:'Räta linjen',
  olik:'Tecken och olikheter',
  tal:'Heltal och delbarhet',
  stat:'Medelvärde och median',
  sann:'Sannolikhet',
  vinkel:'Vinklar',
  area:'Area, omkrets och volym',
  pyth:'Pythagoras sats',
  hast:'Hastighet och tid',
  text:'Logik och mängder',
  overslag:'Huvudräkning och överslag',
  'dtk-andel':'DTK: andelar och förändring',
  'dtk-avlas':'DTK: avläsa och räkna',
  'dtk-karta':'DTK: kartor och skala',
};
window.AMNE = {
  '2025-10-19|1': [
    'ekv','vinkel','alg','funk','area','proc','hast','linje','alg','overslag','sann','pot',   // XYZ 1–12
    'pot','funk','text','ekv','olik','brak','area','olik','vinkel','tal',                  // KVA 13–22
    'text','hast','stat','text','text','ekv',                                              // NOG 23–28
    'dtk-andel','dtk-avlas','dtk-andel','dtk-avlas','dtk-avlas','dtk-andel','dtk-karta','dtk-karta','dtk-karta','dtk-andel','dtk-avlas','dtk-avlas'],
  '2025-10-19|4': [
    'proc','stat','ekv','ekv','pyth','pot','pot','linje','brak','area','pot','alg',
    'text','olik','brak','linje','olik','area','olik','stat','vinkel','brak',
    'text','proc','vinkel','ekv','text','olik',
    'dtk-andel','dtk-avlas','dtk-andel','dtk-avlas','dtk-avlas','dtk-karta','dtk-karta','dtk-karta','dtk-karta','dtk-avlas','dtk-avlas','dtk-andel'],
  '2026-04-18|3': [
    'alg','funk','vinkel','brak','ekv','sann','overslag','pot','linje','proc','area','pot',
    'olik','pyth','tal','pot','olik','tal','brak','area','olik','linje',
    'text','tal','text','tal','pyth','text',
    'dtk-avlas','dtk-avlas','dtk-andel','dtk-andel','dtk-avlas','dtk-avlas','dtk-karta','dtk-karta','dtk-karta','dtk-andel','dtk-avlas','dtk-avlas'],
  '2026-04-18|5': [
    'ekv','alg','stat','linje','brak','vinkel','overslag','alg','linje','area','pot','olik',
    'sann','pot','hast','ekv','alg','vinkel','linje','olik','area','olik',
    'text','proc','text','proc','hast','stat',
    'dtk-andel','dtk-andel','dtk-avlas','dtk-avlas','dtk-andel','dtk-avlas','dtk-andel','dtk-avlas','dtk-andel','dtk-andel','dtk-avlas','dtk-avlas'],
  '2026-10-18|1': [
    'alg','vinkel','tal','sann','ekv','pot','linje','pyth','ekv','funk','brak','pot',
    'overslag','olik','area','tal','stat','hast','vinkel','funk','pot','olik',
    'proc','text','area','proc','text','olik',
    'dtk-andel','dtk-avlas','dtk-andel','dtk-andel','dtk-avlas','dtk-andel','dtk-karta','dtk-karta','dtk-karta','dtk-andel','dtk-andel','dtk-avlas'],
  '2026-10-18|4': [
    'brak','stat','linje','ekv','vinkel','funk','tal','ekv','proc','area','proc','tal',
    'olik','area','brak','text','olik','sann','area','linje','olik','pot',
    'tal','proc','ekv','hast','text','text',
    'dtk-andel','dtk-avlas','dtk-andel','dtk-avlas','dtk-andel','dtk-andel','dtk-avlas','dtk-andel','dtk-andel','dtk-avlas','dtk-avlas','dtk-avlas'],
};
