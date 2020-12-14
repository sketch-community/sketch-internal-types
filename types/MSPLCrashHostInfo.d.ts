// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPLCrashHostInfo extends NSObject {
    /* typeEncoding={PLCrashHostInfoVersion=QQQ}, ivar=_darwinVersion, attributes=(assign,nonatomic,readonly) */
    	darwinVersion(): PLCrashHostInfoVersion;
    /* typeEncoding=@16@0:8 */
    	currentHostInfo(...args: any[]): any;
    /* typeEncoding={PLCrashHostInfoVersion=QQQ}16@0:8 */
    	darwinVersion(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
  }
}

declare const MSPLCrashHostInfo: sketchInternal.MSPLCrashHostInfo;

