


interface IAdmin {
    name: string;
    age: number;
    email: string;
    password: string;
    photo?: string;
    role: 'user' | 'admin';
}

export default IAdmin;