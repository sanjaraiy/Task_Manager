const request = require('supertest');
const app = require('../src/app');

describe('Task API', () => {

  test('POST /tasks should create a task', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({ title: 'Test Task' });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test Task');
  });

  test('GET /tasks should return tasks', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('PUT /tasks/:id should update task', async () => {
    const createRes = await request(app)
      .post('/tasks')
      .send({ title: 'Update Me' });

    const id = createRes.body.id;

    const updateRes = await request(app)
      .put(`/tasks/${id}`)
      .send({ completed: true });

    expect(updateRes.body.completed).toBe(true);
  });

  test('DELETE /tasks/:id should delete task', async () => {
    const createRes = await request(app)
      .post('/tasks')
      .send({ title: 'Delete Me' });

    const id = createRes.body.id;

    const res = await request(app).delete(`/tasks/${id}`);
    expect(res.statusCode).toBe(200);
  });

});