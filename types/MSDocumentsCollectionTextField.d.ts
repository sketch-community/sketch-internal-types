// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSDocumentsCollectionTextField extends NSTextField {
    /* typeEncoding=c, ivar=allowsEditingMode, attributes=(assign,nonatomic) */
    	allowsEditingMode(): boolean;
    /* typeEncoding={CGSize=dd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
    	intrinsicContentSize(): CGSize;
    /* typeEncoding=c, ivar=isSelected, attributes=(assign,nonatomic) */
    	isSelected(): boolean;
    /* typeEncoding=#16@0:8 */
    	cellClass(...args: any[]): any;
    /* typeEncoding=v24@0:8#16 */
    	setCellClass(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	allowsEditingMode(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	endEditing(): void;
    /* typeEncoding=@24@0:8@16 */
    	initWithCoder(...args: any[]): any;
    /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
    	initWithFrame(...args: any[]): any;
    /* typeEncoding={CGSize=dd}16@0:8 */
    	intrinsicContentSize(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    	isSelected(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	mouseUp(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setAllowsEditingMode(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    	setIsSelected(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	startEditing(): void;
    /* typeEncoding=v24@0:8@16 */
    	textDidEndEditing(...args: any[]): any;
  }
}

declare const MSDocumentsCollectionTextField: sketchInternal.MSDocumentsCollectionTextField;

