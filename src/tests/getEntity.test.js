/* eslint-disable no-undef */
const EntityService = require('../services/EntityService');

jest.useFakeTimers();
jest.setTimeout(2000000);

const newService = new EntityService();

describe('getEntity', () => {
  it('should not be able to get entity without id or email', () => {
    const callGetEntity = async () => {
      await newService.getEntity({});
    };
    expect(callGetEntity).rejects.toThrow(
      new Error('Nenhum identificador encontrado'),
    );
  });
  it('should not be able to get entity without email', () => {
    const callGetEntity = async () => {
      await newService.getEntity({ id: '62c992badc3fbf0027b95653' });
    };
    expect(callGetEntity).rejects.toThrow(
      new Error('Nenhum identificador encontrado'),
    );
  });
  it('should not be able to get entity without id', () => {
    const callGetEntity = async () => {
      await newService.getEntity({ email: 'email@sample.com' });
    };
    expect(callGetEntity).rejects.toThrow(
      new Error('Nenhum identificador encontrado'),
    );
  });
  it('should be able to get entity with id or email', async () => {
    const callGetEntity = async () => {
      await newService.getEntity({ id: '62c992badc3fbf0027b95653', email: 'email@sample.com' });
    };
    expect(callGetEntity).not.toBeUndefined();
  });
});
