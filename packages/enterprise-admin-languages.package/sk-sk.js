module.exports = {
    
    /*
     * Common (menu, genral ui, etc...), loaded on all admin screens include login, register
     */
    common:{
        
        // common phrases
        'Remove':'Odstrániť',
        'Close':'Zavrieť',
        'Reset':'Zmeniť',
        'Cancel':'Zrušiť',
        'Delete':'Vymazať',
        'Create':'Vytvoriť',
        'Update':'Uloziť',
        'Reload':'Obnoviť',
        'Required':'Povinné',
        'Default':'Predvolené',
        'default':'predvolené',
        'Optional':'Volitelné',
        'optional':'volitelné',
        'Insert':'Vložiť',
        'not set':'nezvolené',
        'Not Set':'Nezvolené',
        'empty':'prázdne',
        'Empty':'Prázdne',
        
        // forms and validation messages, e.g. "Value of "Name" must be: Text"
        'Validation Failed':'Validácia neúspešná',
        'Value of':'Hodnota',
        'must be':'musí byť',
        'unique':'unikátne',
        'required':'povinné',
        'isInteger': 'Číslo',
        'isString': 'Text',
        'isArray': 'Pole hodnôt',
        'isBoolean': 'Logické Áno/Nie',
        'minLength': 'Min. dĺžka hodnoty',
        'maxLength': 'Ma. dĺžka hodnoty',
        'isIn': 'v poli hodnôt',
        'parseDate': 'Dátum',
        'toDate': 'Dátum',
        'date': 'Dátum',
        'toDateString': 'Dátum',
        'round': 'Číslo',
        'validate': 'Valid',
        'keyNames': 'Valid',
        'keys': 'Valid',
        'equals': 'is Valid',
        'contains': 'is Valid',
        'matches': 'Valid',
        'isEmail': 'Email',
        'isURL': 'URL',
        'isFQDN': 'FQDN',
        'isIP': 'IP adresa',
        'isAlpha': 'len písmena (a-zA-Z)',
        'isNumeric': 'Číslo',
        'isAlphanumeric': 'Alfanumerická',
        'isBase64': 'Base64',
        'isHexadecimal': 'Hexadecimálny',
        'isHexColor': 'Hex Farba',
        'isLowercase': 'Len malé písmena',
        'isUppercase': 'Len veľké písmena',
        'isInt': 'Číslo',
        'isFloat': 'Číslo',
        'isDivisibleBy': 'Valid',
        'isLength': 'Valid',
        'isByteLength': 'Valid',
        'isUUID': 'UUID',
        'isDate': 'Dátum',
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
        'My Account': 'Moj Ucet',
        'Profile':'Profil',
        'Change Password': 'Zmenit Heslo',
        'Logout': 'Odhlasit sa',
        'Application Configuration':'Konfiguracia Aplikacie',
        'Toogle Menu Position':'Prepnut Poziciu Menu',
        'User Management':'Manazment Uzivatelov',

        // grid
        'page':'stranka',
        'of':'z',
        'items':'poloziek',

        // notifications
        'Loading...':'Nacitava sa...',

        // query
        $equal:'=',
        $lt:'<',
        $lte:'<=',
        $gt:'>',
        $gte:'>=',
        $regex_exact:'presná zhoda',
        $regex_contains:'obsahuje',
        $regex_begins:'začína s',
        $regex_ends:'končí s',
        $in:'je v zozname',
        $ne:'nie je',
        $regex_ncontains:'neobsahuje',
        $regex_nbegins:'nezačína s',
        $regex_nends:'nekončí s',
        $nin:'nie je v zozname',
        $regex:'vlastný regex',
        $size:'veľkosť poľa',
        $exists:'existuje',
        $and:'a',
        $or:'alebo',
        OR:'ALEBO',
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
        qtype_boolean:'Logické áno/nie',
        qtype_string:'Text',
        qtype_array:'Pole',
        qtype_object:'Objekt',
        qvalue_true:'Áno',
        qvalue_false:'Nie',
        Search:'Hladat',
        
        // login
        'your@email.com':'vas@email.sk',
        'password':'heslo',
        'Wrong Email or Password':'Zle zadany email alebo heslo',
        'Log in':'Prihlasit sa',
        'Register':'Registrovat sa',
        'Forgot Password':'Zabudol som heslo',
        
        // register
        'Registration Successful':'Registracia prebehla uspesne',
        'Now, contact your administrator to setup account access permissions, please.':'prelozit text...',
        'This email is used by another user, please enter different':'prelozit text...',
        'new password (min. 5 letters)':'nové heslo (min. 5 znakov)',
        'password (min. 5 letters)':'heslo (min. 5 znakov)',
        'repeat new password (min. 5 letters)':'zopakovat nove heslo (min. 5 znakov)',
        
        // forgot password
        'Your Registered Email':'Vas Registrovany Email',
        'Send Password':'Zaslat Heslo',
        'Generate New Password':'Vygenerovat Nove Heslo',
        'New password was sent to your email':'Nove heslo bolo zaslane na Vas email',
        
        // response error notifications
        'Access Denied':'Pristup Zamietnuty', 
        'Try logout and login again, or contact administrator':'Skúste sa odhlásiť a prihlásiť, alebo kontaktujte Administrátora',
        'Document or his version not found':'Nenájdený dokument v tejto verzii',
        'Try refresh page, please':'Načítajte znova stránku',
        'Undocumented server error':'Neznáma chyba na servri',
        'Contact your administrator, please':'Kontaktujte Administrátora',
        'Connection Failed':'Pripojenie na server zlyhalo', 
        'Try later, please':'Skúste neskôr'
    },

    
    /*
     * Intro
     */
    '/intro':{
        'Presently Works in Browsers':'V súčasnosti podporujeme tieto prehliadače',
        'Presently Works on Devices':'V súčasnosti podporujeme tieto zariadenia'
    },
    
    /*
     * Config
     */
    '/config':{
        'Name & Details':'Nazov a Detaily',
        'Description':'Popis',
        'Language':'Jazyk',
        'Administration Area Language Settings':'Nastavenie Jazyka v Administracii',
        'Default Language':'Prednastaveny Jazyk',
        'Mailers':'Mail Servery',
        'Outgoing Mail Servers':'Nastavenia Odchadzajucej posty',
        'Host':'Server',
        'Port':'Port',
        'From Email':'Email Odosielatela',
        'From Name':'Meno Odosielatela',
        'Secure':'Zabezpecenie',
        'User':'Uzivatel',
        'user':'uzivatel',
        'Password':'Heslo',
        'password':'heslo',
        'Timeout in ms':'Max. Limit v ms',
        'unique mailer ID':'unikatne ID mail servera',
        'Add Mailer':'Pridat Mail Server',
        'Save Changes':'Ulozit Zmeny',
        'smtp.yourserver.com':'smtp.server.sk',
        'from@email.com':'odkoho@email.sk',
        'company name':'nazov spolocnosti',
        'Configuration Updated':'Konfiguracia Ulozena',
        
        // validation
        'host':'Server',
        'port':'Port',
        'from':'Odosielatel',
        
        // forgot pass email
        'Mailer':'Mail Server',
        'Forgot Pass. Email':'Email Zabodnute heslo',
        'Forgot Password Email Settings':'Nastavenia Emailu Zabudnute heslo',
        'Email Template':'Sablona Emailu',
        'Email Subject':'Predmet Emailu',
        'Email Sent':'Email Zaslany',
        'Email Sending Error':'Chyba Pri Odosielani Emailu',
        'Timeout':'Casovy Limit Uplynul',
        'Test Email':'Test Email',
        'Send Me Test Email':'Zaslat Mi Test Email',
    },
    
    /*
     * Change Password
     */
    '/account/changepass':{
        'Change Your Password':'Zmenit Svoje Heslo',
        'Change':'Zmenit',
        'Old Password':'Stare Heslo',
        'New Password':'Nove Heslo',
        'Repeat New Password':'Zopakovat Nove heslo',
        'old password':'stare heslo',
        'new password':'nove haslo',
        'repeat new password':'zopakovat nove heslo',
        'Password Changed':'Heslo Zmenene'
    },
    
    /*
     * Profile
     */
    '/account/profile':{
        'Your User Profile':'Vas Uzivatelsky Profil',
        'Profile Updated':'Profil Zmeneny',
        'Profile':'Profil',
        'Nick Name':'Prezivka',
        'First Name':'Meno',
        'Last Name':'Priezvisko',
        'Language':'Jazyk',
    },
    
    /*
     * Users
     */
    '/users':{
        // profile
        'Profile':'Profil',
        'Nick Name':'Prezivka',
        'First Name':'Meno',
        'Last Name':'Priezvisko',
        'Language':'Jazyk',
        
        'Create User':'Vytvorit Uzivatela',
        'Email':'Email',
        'email@email.com':'email@email.sk',
        'Access':'Pristup',
        'Disabled':'Blokovany',
        'Reset Password':'Zmenit Heslo',
        'Roles':'Role',
        'Details':'Detaily',
        'Security':'Zabezpecenie',
        'ID':'ID',
        'API Key':'API Kluc',
        'Allowed API IPs':'Povolene API IP-adresy',
        'Created':'Vytvoreny',
        'Last Modified':'Posledna Zmena',
        'Last Login':'Posledne Prihlasenie',
        
        'This will permanently remove user, and may cause data integrity malfunction, if there are data associated with user. Are you sure ?':'Chystáte sa vymazať užívateľa. Ak sú s užívateľom prepojené dáta, môže to spôsobiť ich nefunkčnosť! Chcete vymazať užívateľa?',
        'Remove User':'Vymazat Uzivatela',
        
        // resetpass modal
        'Reset User Password':'Zmenit Heslo Uzivatela',
        'New Password':'Nove Heslo',
        'new password':'nove haslo',
        'Repeat New Password':'Zopakovat Nove heslo',
        'repeat new password':'zopakovat nove heslo',
        
        // filter
        'email':'email',
        'roles':'rola',
        'nickname':'prezivka',
        'firstname':'meno',
        'lastname':'priezvisko',
        'disabled':'blokovany',
        'createdDT':'vytvoreny',
        'modifiedDT':'modifikovany',
        'lastLoginDT':'prihlaseny',
        
        // validations
        'selfDisable':'Not Yours',
        'selfRemove':'Not Yours'
    },
    
    /*
     * Users
     */
    '/cms/documents':{
        'Change Image':'Zmeniť obrázok',
        'Insert Image':'Vložiť obrázok',
        'Insert Link':'Vložiť odkaz',
        'Insert Table':'Vložiť tabuľku',
        'Click On Element':'Kliknite na prvok',
        'Set Natural Image Width':'Nastaviť pôvodnú šírku obrázka',
        'Set Natural Image Height':'Nastaviť pôvodnú výšku obrázka',
        'Image Source':'Zdroj obrázka',
        'Natural Image Size':'Pôvodná veľkosť obrázka',
        'Rows':'Riadky',
        'Columns':'Stĺpce',
        'Wysiwyg':'Wysiwyg',
        'Markdown':'Markdown',
        'Html':'HTML',
        'Inner Text':'Text vo vnútri',
        'Template Updated':'Šablóna bola aktualizovaná',
        'Create Template':'Vytvoriť šablónu',
        'Remove Template':'Odstrániť šablónu',
        'Are you sure ?':'Ste si istý?',
        
        
    }
};