// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPLCrashReport extends NSObject {
    /* typeEncoding=@"MSPLCrashReportApplicationInfo", ivar=_applicationInfo, attributes=(assign,nonatomic,readonly) */
    	applicationInfo(): MSPLCrashReportApplicationInfo;
    /* typeEncoding=@"MSPLCrashReportExceptionInfo", ivar=_exceptionInfo, attributes=(assign,nonatomic,readonly) */
    	exceptionInfo(): MSPLCrashReportExceptionInfo;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasExceptionInfo(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasMachineInfo(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	hasProcessInfo(): boolean;
    /* typeEncoding=@"NSArray", ivar=_images, attributes=(assign,nonatomic,readonly) */
    	images(): cocoascript.NSArray;
    /* typeEncoding=@"MSPLCrashReportMachExceptionInfo", ivar=_machExceptionInfo, attributes=(assign,nonatomic,readonly) */
    	machExceptionInfo(): MSPLCrashReportMachExceptionInfo;
    /* typeEncoding=@"MSPLCrashReportMachineInfo", ivar=_machineInfo, attributes=(assign,nonatomic,readonly) */
    	machineInfo(): MSPLCrashReportMachineInfo;
    /* typeEncoding=@"MSPLCrashReportProcessInfo", ivar=_processInfo, attributes=(assign,nonatomic,readonly) */
    	processInfo(): MSPLCrashReportProcessInfo;
    /* typeEncoding=@"MSPLCrashReportSignalInfo", ivar=_signalInfo, attributes=(assign,nonatomic,readonly) */
    	signalInfo(): MSPLCrashReportSignalInfo;
    /* typeEncoding=@"MSPLCrashReportSystemInfo", ivar=_systemInfo, attributes=(assign,nonatomic,readonly) */
    	systemInfo(): MSPLCrashReportSystemInfo;
    /* typeEncoding=@"NSArray", ivar=_threads, attributes=(assign,nonatomic,readonly) */
    	threads(): cocoascript.NSArray;
    /* typeEncoding=^{__CFUUID=}, ivar=_uuid, attributes=(assign,nonatomic,readonly) */
    	uuidRef(): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	applicationInfo(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	dealloc(): void;
    /* typeEncoding=^{_Plcrash__CrashReport={ProtobufCMessage=^{ProtobufCMessageDescriptor}I^{ProtobufCMessageUnknownField}}^{_Plcrash__CrashReport__SystemInfo}^{_Plcrash__CrashReport__ApplicationInfo}Q^^{_Plcrash__CrashReport__Thread}Q^^{_Plcrash__CrashReport__BinaryImage}^{_Plcrash__CrashReport__Exception}^{_Plcrash__CrashReport__Signal}^{_Plcrash__CrashReport__ProcessInfo}^{_Plcrash__CrashReport__MachineInfo}^{_Plcrash__CrashReport__ReportInfo}}32@0:8@16^@24 */
    	decodeCrashData_error(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	exceptionInfo(...args: any[]): any;
    /* typeEncoding=@32@0:8^{_Plcrash__CrashReport__ApplicationInfo={ProtobufCMessage=^{ProtobufCMessageDescriptor}I^{ProtobufCMessageUnknownField}}***}16^@24 */
    	extractApplicationInfo_error(...args: any[]): any;
    /* typeEncoding=@32@0:8^{_Plcrash__CrashReport__Exception={ProtobufCMessage=^{ProtobufCMessageDescriptor}I^{ProtobufCMessageUnknownField}}**Q^^{_Plcrash__CrashReport__Thread__StackFrame}}16^@24 */
    	extractExceptionInfo_error(...args: any[]): any;
    /* typeEncoding=@32@0:8^{_Plcrash__CrashReport={ProtobufCMessage=^{ProtobufCMessageDescriptor}I^{ProtobufCMessageUnknownField}}^{_Plcrash__CrashReport__SystemInfo}^{_Plcrash__CrashReport__ApplicationInfo}Q^^{_Plcrash__CrashReport__Thread}Q^^{_Plcrash__CrashReport__BinaryImage}^{_Plcrash__CrashReport__Exception}^{_Plcrash__CrashReport__Signal}^{_Plcrash__CrashReport__ProcessInfo}^{_Plcrash__CrashReport__MachineInfo}^{_Plcrash__CrashReport__ReportInfo}}16^@24 */
    	extractImageInfo_error(...args: any[]): any;
    /* typeEncoding=@32@0:8^{_Plcrash__CrashReport__Signal__MachException={ProtobufCMessage=^{ProtobufCMessageDescriptor}I^{ProtobufCMessageUnknownField}}QQ^Q}16^@24 */
    	extractMachExceptionInfo_error(...args: any[]): any;
    /* typeEncoding=@32@0:8^{_Plcrash__CrashReport__MachineInfo={ProtobufCMessage=^{ProtobufCMessageDescriptor}I^{ProtobufCMessageUnknownField}}*^{_Plcrash__CrashReport__Processor}II}16^@24 */
    	extractMachineInfo_error(...args: any[]): any;
    /* typeEncoding=@32@0:8^{_Plcrash__CrashReport__ProcessInfo={ProtobufCMessage=^{ProtobufCMessageDescriptor}I^{ProtobufCMessageUnknownField}}*I**IiiQ}16^@24 */
    	extractProcessInfo_error(...args: any[]): any;
    /* typeEncoding=@32@0:8^{_Plcrash__CrashReport__Processor={ProtobufCMessage=^{ProtobufCMessageDescriptor}I^{ProtobufCMessageUnknownField}}iiQQ}16^@24 */
    	extractProcessorInfo_error(...args: any[]): any;
    /* typeEncoding=@32@0:8^{_Plcrash__CrashReport__Signal={ProtobufCMessage=^{ProtobufCMessageDescriptor}I^{ProtobufCMessageUnknownField}}**Q^{_Plcrash__CrashReport__Signal__MachException}}16^@24 */
    	extractSignalInfo_error(...args: any[]): any;
    /* typeEncoding=@32@0:8^{_Plcrash__CrashReport__Thread__StackFrame={ProtobufCMessage=^{ProtobufCMessageDescriptor}I^{ProtobufCMessageUnknownField}}Q^{_Plcrash__CrashReport__Symbol}}16^@24 */
    	extractStackFrameInfo_error(...args: any[]): any;
    /* typeEncoding=@32@0:8^{_Plcrash__CrashReport__Symbol={ProtobufCMessage=^{ProtobufCMessageDescriptor}I^{ProtobufCMessageUnknownField}}*QiQ}16^@24 */
    	extractSymbolInfo_error(...args: any[]): any;
    /* typeEncoding=@40@0:8^{_Plcrash__CrashReport__SystemInfo={ProtobufCMessage=^{ProtobufCMessageDescriptor}I^{ProtobufCMessageUnknownField}}ii*iq*}16@24^@32 */
    	extractSystemInfo_processorInfo_error(...args: any[]): any;
    /* typeEncoding=@32@0:8^{_Plcrash__CrashReport={ProtobufCMessage=^{ProtobufCMessageDescriptor}I^{ProtobufCMessageUnknownField}}^{_Plcrash__CrashReport__SystemInfo}^{_Plcrash__CrashReport__ApplicationInfo}Q^^{_Plcrash__CrashReport__Thread}Q^^{_Plcrash__CrashReport__BinaryImage}^{_Plcrash__CrashReport__Exception}^{_Plcrash__CrashReport__Signal}^{_Plcrash__CrashReport__ProcessInfo}^{_Plcrash__CrashReport__MachineInfo}^{_Plcrash__CrashReport__ReportInfo}}16^@24 */
    	extractThreadInfo_error(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasExceptionInfo(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasMachineInfo(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasProcessInfo(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    	imageForAddress(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	images(...args: any[]): any;
    /* typeEncoding=@32@0:8@16^@24 */
    	initWithData_error(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	machExceptionInfo(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	machineInfo(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	processInfo(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	signalInfo(...args: any[]): any;
    /* typeEncoding=@28@0:8i16^@20 */
    	synthesizeProcessorInfoFromArchitecture_error(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	systemInfo(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	threads(...args: any[]): any;
    /* typeEncoding=^{__CFUUID=}16@0:8 */
    	uuidRef(...args: any[]): any;
  }
}

declare const MSPLCrashReport: sketchInternal.MSPLCrashReport;

