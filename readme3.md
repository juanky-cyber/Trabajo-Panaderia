## Mejoras realizadas

En esta actualización he corregido y mejorado todo. También he aprovechado para pulir detalles visuales y de usabilidad para dejarlo lo más profesional posible ademas de añadirle el modo oscuro el cual se ejecuta a traves de theme.js.

##  1. Imágenes unificadas en todas las páginas

Las imágenes del home, panes, postres y cafés ahora tienen el mismo tamaño y proporciones.

Se aplicó object-fit: cover para que no se deformen y queden perfectamente alineadas.

En versión responsive, las imágenes se ajustan para que no generen scroll horizontal.

##  2. Eliminado el “corte de color” del fondo

Había un salto visual entre secciones debido al gradiente.
Ahora, el background es uniforme y contínuo, sin cortes bruscos.
Me habria gustado encontrar un equilibrio adecuado a traves del gradiente pero no he conseguido encontrar algo que me guste y he decidido dejarlo uniforme.

##  3. Footer rediseñado y correctamente integrado

Está dividido en columnas, más ordenado y aprovechando mejor el ancho.

Usa un tono más oscuro para diferenciarse del contenido principal.

Incluye mapa, datos, horario y redes sociales.

Se ajustó la altura del iframe (embed--footer height) para que el footer se vea completo sin scroll.


## 4. Sección “Contáctanos” añadida y mejorada

Antes solo había información en el footer.
Ahora hay una sección visible con:

Mapa

Email

Teléfono

Dirección

Botón de CTA

Diseño dentro de una tarjeta limpia y centrada


## 5. Barra de navegación mejorada en todas las páginas

Logo más grande

Título más visible

Boton de contacto para poder contactar directamente, aunque lo ideal seria ir a una pagina especifica en esta ocasion no he creado la pagina, si lo ves necesario podria crearla sin ningun problema, de esta manera redirige al index, donde se encuentra la tarjeta de contacto.

Botones más claros y con más peso visual

Misma fuente y tamaño en toda la web

## 6. Correcciones de tipografía y coherencia visual

Fuente unificada (Poppins) en páginas donde se había mezclado minúscula-mayúscula.

Títulos ajustados para que tengan el mismo estilo en toda la web.

Precios unificados en negrita y tamaño consistente.

## 7. Ajustes de responsive

En home ya no hay desplazamiento lateral.

En panes, postres y cafés:

Las imágenes se adaptan sin desbordar.

Los productos no se salen hacia la derecha.

Footer visible siempre.

## 8. Animaciones en los botones

Hover con sombra suave

Cambio de color

Transición fluida

Efecto "elevación" al pasar el ratón

## 9. Ajuste del carrito (sumar/restar + botón ADD)

Los botones de sumar, restar y el “ADD” estaban demasiado lejos de la imagen. El problema era que el contenedor se estiraba demasiado hacia los lados. Le puse un max-width y ajusté el flex, y así pude acercarlos sin usar márgenes negativos ni cosas raras. Ahora queda todo más junto y mejor colocado.

## 10. Modo Oscuro/Claro

Se implementó un botón flotante (abajo a la derecha) que permite cambiar entre:

Modo claro (crema, cálido y suave)

Modo oscuro (café intenso y elegante sin degradado, porque rompia todo el rato cortando imagenes y no le he encontrado una solucion que me gustase, asique he decidido mejor quitarlo)

Características:

No rompe el diseño de ninguna página

Cambia todo el fondo, textos, tarjetas y botones

Se mantiene siempre visible en la pantalla

Incluye animación en el icono (sol/luna)

Este modo oscuro encaja perfecto con la temática de panadería: tonos café, marrones, crema y beige.

## 11. Animaciones añadidas al header y al footer

También le metí un poco de vida al header y al footer. Ahora los botones del menú tienen una animación suave al pasar por encima, con un pequeño zoom y una sombra que los hace más “clicables” sin cargar demasiado el diseño. 

## 12. Animación en las tarjetas del inicio

Añadí una animación suave a las tres tarjetas del index (Panes, Postres y Cafés). Al pasar el ratón por encima, la tarjeta sube ligeramente y la imagen hace un zoom muy suave. Esto ayuda a que se note que son elementos interactivos y da una sensación más moderna sin romper nada del estilo general.


## 13. Sección de Contacto enlazada a contacto.html
He hecho que toda la tarjeta de “Contáctanos” del index se pueda pulsar para llevar directamente a la nueva página contacto.html.
Para conseguirlo, envolví el bloque completo dentro de un <a> y añadí una pequeña animación para que se note que es clicable, sin modificar la estética original.

También añadí un efecto hover suave (ligero levantamiento y sombra) para que la interacción se vea más profesional.

Con esto, la sección funciona igual que las demás cards de la página y mantiene el mismo estilo.