// --- SUB-INTERFACES (Atomic Design) ---

export interface Marca {
  nombre?: string;
  url_logo?: string;
  sitio_web?: string;
}

export interface Direccion {
  pais?: string;
  calle?: string;
  comuna?: string;
  region?: string;
  sector?: string;
  provincia?: string;
  movil?: string; // Link a Waze/Maps
}

export interface Ubicacion {
  type?: 'Point';
  coordinates?: number[]; // [Longitud, Latitud]
  direccion?: Direccion;
}

export interface Valoracion {
  promedio?: number;
  cantidad_votos?: number;
}

// --- Interfaces de "Flags" (Booleanos) ---

export interface CategoriasNegocios {
  tostaduria?: boolean;
  pasteleria?: boolean;
  chocolateria?: boolean;
  panaderia?: boolean;
  heladeria?: boolean;
  restaurant?: boolean;
  bar?: boolean;
  cafeteria?: boolean;
}

export interface Infraestructura {
  wifi?: boolean;
  terraza?: boolean;
  calefaccion?: boolean;
  enchufes?: boolean;
  estacionamiento?: boolean;
  zona_fumadores?: boolean;
  aire_acondicionado?: boolean;
  ascensor?: boolean;
  zona_niños?: boolean;
  juegos_mesa?: boolean;
  espacio_cowork?: boolean;
  zona_mascotas?: boolean;
}

export interface Servicios {
  musica_en_vivo?: boolean;
  bingo?: boolean;
  reservas?: boolean;
  programa_fidelidad?: boolean;
  expo_arte?: boolean;
  invernadero?: boolean;
  suscripcion_cafe?: boolean;
  tienda_de_regalos?: boolean;
  clases_barismo?: boolean;
  catering?: boolean;
  catas_cafe?: boolean;
  drive_thru?: boolean;
  intercambio_libros?: boolean;
  delivery?: boolean;
  take_away?: boolean;
  reserva_local?: boolean;
}

export interface CaracteristicasAlimenticias {
  opcion_vegana?: boolean;
  opcion_veganista?: boolean;
  opcion_vegetariano?: boolean;
  opcion_keto?: boolean;
  opcion_baja_en_calorias?: boolean;
  opcion_descafeinado?: boolean;
  opcion_organico?: boolean;
  opcion_sin_azucar?: boolean;
  opcion_sin_lactosa?: boolean;
  opcion_gluten_free?: boolean;
}

export interface CategoriasSostenibilidad {
  comercio_justo?: boolean;
  cafe_de_especialidad?: boolean;
  productos_locales?: boolean;
  envases_biodegradables?: boolean;
  sostenibilidad?: boolean;
  kosher?: boolean;
  halal?: boolean;
}

// --- Interfaces de Listas Complejas ---

export interface Evento {
  nombre: string; // En eventos se llama "nombre"
  fecha: string;
  hora: string;
  duracion: string;
  descripcion: string;
  foto: string;
}

export interface Anuncio {
  titulo: string; // ⚠️ CORRECCIÓN: En anuncios se llama "titulo", no "nombre"
  fecha: string;
  hora: string;
  duracion: string;
  descripcion: string;
  foto: string;
}

export interface Barista {
  nombre: string;
  redsocial: string;
  foto: string;
  descripcion: string;
}

export interface Horario {
  dia: string;
  apertura: string;
  cierre: string;
}

export interface Contacto {
  mail?: string;
  telefono?: string;
}

export interface RedSocial {
  nombre: string; // "Instagram"
  redsocial: string; // URL
}

// --- INTERFAZ PRINCIPAL (ROOT) ---

export interface CoffeeShop {
  _id?: string;        // ID de Mongo
  id?: string;         // ID lógico opcional
  
  nombre: string;
  slug?: string;
  activo?: boolean;
  descripcion?: string;

  marca?: Marca;
  imagenes?: string[];
  valoracion?: Valoracion;
  nivel_precio?: number;
  ubicacion?: Ubicacion;

  // Objetos de Características (Opcionales para evitar errores si faltan)
  categorias_negocios?: CategoriasNegocios;
  infraestructura?: Infraestructura;
  servicios?: Servicios;
  caracteristicas?: CaracteristicasAlimenticias;
  categoriasDelNegocio?: CategoriasSostenibilidad;

  // Listas
  marcas?: string[]; 
  
  eventos?: Evento[];
  anuncios?: Anuncio[]; // Ahora usa la interfaz correcta
  barista?: Barista[];
  horario_atencion?: Horario[];
  
  contacto?: Contacto;
  redsocial?: RedSocial[];
}