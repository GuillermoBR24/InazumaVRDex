# InazumaVRDex

Aplicación web para gestionar datos del juego Inazuma Eleven Victory Road.

## Estructura del Proyecto

```
InazumaVRDex/
├── backend/          # API REST con Java Spring Boot
├── frontend/         # Aplicación web con Angular
└── README.md
```

## Backend (Java Spring Boot)

- **Framework**: Spring Boot 3.2.0
- **Java**: 17
- **Base de datos**: H2 (en memoria)
- **Puerto**: 8080

### Para ejecutar el backend:

```bash
cd backend
mvn spring-boot:run
```

La API estará disponible en `http://localhost:8080`

## Frontend (Angular)

- **Framework**: Angular 17
- **TypeScript**: 5.2
- **Puerto**: 4200

### Para ejecutar el frontend:

```bash
cd frontend
npm install
npm start
```

La aplicación estará disponible en `http://localhost:4200`

## Características Actuales

- ✅ Pantalla de inicio con diseño moderno
- ✅ Conexión entre frontend y backend
- ✅ Diseño responsive
- ✅ Estructura modular preparada para expansiones

## Próximas Características

- 📋 Gestión de personajes
- 🏆 Gestión de equipos  
- ⚡ Gestión de habilidades
- 📊 Estadísticas y filtros
- 🔍 Sistema de búsqueda

## Tecnologías

### Backend
- Java 17
- Spring Boot 3.2.0
- Spring Data JPA
- H2 Database
- Maven

### Frontend
- Angular 17
- TypeScript
- HTML5/CSS3
- RxJS
- Angular CLI

## Notas

- La aplicación está en fase inicial de desarrollo
- Los errores de TypeScript en el editor son normales hasta instalar las dependencias con `npm install`
- La base de datos H2 se reinicia cada vez que se inicia el backend
