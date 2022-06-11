const client = axios.create({
  baseURL: 'http://localhost:3002'
});

const todos = [];

const getAllTodos = async () => {
  try {
    const response = await client.get('/todos');
    console.log(response);
  } catch (e) {

  }
}

export {
  todos,
  getAllTodos
}