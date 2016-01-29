module.exports = {
    
    /*
     * Common (menu, genral ui, etc...), loaded on all admin screens include login, register
     */
    common:{
        
        // common phrases
        'Remove':'Odstranit',
        'Close':'Zavřít',
        'Reset':'Změnit',
        'Cancel':'Zrušit',
        'Delete':'Vymazat',
        'Create':'Vytvořit',
        'Update':'Uložit',
        'Reload':'Obnovit',
        'Required':'Povinné',
        'Default':'Výchozí',
        'default':'výchozí',
        'Optional':'Volitelné',
        'optional':'volitelné',
        'Insert':'Vložit',
        
        // forms and validation messages, e.g. "Value of "Name" have to be: Text"
        'Validation Failed':'Validace selhala',
        'Value of':'Hodnota',
        'have to be':'musí být',
        'required':'povinné',
        'isInteger': 'Číslo',
        'isString': 'Text',
        'isArray': 'Pole hodnot',
        'isBoolean': 'True nebo False',
        'minLength': 'Min. délka hodnoty',
        'maxLength': 'Max. délka hodnoty',
        'isIn': 'v poli hodnot',
        'parseDate': 'Datum',
        'toDate': 'Datum',
        'date': 'Datum',
        'toDateString': 'Datum',
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
        'isAlpha': 'pouze písmena (a-zA-Z)',
        'isNumeric': 'Číslo',
        'isAlphanumeric': 'Alfanumerická',
        'isBase64': 'Base64',
        'isHexadecimal': 'Hexadecimální',
        'isHexColor': 'Hex barva',
        'isLowercase': 'Pouze malá písmena',
        'isUppercase': 'Pouze velká písmena',
        'isInt': 'Číslo',
        'isFloat': 'Číslo',
        'isDivisibleBy': 'Valid',
        'isLength': 'Valid',
        'isByteLength': 'Valid',
        'isUUID': 'UUID',
        'isDate': 'Datum',
        'isAfter': 'Později',
        'isBefore': 'Dříve',
        'isCreditCard': 'Kreditní karta',
        'isISBN': 'ISBN',
        'isJSON': 'JSON',
        'isMultibyte': 'Multibyte',
        'isAscii': 'Pouze ASCII znaky',
        'isFullWidth': 'Valid',
        'isHalfWidth': 'Valid',
        'isVariableWidth': 'Valid',
        'isSurrogatePair': 'Surrogate Pair',

        // default menu items
        'My Account': 'Můj účet',
        'Profile':'Profil',
        'Change Password': 'Změnit heslo',
        'Logout': 'Odhlásit se',
        'Application Configuration':'Konfigurace aplikace',
        'Toogle Menu Position':'Přepnout pozici menu',
        'User Management':'Správa uživatelů',

        // grid
        'page':'stránka',
        'of':'z',
        'items':'položek',

        // notifications
        'Loading...':'Nahrává se...',

        // query
        $equal:'=',
        $lt:'<',
        $lte:'<=',
        $gt:'>',
        $gte:'>=',
        $regex_exact:'přesná shoda',
        $regex_contains:'obsahuje',
        $regex_begins:'začína s',
        $regex_ends:'končí s',
        $in:'je v seznamu',
        $ne:'není',
        $regex_ncontains:'neobsahuje',
        $regex_nbegins:'nezačína s',
        $regex_nends:'nekončí s',
        $nin:'není v seznamu',
        $regex:'vlastní regex',
        $size:'velikost pole',
        $exists:'existuje',
        $and:'a',
        $or:'nebo',
        OR:'NEBO',
        AND:'A',
        choose:'(vyberte)',
        qtype_short_number:'0-9',
        qtype_short_date:'2014',
        qtype_short_boolean:'A/N',
        qtype_short_string:'A-Z',
        qtype_short_array:'[A]',
        qtype_short_object:'{O}',
        qtype_number:'Číslo',
        qtype_date:'Datum',
        qtype_boolean:'Logické ano/ne',
        qtype_string:'Text',
        qtype_array:'Pole',
        qtype_object:'Objekt',
        qvalue_true:'Ano',
        qvalue_false:'Ne',
        Search:'Hledat',
        
        // login
        'your@email.com':'vas@email.cz',
        'password':'heslo',
        'Wrong Email or Password':'Špatně zadaný email nebo heslo',
        'Log in':'Přihlásit se',
        'Register':'Registrovat se',
        'Forgot Password':'Zapomenuté heslo',
        
        // register
        'Registration Successful':'Registrace proběhla úspěšně',
        'Now, contact your administrator to setup account access permissions, please.':'Kontaktujte administrátora, aby nastavil povolení přístupu',
        'This email is used by another user, please enter different':'Tento email je již použit, prosím zvolte jiný email',
        'new password (min. 5 letters)':'nové heslo (min. 5 znaků)',
        'password (min. 5 letters)':'heslo (min. 5 znaků)',
        'repeat new password (min. 5 letters)':'zopakovat nové heslo (min. 5 znaků)',
        
        // forgot password
        'Your Registered Email':'Váš registrovaný email',
        'Send Password':'Zaslat heslo',
        'Generate New Password':'Vygenerovat nové heslo',
        'New password was sent to your email':'Nové heslo bylo zaslané na Váš email',
        
        // response error notifications
        'Access Denied':'Přístup odmítnutý', 
        'Try logout and login again, or contact administrator':'Zkuste se odhlásit a přihlásit nebo kontaktujte Administrátora',
        'Document or his version not found':'Dokument v této verzi nebyl nalezen',
        'Try refresh page, please':'Zkuste obnovit stránku',
        'Undocumented server error':'Neznáma chyba serveru',
        'Contact your administrator, please':'Kontaktujte Administrátora',
        'Connection Failed':'Připojení na server selhalo', 
        'Try later, please':'Zkuste později'
    },

    
    /*
     * Intro
     */
    '/intro':{
        'Presently Works in Browsers':'Aktuálně podporujeme tyto prohlížeče',
        'Presently Works on Devices':'Aktuálně podporujeme tyto zařízení'
    },
    
    /*
     * Config
     */
    '/config':{
        'Name & Details':'Název a Detaily',
        'Description':'Popis',
        'Language':'Jazyk',
        'Administration Area Language Settings':'Nastavení jazyka v administraci',
        'Default Language':'Výchozí jazyk',
        'Mailers':'Mailové servery',
        'Outgoing Mail Servers':'Nastavení odchozí pošty',
        'Host':'Server',
        'Port':'Port',
        'From Email':'Email odesílatele',
        'From Name':'Jméno odesílatele',
        'Secure':'Zabezpečení',
        'User':'Uživatel',
        'user':'uživatel',
        'Password':'Heslo',
        'password':'heslo',
        'Timeout in ms':'Max. limit v ms',
        'unique mailer ID':'unikatní ID mail serveru',
        'Add Mailer':'Přidat mailový server',
        'Save Changes':'Uložit změny',
        'smtp.yourserver.com':'smtp.server.cz',
        'from@email.com':'odesilatel@email.cz',
        'company name':'název společnosti',
        'Configuration Updated':'Konfigurace uložena',
        
        // validation
        'host':'Server',
        'port':'Port',
        'from':'Odesílatel',

        // forgot pass email
        'Mailer':'Mail Server',
        'Forgot Pass. Email':'Zapomenute heslo email',
        'Forgot Password Email Settings':'Nastaveni emailu zapomenuhe heslo',
        'Email Template':'Šablona emailu',
        'Email Subject':'Předmět emailu',
        'Email Sent':'Email odeslán',
        'Email Sending Error':'Chyba při odesílání emailu',
        'Timeout':'Casovy limit uplynul',
        'Test Email':'Test email',
        'Send Me Test Email':'Odeslat mi test emailu',
    },
    
    /*
     * Change Password
     */
    '/account/changepass':{
        'Change Your Password':'Změnit vlastní heslo',
        'Change':'Změnit',
        'Old Password':'Staré heslo',
        'New Password':'Nové heslo',
        'Repeat New Password':'Zopakovat nové heslo',
        'old password':'staré heslo',
        'new password':'nové heslo',
        'repeat new password':'zopakovat nové heslo',
        'Password Changed':'Heslo Změnené'
    },
    
    /*
     * Profile
     */
    '/account/profile':{
        'Your User Profile':'Váš uživatelský profil',
        'Profile Updated':'Profil změněn',
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
        'Last Name':'Příjmení',
        'Language':'Jazyk',
        
        'Create User':'Vytvořit uživatele',
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
        'Last Modified':'Poslední změna',
        'Last Login':'Poslední přihlášení',
        
        'This will permanently remove user, and may cause data integrity malfunction, if there are data associated with user. Are you sure ?':'Chystáte se vymazat uživatele. Jestliže jsou s daným uživatelem propojená data, může to způsobyt jejich nefunkčnost! Chcete vymazat uživatele?',
        'Remove User':'Vymazat uživatele',
        
        // resetpass modal
        'Reset User Password':'Změnit heslo uživatele',
        'New Password':'Nové heslo',
        'new password':'nové heslo',
        'Repeat New Password':'Zopakovat nové heslo',
        'repeat new password':'zopakovat nové heslo',
        
        // filter
        'email':'email',
        'roles':'role',
        'nickname':'přezdívka',
        'firstname':'jméno',
        'lastname':'příjmení',
        'disabled':'blokovaný',
        'createdDT':'vytvořen',
        'modifiedDT':'změněn',
        'lastLoginDT':'přihlášen',
        
        // validations
        'selfDisable':'Not Yours',
        'selfRemove':'Not Yours'
    },
    
    /*
     * Users
     */
    '/cms/documents':{
    'Change Image':'Změnit obrázek',
        'Insert Image':'Vložit obrázek',
    'Insert Link':'Vložit odkaz',
    'Insert Table':'Vložit tabulku',
    'Click On Element':'Klikněte na prvek',
    'Set Natural Image Width':'Nastavit původní šířku obrázku',
    'Set Natural Image Height':'Nastavit původní výšku obrázku',
    'Image Source':'Zdroj obrázku',
    'Natural Image Size':'Původní velikost obrázku',
    'Rows':'Řádky',
    'Columns':'Sloupce',
    'Wysiwyg':'Wysiwig',
    'Markdown':'Markdown',
    'Html':'HTML',
    'Inner Text':'Vnitřní text',
    'Template Updated':'Šablóna byla aktualizovaná',
    'Create Template':'Vytvořit šablónu',
    'Remove Template':'Smazat šablónu',
    'Are you sure ?':'Jste si jistý?',


}
};
