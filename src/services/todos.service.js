import httpService from "./http.service";

const todosEndpoint = "todos/";
const todosService = {
  fetch: async () => {
    const { data } = await httpService.get(todosEndpoint, {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
    return data;
  },
  create: async (title, completed) => {
    const { data } = await httpService.post(todosEndpoint, {
      title: title,
      completed: completed,
    });
    return data;
  },
};

export default todosService;
