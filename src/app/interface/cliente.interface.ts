export interface Cliente {
    id: number;
    username: string;
    nombre: string;
    apellidos: string;
    provincia: string;
    nivel: number;
    telefono: string;
    email: string;
    edad: number;
    fecha_inscripcion: Date;
    img_cliente: string;
    descripcion: string
}