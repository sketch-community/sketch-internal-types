// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPLCrashReportSymbolInfo extends NSObject {
    /* typeEncoding=Q, ivar=_endAddress, attributes=(assign,nonatomic,readonly) */
    	endAddress(): number;
    /* typeEncoding=Q, ivar=_startAddress, attributes=(assign,nonatomic,readonly) */
    	startAddress(): number;
    /* typeEncoding=@"NSString", ivar=_symbolName, attributes=(assign,nonatomic,readonly) */
    	symbolName(): cocoascript.NSString;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=Q16@0:8 */
    	endAddress(...args: any[]): any;
    /* typeEncoding=@40@0:8@16Q24Q32 */
    	initWithSymbolName_startAddress_endAddress(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	startAddress(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	symbolName(...args: any[]): any;
  }
}

declare const MSPLCrashReportSymbolInfo: sketchInternal.MSPLCrashReportSymbolInfo;

