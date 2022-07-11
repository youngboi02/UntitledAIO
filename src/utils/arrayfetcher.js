export const arrayFetcher = (urlArr) => {
  const f = (u) => fetch(u).then((r) => r.json());
  return Promise.all(urlArr.map(f));
}