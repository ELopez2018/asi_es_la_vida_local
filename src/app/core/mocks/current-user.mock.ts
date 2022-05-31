import { UserModel } from '@models/user.model';


export const mockCurrentUser = (): UserModel => {
    return {
        id: 132,
        cc: '13206',
        nit: '13206',
        rut: null,
        name: 'Usuario prueba',
        last_name: 'apellido',
        email: 'email@email.com',
        image: null,
        representative_id: null,
        chamber_commerce: null,
        password: null,
        password_confirmation: null,
        phone: null,
        company: null,
        job: null,
        gender: null,
        status: null,
        role_id: null,
    };
};
