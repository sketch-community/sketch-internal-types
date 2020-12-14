// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSProtocolExtension extends NSObject {
    /* typeEncoding=@"NSString", ivar=_devMake, attributes=(copy,nonatomic) */
    	devMake(): cocoascript.NSString;
    /* typeEncoding=@"NSString", ivar=_devModel, attributes=(copy,nonatomic) */
    	devModel(): cocoascript.NSString;
    /* typeEncoding=@"NSArray", ivar=_ticketKeys, attributes=(retain,nonatomic) */
    	ticketKeys(): cocoascript.NSArray;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    	devMake(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	devModel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	encodeWithCoder(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isEqual(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isValid(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	serializeToDictionary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDevMake(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setDevModel(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setTicketKeys(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	ticketKeys(...args: any[]): any;
  }
}

declare const MSProtocolExtension: sketchInternal.MSProtocolExtension;

