# 💈 CorteFlow - Prompt de Generación de App

## 1. El Qué (Estructura)

Actúa como un desarrollador fullstack experto y crea una aplicación web funcional llamada **"CorteFlow"** para la gestión de turnos de una peluquería moderna.

El objetivo es generar una app completa que pueda ejecutarse directamente en el navegador **sin configuraciones adicionales**.

### 🧩 Página de inicio
La app debe incluir una página principal profesional que muestre tres servicios:

- ✂️ **Corte Clásico** — ARS 10.000  
- 🧔 **Barba y Pelo** — ARS 15.000  
- 💎 **Tratamiento Premium** — ARS 20.000  

Cada servicio debe incluir un botón claro de:  
👉 **"Reservar"**

---

## 2. La Cara (Diseño) — UI/UX

### 🎨 Estética general
- Estilo minimalista tipo Google
- Fondo blanco
- Detalles en azul
- Sombras suaves
- Bordes redondeados

### 📱 Experiencia de usuario
- 100% responsive (**mobile-first**)
- Botones grandes y accesibles
- Feedback visual:
  - Hover
  - Estados de loading
  - Mensajes al usuario

### 🧾 Servicios en la UI
Cada servicio debe:
- Mostrarse claramente
- Incluir precio visible
- Tener un botón destacado de **"Reservar"**

---

## 3. El Cerebro (Lógica) — Sistema de Turnos

### 🧠 Flujo de reserva
Al hacer clic en **"Reservar"**:
- Abrir un modal o formulario dinámico

### 📋 Campos del formulario
- Nombre  
  - Requerido  
  - Mínimo 3 caracteres  
- Teléfono  
  - Requerido  
  - Formato válido  
- Servicio  
  - Preseleccionado automáticamente  
- Fecha  
- Hora  

---

## ✅ Validaciones obligatorias

- ❌ No permitir turnos en el pasado  
- 📅 Solo permitir días **lunes a viernes**  
- 🕒 Horario permitido: **10:00 a 19:00**  
- ⏱️ Intervalos de 30 minutos:  
  - `:00`  
  - `:30`  
- 🚫 No permitir doble reserva en el mismo día y hora  
- ✔️ Validar que todos los campos estén completos  

---

## 🚀 Entrega final

Cuando termines de construir la aplicación:

👉 **Compilar la aplicación y dejarla lista para ejecución directa en el navegador**
