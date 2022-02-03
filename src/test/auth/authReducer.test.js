import { authReducer } from '../../auth/authReducer'
import { types } from '../../types/types'


describe('Pruebas en authReducer', () => {

  test('Debe de retornar el estado por defecto. ', () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test('Debe de autenticar y colocar en "name" del usuario en el state. ', () => {
    const action = {
      type: types.login,
      payload: { name: 'Ronald' }
    };

    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({ logged: true, name: 'Ronald' });
  });

  test('Debe de borrar en "name" del useario y cambiar el "logged" a false en el state. ', () => {
    const action = {
      type: types.logout,
    };

    const state = authReducer({ logged: true, name: 'Ronald' }, action);
    expect(state).toEqual({ logged: false });
  });


});
