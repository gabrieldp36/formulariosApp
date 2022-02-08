# Formularios App.

Esta aplicación permite observar la utilización de formularios reactivos y por temple en Angular.

En la misma se han implementado validaciones síncronas para el control de la información ingresada en los campos. 

Por ejemplo, que el nombre ingresado de la persona tenga formato de nombre y apellido, o que su correo presente un formato válido, o que la contraseña tenga cierta estructura, debiendo ser ingresada dos veces para cotejar su igualdad, o el rellenado de campos obligatorios, entre otras validaciones.

También se implementan validaciones asíncronas, por ejemplo para cotejar que el correo ingresado no haya sido previamente registrado por otro usuario.

En resumen, la aplicación muestra formularios básicos, dinámicos, switches y un formulario de registro.

### Notas:

Este proyecto fue generado con [Angular CLI] versión 13.0.2.

Recuerden reconstruir los módulos de Node:

```
npm install
```

Y luego, para probar la app en desarrollo, ejecuten el siguiente comando:

```
ng serve -o
```

Para construir el build, recuerden:

```
ng build --configuration=production
```
