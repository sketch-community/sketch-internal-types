// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDeviceTracker extends NSObject {
    /* typeEncoding=@"MSDevice", ivar=_device, attributes=(retain,nonatomic) */
    	device(): MSDevice;
    /* typeEncoding=@"NSMutableArray", ivar=_deviceHistory, attributes=(retain,nonatomic) */
    	deviceHistory(): cocoascript.NSMutableArray;
    /* typeEncoding=v16@0:8 */
    	static refreshDeviceNextTime(): void;
    /* typeEncoding=v16@0:8 */
    	static resetSharedInstance(): void;
    /* typeEncoding=@16@0:8 */
    	static sharedInstance(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@24@0:8@16 */
    	appBuild(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	appNamespace(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	appVersion(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	clearDevices(): void;
    /* typeEncoding=@16@0:8 */
    	device(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	deviceForTimestamp(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	deviceHistory(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	deviceModel(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	locale(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	osBuild(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	osName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	osVersion(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshWrapperSdk(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	screenSize(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setCountryCode(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDevice(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDeviceHistory(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setWrapperSdk(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	timeZoneOffset(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	updatedDevice(...args: any[]): any;
  }
}

declare const MSDeviceTracker: sketchInternal.MSDeviceTracker;

