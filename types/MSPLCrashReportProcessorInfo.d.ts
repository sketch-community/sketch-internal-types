// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPLCrashReportProcessorInfo extends NSObject {
    /* typeEncoding=Q, ivar=_subtype, attributes=(assign,nonatomic,readonly) */
    	subtype(): number;
    /* typeEncoding=Q, ivar=_type, attributes=(assign,nonatomic,readonly) */
    	type(): number;
    /* typeEncoding=i, ivar=_typeEncoding, attributes=(assign,nonatomic,readonly) */
    	typeEncoding(): number;
    /* typeEncoding=@36@0:8i16Q20Q28 */
    	initWithTypeEncoding_type_subtype(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	subtype(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	type(...args: any[]): any;
    /* typeEncoding=i16@0:8 */
    	typeEncoding(...args: any[]): any;
  }
}

declare const MSPLCrashReportProcessorInfo: sketchInternal.MSPLCrashReportProcessorInfo;

