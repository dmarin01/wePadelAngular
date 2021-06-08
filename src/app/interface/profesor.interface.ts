export interface Cliente {
    id: number;
    experiencia: string;
    precio: number;
    material_propio: string;
    niveles: number;
    desplazamiento: number;
    rango_desplazamiento: number;
    fk_clientes: number;
}