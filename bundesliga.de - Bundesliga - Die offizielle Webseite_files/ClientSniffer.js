/**
 * 
 */
function ClientSniffer()
{
	this.d						= document;
	this.n						= navigator;
	this.nav					= this.n.appVersion;
	this.nan					= this.n.appName;
	this.nua					= this.n.userAgent;
	this.old					= (this.nav.substring(0,1) < 4);
	this.mac					= (this.nav.indexOf('Mac') != -1);
	this.win					= (this.nav.indexOf('Win') != -1);
	this.lin					= (this.nua.indexOf('Linux') != -1);
	
	this.getBrowser		= getBrowser;
	this.getVersion		= getVersion;
	this.getOS				= getOS;
	
	// Primary DOM / NS4 test
	if (!document.layers) {
		this.dom				= (this.d.getElementById) ? true : false;
	} else {
		this.dom				= false;
		this.ns4				= true; // Only NS4 supports document.layers
	}
	
	this.op						= (this.nua.indexOf('Opera') != -1);
	this.saf					= (this.nua.indexOf('Safari') != -1);
	this.konq					= (!this.saf && (this.nua.indexOf('Konqueror') != -1)) ? true : false;
	this.moz					= ((!this.saf && !this.konq) && (this.nua.indexOf('Gecko') != -1)) ? true : false;
	this.ie						= ((this.nua.indexOf('MSIE') != -1) && !this.op);
	
	if (this.op) {
		this.str_pos = this.nua.indexOf('Opera');
		this.nu = this.nua.substr((this.str_pos + 6), 4);
		this.brow = 'Opera';
	} else if (this.saf) {
		this.str_pos = this.nua.indexOf('Safari');
		this.nu = this.nua.substr((this.str_pos + 7), 5);
		this.brow = 'Safari';
	} else if (this.konq) {
		this.str_pos = this.nua.indexOf('Konqueror');
		this.nu = this.nua.substr((this.str_pos + 10), 3);
		this.brow = 'Konqueror';
	} else if (this.moz) {
		// regular expression pattern that will be used to extract main version/rv numbers
		this.pattern = /[(); \n]/;
		
		// moz type array, add to this if you need to
		this.moz_types = new Array(
			'Firebird',
			'Phoenix',
			'Firefox',
			'Iceweasel',
			'Galeon',
			'K-Meleon',
			'Camino',
			'Epiphany',
			'Netscape6',
			'Netscape',
			'MultiZilla',
			'Gecko Debian',
			'rv'
		);
		
		this.rv_pos = this.nua.indexOf('rv'); // find 'rv' position in this.nua string.
		this.rv_full = this.nua.substr(this.rv_pos + 3, 6); // cut out maximum size it can be, eg: 1.8a2, 1.0.0 etc
		// search for occurance of any of characters in pattern, if found get position of that character
		this.rv_slice = (this.rv_full.search(this.pattern) != -1) ? this.rv_full.search( this.pattern ) : '';
		//check to make sure there was a result, if not do  nothing
		// otherwise slice out the part that you want if there is a slice position
		(this.rv_slice) ? this.rv_full = this.rv_full.substr(0, this.rv_slice) : '';
		// this is the working id number, 3 digits, you'd use this for 
		// number comparison, like if nu >= 1.3 do something
		this.nu = this.rv_full.substr( 0, 3 );
		
		for (i=0; i < this.moz_types.length; i++) {
			if (this.nua.indexOf(this.moz_types[i]) !=-1) {
				this.moz_brow = this.moz_types[i];
				break;
			}
		}
		
		if (this.moz_brow) { // if it was found in the array
			this.str_pos = this.nua.indexOf(this.moz_brow); // extract string position
			this.moz_brow_nu = this.nua.substr((this.str_pos + this.moz_brow.length + 1 ) ,3); // slice out working number, 3 digit
			// if you got it, use it, else use nu
			this.moz_brow_nu = (isNaN(this.moz_brow_nu)) ? this.moz_brow_nu = this.nu : this.moz_brow_nu;
			this.moz_brow_nu_sub = this.nua.substr((this.str_pos + this.moz_brow.length + 1 ), 8);
			// this makes sure that it's only the id number
			this.sub_nu_slice = (this.moz_brow_nu_sub.search(this.pattern) != -1) ? this.moz_brow_nu_sub.search(this.pattern) : '';
			//check to make sure there was a result, if not do  nothing
			(this.sub_nu_slice) ? this.moz_brow_nu_sub = this.moz_brow_nu_sub.substr(0, this.sub_nu_slice) : '';
		}
		
		if (this.moz_brow == 'Netscape6') {
			this.moz_brow = 'Netscape';
		} else if (this.moz_brow == 'rv' || this.moz_brow == '' ) { // default value if no other gecko name fit
			this.moz_brow = 'Mozilla';
		}
		
		if (!this.moz_brow_nu) { // use rv number if nothing else is available
			this.moz_brow_nu = this.nu;
			this.moz_brow_nu_sub = this.nu;
		}
		
		if (this.n.productSub) {
			this.release_date = this.n.productSub;
		}
	} else if (this.ie) {
		this.str_pos = this.nua.indexOf('MSIE');
		this.nu = this.nua.substr((this.str_pos + 5), 3);
		this.brow = 'Microsoft Internet Explorer';
	} else { // default to navigator app name
		this.brow = this.nan;
	}
	
	this.op5 = (this.op && (this.nu.substring(0,1) == 5));
	this.op6 = (this.op && (this.nu.substring(0,1) == 6));
	this.op7 = (this.op && (this.nu.substring(0,1) == 7));
	this.op8 = (this.op && (this.nu.substring(0,1) == 8));
	this.op9 = (this.op && (this.nu.substring(0,1) == 9));
	this.ie4 = (this.ie && !this.dom);
	this.ie5 = (this.ie && (this.nu.substring(0,1) == 5));
	this.ie6 = (this.ie && (this.nu.substring(0,1) == 6));
	this.ie7 = (this.ie && (this.nu.substring(0,1) == 7));
	// default to get number from navigator app version.
	if(!this.nu) 
	{
		this.nu = this.nav.substring(0, 1);
	}
	
	// ie5x tests only for functionality. dom or ie5x would be default settings. 
	// Opera will register true in this test if set to identify as IE 5
	this.ie5x=(this.d.all && this.dom);
	this.ie5mac=(this.mac && this.ie5);
	this.ie5xwin=(this.win && this.ie5x);
} //~:ClientSniffer()

/**
 * 
 */
function getBrowser()
{
	var browser = this.brow;
	
	if (!browser && this.moz) {
		browser = this.moz_brow;
	}
	
	return browser;
} //~:getBrowser()

/**
 * 
 */
function getVersion()
{
	var browser = this.brow;
	var nu = this.nu;
	
	if (!browser && this.moz) {
		nu = this.moz_brow_nu;
	}
	
	return nu;
} //~:getVersion()

/**
 * 
 */
function getOS()
{
	var os = 'unknown';
	
	if (this.mac)							os = 'Mac';
	else if (this.win)				os = 'Windows';
	else if (this.lin)				os = 'Linux';
	
	return os;
} //~:getOS()