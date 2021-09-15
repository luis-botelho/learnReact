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
  fetchPut: (body, id) => {
    return fetch(Api.url + "/task/edit/" + id, {
      method: "PUT",
      headers: new Headers({
        "content-type": "application/json",
      }),
      body: JSON.stringify(body),
    });
  },
  fetchDelete: (id) => {
    return fetch(Api.url + "/task/delete/" + id, {
      method: "DELETE",
    });
  },
};
export default Api;
