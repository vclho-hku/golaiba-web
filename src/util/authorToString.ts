export default function authorToString(authors: any) {
  let result = '';
  authors.forEach((author: any) => {
    if (author.name.zh_hk) {
      result += author.name.zh_hk;
    }
    if (author.name.en_us) {
      result += `(${author.name.en_us})`;
    }
    result += ' ';
  });
  return result;
}
