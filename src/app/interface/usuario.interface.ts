export interface Usuario {
    username: string;
    nombre: string;
    apellidos: string;
    email: string;
    telefono: number;
    password: string
    fecha_inscripcion?: Date;
}