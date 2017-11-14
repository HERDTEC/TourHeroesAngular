# [TutorialSuperHeroe](https://angular.io/tutorial)
## Introduccion
El tutorial Tour de Hereo cubre los fundamentos de Angular. En este tutorial construiras una app que ayudara a una agencia de personal a administrar su establo de heroes.

Esta aplicacion basica tiene muchas de las caracteristicas que esperarias encontrar en un aplicacion basada en datos. Adquiere y muestra una lista de heroes, edita los detalles de un heroe y navega entre diferentes vista de datos heroicos.

AL final de este tutorial seras capaz de hacer lo siguiente:

1. Usar al directivas angular incorporadas para mostrar y ocultar elementos y desplegar una lista de datos de heroes.

2. Crear componentes angular para deplegar los detalle del heroe y mostrar un serie de heroes.

3. Usar un enlace de datos de una via (ONE-WAY BINDING), para datos de solo lectura.

4. Vincular metodos de componentes a eventos de usuario, tales como pulsaciones de teclas y clicks.

5. Permitir que usuarios seleccionen un heroe de una lista maestra y pueda editarlo en la vista de detalles.

6. Formatear datos con tuberias.

7. Crear  un servicio compartido para construir los heroes

8. Usar enrutamiento para navegar entre diferentes vistas y sus componentes.

Aprenderas lo suficiente de angular par comenzar y tendra la confianza de que angular puede hacer cualquier cosa que necesites hacer.

Despues de completar todo los pasos del tutorial, la aplicacion final se mirar como este ejemplo

#### Que construiras?
Aqui una idea visual de a donde conduce este tutorial, comenzando con la vista del Dashboard y los heroes mas heroicos.
![Dashboard](https://angular.io/generated/images/guide/toh/heroes-dashboard-1.png)

Puedes hacer click en los dos enlaces sobre el Dashboard y Heroes para navegar entre esta vista de Dashboard y una vista de Heroes.

Si haces click en el heroe Magneta, el routes abre la vista de los detalles del heroe donde usted puede cambiar el nombre del heroe.

![Detalles del Heroe](https://angular.io/generated/images/guide/toh/hero-details-1.png)

Al hacer click en el boton Back regresara al Dashboard.  Los enlaces en la parte superior te llevan a cualquier de las vistas principales. Si tu haces click en Heroes, la app desplegara la vista de la lista maestra de heroes.

![Lista Maestra de Heroes](https://angular.io/generated/images/guide/toh/heroes-list-2.png)

Cuando haces click en un nombre de heroe diferente, el mini detalle de solo lectura debajo de la lita refleja la nueva seleccion.

Usted puede hacer click en el botton "View Details" para explorar en los detalles editables de el heroe seleccionado.

El siguiente diagrama captura todas las opciones de navegacion.

![Diagrama de navegacion](https://angular.io/generated/images/guide/toh/nav-diagram.png)


Aqui esta la aplicacion en accion.

![Aplicacion](https://angular.io/generated/images/guide/toh/toh-anim.gif)

## Application Shell

### Instalar el Angular CLI
npm install -g @angular/cli

### Crear la aplicacion 
ng new TUTORIALSUPERHEROE

### Levantar la aplicacion
Ir a la carpeta de le proyecto y lanzar la aplicacion.
```
cd TUTORIALSUPERHEROE
ng serve --open
```
> El comando `ng serve` construye la aplicacion, inicia el servidor de desarrollo, mira el codigo fuente, y reconstruye la aplicacion a medidad que realizamos cambios en esos archivos.
La bandera `--open`, abre un browser con la url `http://localhost:4200/`.

Usted deberia ver la aplicacion corriendo en tu navegador.

### Componentes Angular

La pagina que ves es la application shell. El shel esta controlado por un componente de Angular llamado `AppComponent`.

Los componentes son los bloques de construccion fundamentales en las aplicaciones Angular. Muestran datos en la pantalla, escucha las entradas del usuario, y toman acciones basadas en esas entradas.

### Cambiar el titulo de la aplicacion.

Abra el proyecto en su editor favorito o IDE y navege a la carpeta `src/app`.

Encontraras la implementacion de el shell `AppComponent` organizado en tres archivos:

1. app.component.ts-- el codigo de la clase del componente escrito en TypeScript.

2. app.component.html—- el template del componente escrito en HTML.

3. app.component.css-- los estilos css privados del componente.

Abre el archivo de la clase del componente `app.component.ts` y cambia el valor de la propiedad titulo a 'Tour of heroes'.

*app.component.ts (Propiedad title de la clase)*
___
```typescript
title = 'Tour of Heroes';
```

Abre el archivo template del componente ( app.component.html ) y elimina el template por generado por defecto por el Angular CLI. Remplazalo con la siguiente linea de HTML.


*app.component.html (template)*
___
```html
<h1>{{title}}</h1>
```

Las llaves dobles son la sintaxis de binding interpolation. Este binding interpolation presenta el valor de la propiedad title del componente dentro del tag HTML `header`.

### Agregar estilos a la aplicacion.

La mayoria de aplicaciones se efuerzan por obtener un aspecto consistente en toda la aplicacion.
CLI genera un archivo style.css vacio para este proposito. Coloca alli sus estilos para la aplicacion.

Aquí hay un extracto de styles.css para la aplicación.

src/styles.css 
___
```css
/* Application-wide Styles */
h1 {
  color: #369;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 250%;
}
h2, h3 {
  color: #444;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
}
body {
  margin: 2em;
}
body, input[text], button {
  color: #888;
  font-family: Cambria, Georgia;
}
/* everywhere else */
* {
  font-family: Arial, Helvetica, sans-serif;
}
```




