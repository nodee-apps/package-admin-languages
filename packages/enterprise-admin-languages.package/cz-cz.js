module.exports = {
    
    /*
     * Common (menu, genral ui, etc...), loaded on all admin screens include login, register
     */
    common:{
        
        // common phrases
        'Remove':'Odstránit',
        'Close':'Zavřít',
        'Reset':'Změnit',
        'Cancel':'Zrušit',
        'Delete':'Vymazat',
        'Create':'Vytvořit',
        'Update':'Uložit',
        'Reload':'Obnovit',
        'Required':'Povinne',
        'Default':'Predvolene',
        'default':'predvolene',
        
        // forms and validation messages, e.g. "Value of "Name" have to be: Text"
        'Validation Failed':'Validation Failed',
        'Value of':'Value of',
        'have to be':'have to be',
        'required':'required',
        'isInteger': 'Number',
        'isString': 'Text',
        'isArray': 'List of Values',
        'isBoolean': 'True or False',
        'minLength': 'Value with Min. Length',
        'maxLength': 'Value with Max. Length',
        'isIn': 'In List of Values',
        'parseDate': 'Date',
        'toDate': 'Date',
        'date': 'Date',
        'toDateString': 'Date',
        'round': 'Number',
        'validate': 'Valid',
        'keyNames': 'Valid',
        'keys': 'Valid',
        'equals': 'is Valid',
        'contains': 'is Valid',
        'matches': 'Valid',
        'isEmail': 'Email',
        'isURL': 'URL',
        'isFQDN': 'FQDN',
        'isIP': 'IP address',
        'isAlpha': 'Letters (a-zA-Z) only',
        'isNumeric': 'Number',
        'isAlphanumeric': 'Alphanumeric',
        'isBase64': 'Base64',
        'isHexadecimal': 'Hexadecimal',
        'isHexColor': 'Hex Color',
        'isLowercase': 'Lowercase only',
        'isUppercase': 'Uppercase only',
        'isInt': 'Number',
        'isFloat': 'Number',
        'isDivisibleBy': 'Valid',
        'isLength': 'Valid',
        'isByteLength': 'Valid',
        'isUUID': 'UUID',
        'isDate': 'Date',
        'isAfter': 'Later',
        'isBefore': 'Sooner',
        'isCreditCard': 'Credit Card',
        'isISBN': 'ISBN',
        'isJSON': 'JSON',
        'isMultibyte': 'Multibyte',
        'isAscii': 'ASCII chars only',
        'isFullWidth': 'Valid',
        'isHalfWidth': 'Valid',
        'isVariableWidth': 'Valid',
        'isSurrogatePair': 'Surrogate Pair',

        // default menu items
        'My Account': 'Můj Účet',
        'Profile':'Profil',
        'Change Password': 'Změnit Heslo',
        'Logout': 'Odhlásit se',
        'Application Configuration':'Konfiguracie Aplikace',
        'Toogle Menu Position':'Přepnout Pozici Menu',
        'User Management':'Manažment Uživatelů',

        // grid
        'page':'stránka',
        'of':'z',
        'items':'položek',

        // notifications
        'Loading...':'Nacitava se...',

        // query
        $equal:'=',
        $lt:'&lt;',
        $lte:'&lt;=',
        $gt:'&gt;',
        $gte:'&gt;=',
        $regex_exact:'přesná shoda',
        $regex_contains:'obsahuje',
        $regex_begins:'začína s',
        $regex_ends:'končí s',
        $in:'je v zoznamu',
        $ne:'není',
        $regex_ncontains:'neobsahuje',
        $regex_nbegins:'nezačína s',
        $regex_nends:'nekončí s',
        $nin:'není v zoznamu',
        $regex:'vlastný regex',
        $size:'velikost pole',
        $exists:'existuje',
        $and:'a',
        $or:'nebo',
        OR:'NEBO',
        AND:'A',
        choose:'(vyberte)',
        qtype_short_number:'0-9',
        qtype_short_date:'2014',
        qtype_short_boolean:'Á/N',
        qtype_short_string:'A-Z',
        qtype_short_array:'[A]',
        qtype_short_object:'{O}',
        qtype_number:'Číslo',
        qtype_date:'Dátum',
        qtype_boolean:'Logické áno/ne',
        qtype_string:'Text',
        qtype_array:'Pole',
        qtype_object:'Objekt',
        qvalue_true:'Áno',
        qvalue_false:'Ne',
        Search:'Hledat',
        
        // login
        'your@email.com':'vas@email.cz',
        'password':'heslo',
        'Wrong Email or Password':'Zle zadany email nebo heslo',
        'Log in':'Přihlásit se',
        'Register':'Registrovat se',
        'Forgot Password':'Zapomenuté heslo',
        
        // register
        'Registration Successful':'Registrace přebehla úspěšne',
        'Now, contact your administrator to setup account access permissions, please.':'Kontaktujte Administrátora, aby nastavil povolení přístupu',
        'This email is used by another user, please enter different':'Tento email je již použit, prosím zvolte jiný email',
        'repeat new password password (min. 5 letters)':'zopakovat nové heslo (min. 5 znaků)',
        
        // forgot password
        'Your Registered Email':'Váš Registrovaný Email',
        'Send Password':'Zaslat Heslo',
        'Generate New Password':'Vygenerovat Nové Heslo',
        'New password was sent to your email':'Nové heslo bylo zaslane na Váš email',

        // forgot password email
        'Dear User':'Mily Užívatel',
        'Your password was changed to':'Vaše heslo bylo změnene na',
        'We strongly recommend to change your password after login':'Doporučujeme heslo po přihlášení změnit',
        'Thank you':'Ďekujeme',
        
        // response error notifications
        'Access Denied':'Přístup Zamítnut', 
        'Try logout and login again, or contact administrator':'Odhláste se a zkuste se přihlásit nebo kontaktujte administrátora',
        'Document or his version not found':'Dokument nebo jeho verze se nenašla',
        'Try refresh page, please':'Aktualizujte si stránku',
        'Undocumented server error':'Neznáma chyba na servru',
        'Contact your administrator, please':'Prosím kontaktujte Administrítora',
        'Connection Failed':'Připojení zlyhalo', 
        'Try later, please':'Zkuste později, prosím'
    },

    
    /*
     * Intro
     */
    '/intro':{
        'Presently Works in Browsers':'Aktuálně podporuje tyto prohlížeče',
        'Presently Works on Devices':'Aktuálně odporujeme tyto zařízení'
    },
    
    /*
     * Config
     */
    '/config':{
        'Name & Details':'Název a Detaily',
        'Description':'Popis',
        'Language':'Jazyk',
        'Administration Area Language Settings':'Nastavení Jazyka v Administraci',
        'Default Language':'Přednastavený Jazyk',
        'Mailers':'Mailové Servri',
        'Outgoing Mail Servers':'Nastavení Odchádzejíci pošty',
        'Host':'Server',
        'Port':'Port',
        'From Email':'Email Odesílatele',
        'From Name':'Jméno Odosílatele',
        'Secure':'Zabezpečení',
        'User':'Užívatel',
        'user':'užívatel',
        'Password':'Heslo',
        'password':'heslo',
        'Timeout in ms':'Max. Limit v ms',
        'unique mailer ID':'unikatní ID mail serveru',
        'Add Mailer':'Přidat Mail Server',
        'Save Changes':'Uložit Změny',
        'smtp.yourserver.com':'smtp.server.cz',
        'from@email.com':'odesilatel@email.cz',
        'company name':'název společnosti',
        'Configuration Updated':'Konfigurace Uložena',
    },
    
    /*
     * Change Password
     */
    '/account/changepass':{
        'Change Your Password':'Změnit Svoje Heslo',
        'Change':'Změnit',
        'Old Password':'Staré Heslo',
        'New Password':'Nové Heslo',
        'Repeat New Password':'Zopakovat Nové heslo',
        'old password':'staré heslo',
        'new password':'nové heslo',
        'repeat new password':'zopakovat nové heslo',
        'Password Changed':'Heslo Změnené'
    },
    
    /*
     * Profile
     */
    '/account/profile':{
        'Your User Profile':'Váš Užívatelský Profil',
        'Profile Updated':'Profil Změnený',
        'Profile':'Profil',
        'Nick Name':'Přezdívka',
        'First Name':'Jméno',
        'Last Name':'Příjmění',
        'Language':'Jazyk',
    },
    
    /*
     * Users
     */
    '/users':{
        // profile
        'Profile':'Profil',
        'Nick Name':'Přezdívka',
        'First Name':'Jméno',
        'Last Name':'Příjmění',
        'Language':'Jazyk',
        
        'Create User':'Vytvořit Uživatele',
        'Email':'Email',
        'email@email.com':'email@email.cz',
        'Access':'Přístup',
        'Disabled':'Blokovaný',
        'Reset Password':'Změnit Heslo',
        'Roles':'Role',
        'Details':'Detaily',
        'Security':'Zabezpečení',
        'ID':'ID',
        'API Key':'API Klíč',
        'Allowed API IPs':'Povolene API IP-adresy',
        'Created':'Vytvořen',
        'Last Modified':'Poslední Změna',
        'Last Login':'Poslední Přihlášení',
        
        'This will permanently remove user, and may cause data integrity malfunction, if there are data associated with user. Are you sure ?':'Chystáte se vymazat uživatele. Jestli jsou s daným uživatelem propojená data, může to způsobyt jejich nefunkčnost! Chcete vymazat uživatele?',
        'Remove User':'Vymazat Uživatele',
        
        // resetpass modal
        'Reset User Password':'Změnit Heslo Uživatele',
        'New Password':'Nové Heslo',
        'new password':'nové heslo',
        'Repeat New Password':'Zopakovat Nové heslo',
        'repeat new password':'zopakovat nové heslo',
        
        // filter
        'email':'email',
        'roles':'role',
        'nickname':'přezdívka',
        'firstname':'jméno',
        'lastname':'příjmění',
        'disabled':'blokovaný',
        'createdDT':'vytvořen',
        'modifiedDT':'modifikován',
        'lastLoginDT':'přihlásen',
        
        // validations
        'selfDisable':'Not Yours',
        'selfRemove':'Not Yours'
    }
    
};