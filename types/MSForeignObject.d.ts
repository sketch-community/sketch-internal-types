// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSForeignObject extends _MSForeignObject {
    /* typeEncoding=@"MSModelObject", ivar=(null), attributes=(retain,nonatomic) */
    	localObject(): MSModelObject;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    	remoteShareID(): cocoascript.NSString;
    /* typeEncoding=@24@0:8@16 */
    	foreignObjectCollectionInDocument(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    	masterFromDocument_withID(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	remoteSharedIDFromSymbolPrivateID(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	correctInvalidGamma(): void;
    /* typeEncoding=@32@0:8@16@24 */
    	initWithOriginalObject_inLibrary(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isLocalToDocument(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    	isOutOfDateWithLibrary(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	localObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	localShareID(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	masterFromLibrary(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    	matchingForeignObjectInDocument(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	originalObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	remoteShareID(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLocalObject(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLocalShareID(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setOriginalObject(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	syncWithRemote(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	unlinkFromRemote(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	visitInDocument(...args: any[]): any;
  }
}

declare const MSForeignObject: sketchInternal.MSForeignObject;

