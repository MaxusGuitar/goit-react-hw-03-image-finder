const URL = "https://pixabay.com/api/";
const API_KEY = "24079663-849aadf309a059b421030ae2f";

export function getAPI(searchName) {
  let params = `?q=${searchName}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  let url = URL + params;

  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.hits;
    });
}
