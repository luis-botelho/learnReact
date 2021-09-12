const Api = {
  url: "http://localhost:3050",
  fetchGet: () => fetch(Api.url + "/tasks"),
  fetchGetById: (id) => fetch(Api.url + "/task/" + id),
  fetchPost: (body) => {
    return fetch(Api.url + "/task/new", {
      method: "POST",
      headers: new Headers({
        "Content-type": "application/json",
      }),
      body: JSON.stringify(body),
    });
  },
};
export default Api;
