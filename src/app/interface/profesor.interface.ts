export interface Profesor {
    id: number;
    experiencia: string;
    precio: number;
    material_propio: boolean;
    niveles: number;
    desplazamiento: number;
    fk_clientes?: number;
    instalacion_propia?: number;
    descripcion_profesor?: string

}