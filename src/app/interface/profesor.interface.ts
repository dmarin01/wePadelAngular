export interface Profesor {
    id: number;
    experiencia: string;
    precio: number;
    material_propio: boolean;
    niveles: number;
    desplazamiento: number;
    rango_desplazamiento: number;
    fk_clientes?: number;
}