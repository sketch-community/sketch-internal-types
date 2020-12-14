// Generated with Sketch 70.2

declare namespace sketchInternal {
  interface MSLineEndpointInspectorItem extends MSTwoTextFieldInspectorItem {
    /* typeEncoding=@"MSCoordinateInspectorValueAdaptor", ivar=_xAdaptor, attributes=(retain,nonatomic) */
    	xAdaptor(): MSCoordinateInspectorValueAdaptor;
    /* typeEncoding=@"MSCoordinateInspectorValueAdaptor", ivar=_yAdaptor, attributes=(retain,nonatomic) */
    	yAdaptor(): MSCoordinateInspectorValueAdaptor;
    /* typeEncoding=v16@0:8 */
    	_cxx_destruct(): void;
    /* typeEncoding=@56@0:8@16@24@32@40@48 */
    	initWithTitle_field1Label_field2Label_xPath_yPath(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	refreshIfNecessary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setXAdaptor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    	setYAdaptor(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    	viewDidLoad(): void;
    /* typeEncoding=@16@0:8 */
    	xAdaptor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    	yAdaptor(...args: any[]): any;
  }
}

declare const MSLineEndpointInspectorItem: sketchInternal.MSLineEndpointInspectorItem;

