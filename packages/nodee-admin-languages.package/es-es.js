module.exports = {
    
    /*
     * Common (menu, genral ui, etc...), loaded on all admin screens include login, register
     */
    common:{
        
        // common phrases
        'Remove':'Eliminar',
        'Close':'Cerrar',
        'Reset':'Reiniciar',
        'Cancel':'Cancelar',
        'Delete':'Borrar',
        'Create':'Crear',
        'Update':'Actualizar',
        'Reload':'Recargar',
        'Required':'Obligatorio',
        'Default':'Defecto',
        'default':'defecto',
        
        // forms and validation messages, e.g. "Value of "Name" have to be: Text"
        'Validation Failed':'Validación erronea',
        'Value of':'Valor de',
        'have to be':'Tiene que ser',
        'required':'obligatorio',
        'isInteger': 'Número',
        'isString': 'Texto',
        'isArray': 'Lista de valores',
        'isBoolean': 'Verdadero o Falso',
        'minLength': 'Valor con longitud Min.',
        'maxLength': 'Valor con longitud Max.',
        'isIn': 'En Lista de Valores',
        'parseDate': 'Fecha',
        'toDate': 'Fecha',
        'date': 'Fecha',
        'toDateString': 'Fecha',
        'round': 'Número',
        'validate': 'Válido',
        'keyNames': 'Válido',
        'keys': 'Válido',
        'equals': 'es Válido',
        'contains': 'es Válido',
        'matches': 'Válido',
        'isEmail': 'Email',
        'isURL': 'URL',
        'isFQDN': 'FQDN',
        'isIP': 'Dirección IP',
        'isAlpha': 'Letras (a-zA-Z) solo',
        'isNumeric': 'Número',
        'isAlphanumeric': 'Alfanumérico',
        'isBase64': 'Base64',
        'isHexadecimal': 'Hexadecimal',
        'isHexColor': 'Hex Color',
        'isLowercase': 'solo Minúsculas',
        'isUppercase': 'solo Mayúsculas',
        'isInt': 'Número',
        'isFloat': 'Número',
        'isDivisibleBy': 'Válido',
        'isLength': 'Válido',
        'isByteLength': 'Válido',
        'isUUID': 'UUID',
        'isDate': 'Fecha',
        'isAfter': 'Después',
        'isBefore': 'Antes',
        'isCreditCard': 'Tarjeta de Crédito',
        'isISBN': 'ISBN',
        'isJSON': 'JSON',
        'isMultibyte': 'Multibyte',
        'isAscii': 'Caracteres ASCII solo',
        'isFullWidth': 'Válido',
        'isHalfWidth': 'Válido',
        'isVariableWidth': 'Válido',
        'isSurrogatePair': 'Sustituto Par',

        // default menu items
        'My Account': 'Mi Cuenta',
        'Profile':'Perfil',
        'Change Password': 'Cambiar Contraseña',
        'Logout': 'Salir',
        'Application Configuration':'Configuración de la Aplicación',
        'Toogle Menu Position':'Cambiar posición del menú',
        'User Management':'Gestor de usuario',

        // grid
        'page':'página',
        'of':'de',
        'items':'Elementos',

        // notifications
        'Loading...':'Cargando...',

        // query
        $equal:'=',
        $lt:'<',
        $lte:'<=',
        $gt:'>',
        $gte:'>=',
        $regex_exact:'coincidencia exacta',
        $regex_contains:'contiene',
        $regex_begins:'comienza con',
        $regex_ends:'termina con',
        $in:'está en la lista',
        $ne:'no es',
        $regex_ncontains:'no contiene',
        $regex_nbegins:'no comienza con',
        $regex_nends:'no termina con',
        $nin:'no está en la lista',
        $regex:'expresión regular',
        $size:'tamaño',
        $exists:'existuje',
        $and:'a',
        $or:'o',
        OR:'O',
        AND:'Y',
        choose:'(seleccionar)',
        qtype_short_number:'0-9',
        qtype_short_date:'2014',
        qtype_short_boolean:'S/N',
        qtype_short_string:'A-Z',
        qtype_short_array:'[A]',
        qtype_short_object:'{O}',
        qtype_number:'Número',
        qtype_date:'Fecha',
        qtype_boolean:'Lógica si/no',
        qtype_string:'Texto',
        qtype_array:'Array',
        qtype_object:'Objeto',
        qvalue_true:'Verdadero',
        qvalue_false:'Falso',
        Search:'Buscar',
        
        // login
        'your@email.com':'tu@email.es',
        'password':'Contraseña',
        'Wrong Email or Password':'Usuario o contraseña incorrectas',
        'Log in':'Iniciar sesión',
        'Register':'Registro',
        'Forgot Password':'Olvidé mi contraseña',
        
        // register
        'Registration Successful':'Registro completado',
        'Now, contact your administrator to setup account access permissions, please.':'Ahora, contacta con tu administrador para configurar los permisos de acceso, porfavor',
        'This email is used by another user, please enter different':'Este email está siendo utilizado, porfavor usa uno diferente',
        'new password (min. 5 letters)':'TRANSLATE',
        'password (min. 5 letters)':'TRANSLATE',
        'repeat new password (min. 5 letters)':'repite la nueva contraseña (min. 5 caracteres)',
        
        // forgot password
        'Your Registered Email':'Tu email registrado',
        'Send Password':'Enviar Contraseña',
        'Generate New Password':'Generar nueva contraseña',
        'New password was sent to your email':'La nueva contraseña ha sido enviada a tu email',

        // forgot password email
        'Dear User':'Estimado Usuario',
        'Your password was changed to':'Tu contraseña ha sido cambiada a:',
        'We strongly recommend to change your password after login':'Recomendamos encarecidamente cambiar tu contraseña despues de iniciar sesión',
        'Thank you':'Gracias',
        
        // response error notifications
        'Access Denied':'Acceso denegado', 
        'Try logout and login again, or contact administrator':'Intenta volver a iniciar sesión o contacta con tu administrador',
        'Document or his version not found':'El documento o su versión no ha sido encontrado',
        'Try refresh page, please':'Intenta refrescar la página (F5), porfavor',
        'Undocumented server error':'Error de servidor no documentado',
        'Contact your administrator, please':'Contacta con tu administrador, porfavor',
        'Connection Failed':'Conexión fallida', 
        'Try later, please':'Inténtalo mas tarde, porfavor'
    },

    
    /*
     * Intro
     */
    '/intro':{
        'Presently Works in Browsers':'Actualmente Funciona en navegadores',
        'Presently Works on Devices':'Actualmente funciona en dispositivos'
    },
    
    /*
     * Config
     */
    '/config':{
        'Name & Details':'Nombre y Detalles',
        'Description':'Descripción',
        'Language':'Idioma',
        'Administration Area Language Settings':'Área de administración de la configuración del idioma',
        'Default Language':'Idioma por defecto',
        'Mailers':'Remitentes',
        'Outgoing Mail Servers':'Servidores de salida de emails',
        'Host':'Servidor',
        'Port':'Puerto',
        'From Email':'Desde Email',
        'From Name':'Desde Nombre',
        'Secure':'Seguro',
        'User':'Usuario',
        'user':'usuario',
        'Password':'Contraseña',
        'password':'contraseña',
        'Timeout in ms':'Tiempo de salida en ms.',
        'unique mailer ID':'ID único de remitente',
        'Add Mailer':'Añadir remitente',
        'Save Changes':'Guardar Cambios',
        'smtp.yourserver.com':'smtp.servidor.es',
        'from@email.com':'desde@email.es',
        'company name':'Nombre de la empresa',
        'Configuration Updated':'Configuración Actualizada',
    },
    
    /*
     * Change Password
     */
    '/account/changepass':{
        'Change Your Password':'Cambiar tu contraseña',
        'Change':'Cambiar',
        'Old Password':'Contraseña Anterior',
        'New Password':'Contraseña Nueva',
        'Repeat New Password':'Repetir Nueva Contraseña',
        'old password':'contraseña anterior',
        'new password':'contraseña nueva',
        'repeat new password':'repetir nueva contraseña',
        'Password Changed':'contraseña cambiada'
    },
    
    /*
     * Profile
     */
    '/account/profile':{
        'Your User Profile':'Tu perfil de usuario',
        'Profile Updated':'Perfil actualizado',
        'Profile':'Perfil',
        'Nick Name':'Nombre de usuario',
        'First Name':'Nombre',
        'Last Name':'Apellidos',
        'Language':'Idioma',
    },
    
    /*
     * Users
     */
    '/users':{
        // profile
        'Profile':'Perfil',
        'Nick Name':'Nombre de usuario',
        'First Name':'Nombre',
        'Last Name':'Apellidos',
        'Language':'Idioma',
        
        'Create User':'Crear usuario',
        'Email':'Email',
        'email@email.com':'email@email.es',
        'Access':'Acceder',
        'Disabled':'Desactivado',
        'Reset Password':'Resetear contraseña',
        'Roles':'Rol',
        'Details':'Detalles',
        'Security':'Seguridad',
        'ID':'ID',
        'API Key':'API Key',
        'Allowed API IPs':'API IP,s permitidas',
        'Created':'Creado',
        'Last Modified':'Última modificación',
        'Last Login':'Último Login',
        
        'This will permanently remove user, and may cause data integrity malfunction, if there are data associated with user. Are you sure ?':'Esto eliminará el usuario de forma permanente y puede causar fallos en la integridad de los datos, si hay datos asociados a este usuario. ¿Estás seguro?',
        'Remove User':'Eliminar usuario',
        
        // resetpass modal
        'Reset User Password':'Resetear contraseña del usuario',
        'New Password':'Nueva Contraseña',
        'new password':'nueva contraseña',
        'Repeat New Password':'Repetir Nueva Contraseña',
        'repeat new password':'repetir nueva contraseña',
        
        // filter
        'email':'email',
        'roles':'roles',
        'nickname':'usuario',
        'firstname':'nombre',
        'lastname':'apellidos',
        'disabled':'desactivado',
        'createdDT':'creado',
        'modifiedDT':'modificado',
        'lastLoginDT':'sesión',
        
        // validations
        'selfDisable':'Not Yours',
        'selfRemove':'Not Yours'
    }
    
};
