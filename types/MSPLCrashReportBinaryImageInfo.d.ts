// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSPLCrashReportBinaryImageInfo extends NSObject {
    /* typeEncoding=@"MSPLCrashReportProcessorInfo", ivar=_processorInfo, attributes=(assign,nonatomic,readonly) */
    	codeType(): MSPLCrashReportProcessorInfo;
    /* typeEncoding=c, ivar=_hasImageUUID, attributes=(assign,nonatomic,readonly) */
    	hasImageUUID(): boolean;
    /* typeEncoding=Q, ivar=_baseAddress, attributes=(assign,nonatomic,readonly) */
    	imageBaseAddress(): number;
    /* typeEncoding=@"NSString", ivar=_imageName, attributes=(assign,nonatomic,readonly) */
    	imageName(): cocoascript.NSString;
    /* typeEncoding=Q, ivar=_imageSize, attributes=(assign,nonatomic,readonly) */
    	imageSize(): number;
    /* typeEncoding=@"NSString", ivar=_imageUUID, attributes=(assign,nonatomic,readonly) */
    	imageUUID(): cocoascript.NSString;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	codeType(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	hasImageUUID(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	imageBaseAddress(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageName(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    	imageSize(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	imageUUID(...args: any[]): any;
    /* typeEncoding=@56@0:8@16Q24Q32@40@48 */
    	initWithCodeType_baseAddress_size_name_uuid(...args: any[]): any;
  }
}

declare const MSPLCrashReportBinaryImageInfo: sketchInternal.MSPLCrashReportBinaryImageInfo;

