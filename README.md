# Ejemplo de gestión de productos usando Typescript y Node

Aplicación que gestiona los productos usando una serie de reglas predefinidas para cada uno. Se utilizó el patrón de diseño "Factory Method", donde se sobreescribe la regla de negocio updatePrice() dependiendo del tipo de producto que se este tratando, ademas de un controlador para definir a que tipo de producto corresponde el objeto enviado, logrando flexibilidad y escalabilidad en la aplicación.

## Instalación

Una vez clonado el repositorio, se debe aplicar

<pre><code>cd test-product-node/
  npm i
</code></pre>

para instalar las dependencias necesarias

## Uso

De acuerdo a lo solicitado, para obtener un reporte de casos de pruebas aplicar

<code>npm run test</code>

y para obtener un reporte de 30 días de los productos entregados

<code>npm run after-30-days</code>

Estos productos se gestionan en el archivo index.ts de la raíz.

Para cualquier pregunta no dudar en contactarme.

