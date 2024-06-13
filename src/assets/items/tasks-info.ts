export interface TaskInfo {
    key: string;
    values: string[];
}

export const tasksInfo: TaskInfo[] = [
    { key: "Alta Reclamo", values: ["Pos-Venta"] },
    { key: "Balance Reposición", values: ["Ventas"] },
    { key: "Cancelar Pedido", values: ["Ventas"] },
    { key: "Catálogo de Producto", values: ["Pre-Venta"] },
    { key: "Chat Bot", values: ["Gestión Interna", "Gestión Clientes"] },
    { key: "Confirmación Comercial", values: ["Ventas"] },
    { key: "Consulta de OFA", values: ["Producción"] },
    { key: "Consulta Técnica", values: ["Pre-Venta", "Ventas"] },
    { key: "Consultar Catálogo Comercial", values: ["Pre-Venta", "Ventas"] },
    { key: "Consultar Documentos", values: ["Ventas", "Facturación"] },
    { key: "Consultar Inventario", values: ["Stock", "Despacho"] },
    { key: "Consultar Material", values: ["Stock", "Despacho"] },
    { key: "Consultar Pedido", values: ["Ventas"] },
    { key: "Cronología", values: ["Gestión Interna"] },
    { key: "Dictaminar Material", values: ["Producción", "Stock"] },
    { key: "Evolución Diaria", values: ["Despacho"] },
    { key: "Flash Comercial", values: ["Gestión Clientes"] },
    { key: "Foto Cliente", values: ["Gestión Clientes"] },
    { key: "From Stock", values: ["Ventas", "Stock"] },
    { key: "Generar Entrega", values: ["Despacho"] },
    { key: "Gestionar Entrega", values: ["Despacho"] },
    { key: "Informe de Visita", values: ["Gestión Clientes"] },
    { key: "Intra", values: ["Gestión Clientes"] },
    { key: "Mis Tareas", values: ["Gestión Interna"] },
    { key: "Modificación Precio Pedidos", values: ["Ventas"] },
    { key: "Modificar Pedido", values: ["Ventas"] },
    { key: "Precio Base + Extras", values: ["Precios", "Gestión Clientes"] },
    { key: "Precio Especifico", values: ["Precios", "Gestión Clientes"] },
    { key: "Resolución de Reclamos", values: ["Pos-Venta"] },
    { key: "Restricciones Logísticas", values: ["Gestión Clientes", "Despacho"] },
    { key: "Seguimiento Solicitudes", values: ["Gestión Interna"] },
    { key: "Situación de Redes", values: ["Pre-Venta", "Stock"] },
    { key: "Solicitudes Catálogo Comercial", values: ["Pre-Venta", "Gestión Clientes"] },
    { key: "TRO", values: ["Gestión Clientes", "Stock"] },
    { key: "TRR", values: ["Gestión Clientes", "Stock"] },
    { key: "Ternium Activo", values: ["Gestión Clientes", "Gestión Interna", "Despacho", "Stock"] },
    { key: "WorkFlow", values: ["Gestión Interna"] }
];
