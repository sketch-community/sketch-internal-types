// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSErrorAttachmentLog extends MSAbstractLog {
    /* typeEncoding=@"NSString", ivar=_attachmentId, attributes=(copy,nonatomic) */
    	attachmentId(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_contentType, attributes=(copy,nonatomic) */
    	contentType(): cocoascript.NSString;
    /* typeEncoding=@"NSData", ivar=_data, attributes=(copy,nonatomic) */
    	data(): cocoascript.NSData;
    /* typeEncoding=@"NSString", ivar=_errorId, attributes=(copy,nonatomic) */
    	errorId(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_filename, attributes=(copy,nonatomic) */
    	filename(): cocoascript.NSString;
    /* typeEncoding=@40@0:8@16@24@32 */
    	attachmentWithBinary_filename_contentType(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	attachmentWithText_filename(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	attachmentId(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	contentType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	data(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithCoder(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	errorId(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	filename(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    	initWithFilename_attachmentBinary_contentType(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithFilename_attachmentText(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqual(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isValid(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	serializeToDictionary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setAttachmentId(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setContentType(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setErrorId(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setFilename(...args: any[]): any;
  }
}

declare const MSErrorAttachmentLog: sketchInternal.MSErrorAttachmentLog;

