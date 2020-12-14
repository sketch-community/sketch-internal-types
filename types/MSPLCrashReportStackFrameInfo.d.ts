// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPLCrashReportStackFrameInfo extends NSObject {
    /* typeEncoding=Q, ivar=_instructionPointer, attributes=(assign,nonatomic,readonly) */
    	instructionPointer(): number;
    /* typeEncoding=@"MSPLCrashReportSymbolInfo", ivar=_symbolInfo, attributes=(assign,nonatomic,readonly) */
    	symbolInfo(): MSPLCrashReportSymbolInfo;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@32@0:8Q16@24 */
    	initWithInstructionPointer_symbolInfo(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	instructionPointer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	symbolInfo(...args: any[]): any;
  }
}

declare const MSPLCrashReportStackFrameInfo: sketchInternal.MSPLCrashReportStackFrameInfo;

