const URL = "https://pixabay.com/api/";
const API_KEY = "24079663-849aadf309a059b421030ae2f";

export function getAPI(searchName, page) {
  page = 1;
  let params = `?q=${searchName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  let url = URL + params;

  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(
        new Error(`There is no picture of name ${searchName}`)
      );
    })
    .then((data) => {
      return data.hits;
    });
}
