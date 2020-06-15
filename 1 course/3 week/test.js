var book = {};
Object.defineProperty(book, 'language', {
  value: 'ru',
  writable: false
});
book.language = 'en';
console.log('мороз и солнце'.replace(/[а-я]+/, 'снег'))