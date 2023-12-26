# Ejercicio 4

### a. ¿Qué son, para qué sirven y cómo se utilizan FormControl, FormGroup y
FormBuilder?
    - FormControl: Representa un campo de entrada de el formulario de texto, almacena el valor actual del control y proporciona funciones y eventos para poder
    interactuar con el.
    ```
    const myControl = new FormControl('valorInicial');
    ```

    - FormGroup: El FormGroup agrupa varios FormControl en un formulario y permite gestionar y validar un conjunto de FormControls como una unidad.
    ```
    const myForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl('')
    });
    ```

    - FormBuilder: Sirve para crear instacias de FormControl, FormGroup y FormArray. Simplifica la construccion de formularios.
    ```
    const formBuilder = new FormBuilder();
    const myFormGroup = formBuilder.group({
        username: [''],
        passowrd: ['']
    });
    ```

### b. Busca en la página oficial de Angular (o utiliza un recurso de O’Reilly) en el que se especifiquen todos los validadores que incluye Angular para ser utilizados en los formularios reactivos. Construye una tabla de resumen de estos.
| Validador  | Descripción                            |
|----------  | -------------                          |
| required   | Es un campo que es obligatorio         |
| minLength  | Comprueba si el valor tiene al menos N caracteres |
| maxLength  | Comprueba si el valor tiene como máximo N caracteres |
| patter     | Son campos que solo permiten una expresion regular determinada |
| min        | Establece el valor minimo de numeros |
| max        | Establece el valor maximo de numeros |
| Validador personalizado | Son validadores personalizados |


#### c. ¿Qué son, cuáles son y para qué sirven los estados en los formularios reactivos?
    - Pristine: Se considera pristine cuando no se ha tocado nada del formulario, sirve para determinar si se debe mostrar retroalimentacion visual antes de que el usuario interactue con el formulario.
    - Dirty: Se considera dirty cuando el usuario ha tocado o modificado el formulario, sirve para activar ciertas lógicas o validaciones solo después de que el usuario haya interactuado con el formulario.
    - Touched: Se considera Touched cuando el usuario a tocado o enfocado el control, sirve para mostrar mensajes de error luego que el usuario haya tocado el formulario.
    - Untouched: Se considera Untouched si el usuario no ha tocado o enfocado el control, sirve para acciones específicas solo si el usuario ha interactuado con el formulario.
    - Valid: Se considera Valid si cumple con todas la validaciones del formulario, sirve para mostrar mensajes de exito si se cumple valid.
    - Invalid: Se considera Invalid si no se cumple al menos una validacion en el formulario, sirve para mostrar mensajes de error si no lo cumple.
    - Pending: Se considera pending si esta esperando a un resultado de asincronia de validacion, esto puede servir para mostrar spinners, manejar validaciones asincrónicas o realizar acciones específicas mientras se espera una respuesta
