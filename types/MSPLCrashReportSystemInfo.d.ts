// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPLCrashReportSystemInfo extends NSObject {
    /* typeEncoding=i, ivar=_architecture, attributes=(assign,nonatomic,readonly) */
    	architecture(): number;
    /* typeEncoding=i, ivar=_operatingSystem, attributes=(assign,nonatomic,readonly) */
    	operatingSystem(): number;
    /* typeEncoding=@"NSString", ivar=_osBuild, attributes=(assign,nonatomic,readonly) */
    	operatingSystemBuild(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_osVersion, attributes=(assign,nonatomic,readonly) */
    	operatingSystemVersion(): cocoascript.NSString;
    /* typeEncoding=@"MSPLCrashReportProcessorInfo", ivar=_processorInfo, attributes=(assign,nonatomic,readonly) */
    	processorInfo(): MSPLCrashReportProcessorInfo;
    /* typeEncoding=@"NSDate", ivar=_timestamp, attributes=(assign,nonatomic,readonly) */
    	timestamp(): cocoascript.NSDate;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=i16@0:8 */
    	architecture(...args: any[]): any;
    /* typeEncoding=@40@0:8i16@20i28@32 */
    	initWithOperatingSystem_operatingSystemVersion_architecture_timestamp(...args: any[]): any;
    /* typeEncoding=@56@0:8i16@20@28i36@40@48 */
    	initWithOperatingSystem_operatingSystemVersion_operatingSystemBuild_architecture_processorInfo_timestamp(...args: any[]): any;
    /* typeEncoding=@48@0:8i16@20@28i36@40 */
    	initWithOperatingSystem_operatingSystemVersion_operatingSystemBuild_architecture_timestamp(...args: any[]): any;
    /* typeEncoding=i16@0:8 */
    	operatingSystem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	operatingSystemBuild(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	operatingSystemVersion(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	processorInfo(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	timestamp(...args: any[]): any;
  }
}

declare const MSPLCrashReportSystemInfo: sketchInternal.MSPLCrashReportSystemInfo;

