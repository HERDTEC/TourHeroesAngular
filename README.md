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

## El edito de heroe

La aplicacion ahora tiene un titulo basico. Proximamente crearemos un nuevo componente para desplegar la informacion del heroe y el lugar de ese componente en la aplication shell.

### Crear el componente heroes 

Usando el Angular CLI, generamos un nuevo componente llamado `heroes`.
```bash
ng generate component heroes
```
CLI creo una nueva carpeta, `src/app/heroes` y genera el arbol de archivos de HeroesComponent.

La class HeroesComponent es como la siguiente

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```
Siempre importa Component de la libreria core Angular y anota la clase de componente con @Component.

@Component es una funcion de decorador que especifica los metadatos Angular para el componente

CLI genero tres propiedades de metadatos:

1. selector— el selector de elemento CSS del componente.

2. templateUrl— la ubicacion del archivo template del componente.

3. styleUrls— la ubicacion de los estilos CSS privados del componente

El selector de elemento CSS, 'app-heroes' empareja el nombre del elemento HTML que identifica a ese componente dentro del template de un componente padre.

 The ngOnInit is a lifecycle hook Angular calls ngOnInit shortly after creating a component. It's a good place to put initialization logic.

ngOnInit es un hook del ciclo de vida Angular el cual llama a ngOnInit poco despues de crear un componente. `Es un buen lugar para poner la logica de inicializacion.`

Exporte siempre la clase del componente para que pueda importarla en otro lugar ... como en el AppModule


### Agrega una propiedad `hero` 

Agregue una propiedad `hero` al `HeroesComponent` con un heroe llamado "Windstorm".

*heroes.component.ts (propiedad hero)*
___
```typescript
hero = 'Windstorm'
```

### Muestra al Heroe
Abre el archivo del template `heroes.component.html`. Elimina el texto por defecto generado por el Angular CLI y remplacelo con un data binding a la nueva propiedad `hero`.

*heroes.component.html*
___
```html
{{hero}}
```

## Muestra la vista HeroesComponent


Para desplegar el HeroesComponent, usted debe agregarlo al template de el shell AppComponent.

Recuerde que `app-heroes` es el selector de elemento para `HeroesComponent`. Asi que agregue un elemeto `<app-heroes>` al archivo del template de AppComponent, justo debajo del titulo.

*src/app/app.component.html*
```html
<h1>{{title}}</h1>
<app-heroes></app-heroes>
```
Asumiendo que el comando CLI `ng serve` esta tambien corriendo, el navegador debera refrescarse y desplegar el titulo y el nombre del heroe en la aplicacion.

## Crear una clase Heroe
Un heroe real es mas que un nombre.

Cree un class Hero en su propio archivo en la carpeta `src/app`. Defina las propiedades id y name.

*src/app/hero.ts*
___
```typescript
export class Hero {
  id: number;
  name: string;
}
```
Regrese a la clase `HeroesComponent` e importe la clase Hero.

Refactorizar la propiedad del héroe del componente para que sea del tipo Héroe. Inicialícelo con un id de 1 y el nombre Windstorm.

El archivo de clase HeroesComponent revisado debería verse así:

*src/app/heroes/heroes.component.ts*
___
```typescript
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}

```
La página ya no se muestra correctamente porque ha cambiado el héroe de una cadena a un objeto.

## Muestra el objeto hero

Actualice el binding en el template que muestra el nombre del heroe y muestra el id y el name en un layout de detalles como este
*heroes.component.html (HeroesComponent's template)*
___
```html
<h2>{{ hero.name }} Details</h2>
<div><span>id: </span>{{hero.id}}</div>
<div><span>name: </span>{{hero.name}}</div>
```
El navegador se refrescara y desplegara la informacion del heroe.

## Formatear con UppercasePipe
Modifique al binding hero.name como este.
```html
<h2>{{ hero.name | uppercase }} Details</h2>
```

## Edite el heroe

Los usuarios deben ser capaces de editar el nombre del heroe en un *<input>* textbox.

El cuadro de texto debe mostrar la propiedad name del heroe y actualizar esa propiedad a medida que el usuario escribe. Eso significa que el flujo de datos de la clase de componente sale la pantalla y de la pantalla a la clase.

Para automatizar ese flujo de datos, configure un two-way databinding entre el elemento <input> del formulario y la propiedad hero.name.

### Two-way binding
Refactorizar el area de detalles en el template de HeroesComponent para que se vea asi:

*src/app/heroes/heroes.component.html (template HeroesComponent)*
___
```html
<div>
    <label>name:
      <input [(ngModel)]="hero.name" placeholder="name">
    </label>
</div>
```
**[(ngModel)]** es la sintaxis para two-way data binding de Angular.

Aqui enlazamos la propiedad hero.name con la caja de texto HTML  para que los datos puedan fluir en ambas direcciones: Desde la propiedad hero.name a la caja de texto, y desde la caja de texto a la propiedad hero.name.


### El FormsModule que falta

<span style="color:red"> 
Note que la aplicacion dejo de funcionar cuando se agrego [(ngModel)]
</span>

Para ver el error, abra las `herramientas de desarrollador del navegador` y busque en la consola por un un mensaje como:
```
Template parse errors:
Can't bind to 'ngModel' since it isn't a known property of 'input'.
````
Aunque ngModel es una directiva angular válida, `no está disponible por defecto`.

Esta pertenece a FormsModule y debe importalo para usarlo.

## AppModule

Angular necesita saber como las piezas de tu aplicacion encajan y que archivos y librerias requier la aplicacion. Esta informacion es llamada metadata.

ALgunos de los metadatos estan en el decorador @Component, el cual usted agrego a la clase de su componente. Otros metadatos crititicos se encuentran en los decoradores @NgModule.

Lo mas importante del decorador  @NgModule esta en el nivel superior de la clase AppModule.

Angular CLI genero una clase AppModule en el path *src/app/app.module.ts* cuando creo el proyecto. Aqui es donde puedes imprta FormModule.

### Importar FormsModule

Abra AppModule ( app.module.ts ) y importe FormsModule de la libreria @angular/forms.

*app.module.ts import*
___
```typescript
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
```

Entonces agregue FormsModule al arrglo de metadatos `imports` de @NgModule, el cual contiene una lista de modulos externos que la aplicacion necesita

*app.module.ts metadata*
___
```typescript
imports: [
  BrowserModule,
  FormsModul
],

```
Cuando el navegador s refresque, la aplicacion debe trabajar nuevamente. Usted Podra editar el nombre del heroe y ver que los cambios se reflejen imediatamente en el <h2> sobre el cuadro de texto


### Declare HeroesComponent

Cada componente debe ser importado en exactamente un NgModule.

No declaraste el HeroeComponent. Entonces por que la aplicacion trabaja?

Esta trabaja por que Angular CLI declaro HeroesComponent en AppModule, cuando generamos el componente.

Abra *src/app/app.module.ts* y encontrara importado HeroesComponent en la parte superior.
```typescript
import { HeroesComponent } from './heroes/heroes.component';
```

HeroesComponent ahora es declarado en el arreglo de declarations del decorador @NgModule.
```typescript
declarations: [
  AppComponent,
  HeroesComponent
]
```
> Note que AppModule declara ambos componentes en la aplicacion AppComponent y HeroesComponent.
