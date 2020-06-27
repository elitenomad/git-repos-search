import axios from 'axios';
 
import { getRepos } from './repositories';
 
jest.mock('axios')
 
describe('getRepos', () => {

  afterEach(() => {
      jest.clearAllMocks()
  })

  it('success',  () => {
    const response = {
        data: {
          items: [
            {
              id: '1',
              name: 'test',
              description: 'allow testing',
              watchers_count: 10,
              stargazers_count: 20
            }
          ],
        },
      };
 
    axios.get.mockImplementationOnce(() => Promise.resolve(response))
 
    expect(getRepos('react')).resolves.toEqual(response);
  });
 
  it('failure', () => {
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error('Error'))
    )
 
    expect(getRepos('react')).rejects.toThrow('Error');
  });
});