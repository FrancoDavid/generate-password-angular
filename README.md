# 🔐 generate-password-angular

Generador de contraseñas robustas creado con **Angular**, útil para practicar componentes, servicios, bindings y lógica algorítmica.

---

## 🧭 Tabla de contenidos

* [Características](#-características)
* [Requisitos](#️-requisitos)
* [Instalación](#-instalación)
* [Uso](#-uso)
* [Lógica de generación](#-lógica-de-generación)
* [Arquitectura & Estilo](#-arquitectura--estilo)
* [Mejoras sugeridas](#-mejoras-sugeridas)
* [Contribuciones](#-contribuciones)
* [Licencia](#-licencia)

---

## 🚀 Características

* Genera contraseñas seguras con opciones de longitud, mayúsculas, números y símbolos.
* Copia al portapapeles con un clic.
* Indicador de fuerza visual o textual (opcional).
* Interfaz sencilla, usable y responsiva. ([github.com][1], [github.com][2])

---

## ⚙️ Requisitos

* Node.js ≥ 14
* Angular CLI instalada globalmente (`npm i -g @angular/cli`)

---

## 📦 Instalación

```bash
git clone https://github.com/FrancoDavid/generate-password-angular.git
cd generate-password-angular
npm install
```

---

## 🚚 Uso

```bash
ng serve
```

Luego abre `http://localhost:4200`.

Interfaz típica:

* Selector deslizante para longitud.
* Checkboxes para incluir mayúsculas, números y símbolos.
* Botón “Generar” que crea la contraseña.
* Botón “Copiar” para copiar al portapapeles.

---

## 🧠 Lógica de generación

Implementa dos columnas clave:

1. **Algoritmo de generación**: arma un array `availableChars` uniendo subconjuntos (mayúsculas, minúsculas, números y símbolos), y recorre para tomar caracteres aleatorios ([jasonwatmore.com][3]).
2. **Validación / Fuerza**: calcula fuerza según variedad de tipos de caracteres; podría mostrarse mediante barra o texto.

---

## 🏗️ Arquitectura & Estilo

* **Componentes**:

  * `PasswordGeneratorComponent`: genera y muestra la contraseña.
  * `LengthSliderComponent`: elige la longitud.
  * `OptionsCheckboxComponent`: controla las opciones de caracteres.
  * `StrengthIndicatorComponent` (opcional): muestra nivel de seguridad.
* **Services**:

  * `PasswordService`: lógica central de construcción de contraseña.
  * `ClipboardService`: maneja compatibilidad con copiar al portapapeles.
* **Bindings Angular**:

  * `(click)`, `[ngModel]`, `@Input()` y `@Output()` para interacción fluida. ([github.com][1])
* **Estilo**: minimalista, con Bulma o Tailwind (CSS modular según preferencia).

---

## 🔧 Mejoras sugeridas

* Indicador de fuerza más avanzado o integración con material angular.
* Validación visual si faltan tipos de caracteres.
* Persistencia en `localStorage`.
* Tests unitarios con Jasmine y Karma.
* Localizador de caracteres excluidos, símbolos adicionales.
* Despliegue en GitHub Pages o Vercel.

---

## 🤝 Contribuciones

Si te interesa mejorar este proyecto:

1. Haz **fork** del repo.
2. Crea una rama: `feature/nueva-funcionalidad`.
3. Añade tu función con commits descriptivos.
4. Abre un PR explicando tu aporte.

---

## ⚖️ Licencia

Distribuido bajo licencia **MIT** — revisa `LICENSE` para más detalles.
