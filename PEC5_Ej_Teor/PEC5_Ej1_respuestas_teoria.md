# Ejercicio 1 – Preguntas teóricas sobre formularios Angular
### a. ¿Cuáles son las principales diferencias entre formularios dirigidos por template y formularios reactivos?
    - Las diferencias son obvias entre estos dos tipos de formularios, si necesitas simpleza en los formularios y una implementacion mas rapida, la opcion de formularios dirigidos por templates son la mejor opcion
        pero en cambio si quiere mas control sobre el formulario, hacer validaciones, control sobre la logica, los reactivos son mas apropiados.
    - Los formularios reactivos te dan una escalabilidad mejor, ya que tiene mayor flexibilidad para los cambios y aumentar sus funcionalidades.

### b. ¿Qué son, para qué sirven y cómo se utilizan las directivas ngModel y
ngModelChange?
    - La directiva ngModel, es una directiva que se utiliza para crear una comunicacion bidireccional entre formulario del template y el componente, con la prop de el formulario y la prop del componente.
    ```
    <input [(ngModel)]="nombre" />
    ```
    - La directiva de ngModelChange, es una directiva que se utiliza para detectar cambios en el valor de el template, esto quiere decir que se ejecutara una funcion que podremos ver el valor que ha cambiado en el componente.
        ```
        <input [(ngModule)]="nombre" (ngModuleChange)="onNombreChange($event)" />
        onNombreChange(nuevoValor: string) {
            console.log(nuevoValor);
        }
        ```
### c. ¿Qué son, cuáles son y para qué sirven los estados en los formularios dirigidos
por templates?
    - Pristine: El formulario o control está en su estado original, sin modificaciones. Y esto se aplica a todo  el formulario (form.pristine , control.pristine);

    - Touched: El usuario ha interactuado con el control o el formulario. Ayuda a realizar validaciones de visualización y determinar si mostrar un mensaje de error. (form.touched, control.touched);

    - Dirty: El valor de el formulario o del control a cambiado de su estado original. Se utiliza para hacer validaciones cuando los valores cambian (form.dirty , control.dirty);

    - Invalid: El formulario o el control no coinciden con las reglas de validacion de el formulario o del control. No se presentan los datos hasta que se corrigan los errores. (form.invalid , form.invalid);

    - Valid: El formulario o el control coinciden con las reglas de validacion. Se utiliza para mandar los datos a otras partes de la aplicacion. (form.valid, control.valid);

    - Errors: Un objeto que contiene errores de validación asociados con el control o formulario. Se utiliza para acceder a errores especificos en la validacion. (control.errors);

### b. ¿Qué ventajas aportan los FormGroup en la composición de formularios?
    - Proporciona una forma de organizar y gestionar varios controles relacionados en un formulario.
        -  Proporciona métodos y propiedades para gestionar los valores y el estado del grupo de controles. Puedes obtener y establecer valores, así como comprobar el estado de validación del grupo.
        - Mediante el FormGroup puedes reaccionar a eventos como cambios en los valores o cambios en el estado de la validacion.
        - Facilita el acceso a los valores de los campos del formulario.
        - Se integra bien con el FormControl, puedes tener formularios dentro de formularios.