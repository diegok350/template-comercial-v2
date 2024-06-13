import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren, inject } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { AnimationService } from '../../../services/animations/animation.service';


@Component({
  selector: 'app-modal-detail',
  standalone: true,
  imports: [AccordionModule],
  templateUrl: './modal-detail.component.html',
  styleUrl: './modal-detail.component.scss'
})
export class ModalDetailComponent {

  processesList = [
    {
      id: 1,
      process: "Gestión Clientes",
      icon: 'fa-solid fa-users fs-4 text-primary',
      items: [
        { name: "Chat Bot" },
        { name: "Flash Comercial" },
        { name: "Foto Cliente" },
        { name: "Informe de Visita" },
        { name: "Intra" },
        { name: "Precio Base + Extras" },
        { name: "Precio Especifico" },
        { name: "Restricciones Logísticas" },
        { name: "Solicitudes Catálogo Comercial" },
        { name: "TRO" },
        { name: "TRR" },
        { name: "Ternium Activo" }
      ]
    },
    {
      id: 2,
      process: "Pre-Venta",
      icon: 'fa-solid fa-chart-line fs-4 text-primary',
      items: [
        { name: "Catálogo de Producto" },
        { name: "Consulta Técnica" },
        { name: "Consultar Catálogo Comercial" },
        { name: "Situación de Redes" },
        { name: "Solicitudes Catálogo Comercial" }
      ]
    },
    {
      id: 3,
      process: "Precios",
      icon: 'fa-solid fa-dollar-sign fs-4 text-primary',
      items: [
        { name: "Precio Base + Extras" },
        { name: "Precio Especifico" }
      ]
    },
    {
      id: 4,
      process: "Ventas",
      icon: 'fa-solid fa-shopping-cart fs-4 text-primary',
      items: [
        { name: "Balance Reposición" },
        { name: "Cancelar Pedido" },
        { name: "Confirmación Comercial" },
        { name: "Consulta Técnica" },
        { name: "Consultar Catálogo Comercial" },
        { name: "Consultar Documentos" },
        { name: "Consultar Pedido" },
        { name: "From Stock" },
        { name: "Modificación Precio Pedidos" },
        { name: "Modificar Pedido" }
      ]
    },
    {
      id: 5,
      process: "Producción",
      icon: 'fa-solid fa-industry fs-4 text-primary',
      items: [
        { name: "Consulta de OFA" },
        { name: "Dictaminar Material" }
      ]
    },
    {
      id: 6,
      process: "Stock",
      icon: 'fa-solid fa-boxes fs-4 text-primary',
      items: [
        { name: "Consultar Inventario" },
        { name: "Consultar Material" },
        { name: "Dictaminar Material" },
        { name: "From Stock" },
        { name: "Situación de Redes" },
        { name: "TRO" },
        { name: "TRR" },
        { name: "Ternium Activo" }
      ]
    },
    {
      id: 7,
      process: "Despacho",
      icon: 'fa-solid fa-truck fs-4 text-primary',
      items: [
        { name: "Consultar Inventario" },
        { name: "Consultar Material" },
        { name: "Evolución Diaria" },
        { name: "Generar Entrega" },
        { name: "Gestionar Entrega" },
        { name: "Restricciones Logísticas" },
        { name: "Ternium Activo" }
      ]
    },
    {
      id: 8,
      process: "Facturación",
      icon: 'fa-solid fa-file-invoice-dollar fs-4 text-primary',
      items: [
        { name: "Consultar Documentos" }
      ]
    },
    {
      id: 9,
      process: "Gestión Interna",
      icon: 'fa-solid fa-cogs fs-4 text-primary',
      items: [
        { name: "Chat Bot" },
        { name: "Cronología" },
        { name: "Mis Tareas" },
        { name: "Seguimiento Solicitudes" },
        { name: "Ternium Activo" },
        { name: "Workflow" }
      ]
    },
    {
      id: 10,
      process: "Pos-Venta",
      icon: 'fa-solid fa-handshake fs-4 text-primary',
      items: [
        { name: "Alta Reclamo" },
        { name: "Resolución de Reclamos" }
      ]
    }
  ];

}
