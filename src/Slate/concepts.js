// Transforms



// - Node options
// - Static methods
// 	- Node transforms
// 		- insertFragment(editor: Editor, fragment: Node[], options?)
// 		- insertNodes(editor: Editor, nodes: Node | Node[], options?)
// 		- removeNodes(editor: Editor, options?)
// 		- mergeNodes(editor: Editor, options?)
// 		- splitNodes(editor: Editor, options?)
// 		- wrapNodes(editor: Editor, element: Element, options?)
// 		- unwrapNodes(editor: Editor, options?)
// 		- setNodes(editor: Editor, props: Partial<Node>, options?)
// 		- unsetNodes(editor: Editor, props: string | string[], options?)
// 		- liftNodes(editor: Editor, options?)
// 		- moveNodes(editor: Editor, options)
// 	- Selection transforms
// 		- collapse(editor: Editor, options?)
// 		- select(editor: Editor, target: Location)
// 		- deselect(editor: Editor)
// 		- move(editor: Editor, options?)
// 		- setPoint(editor: Editor, props: Partial<Point>, options?)
// 		- setSelection(editor: Editor, props: Partial<Range>)
// 	- Text transforms
// 		- delete(editor: Editor, options?)
// 		- insertText(editor: Editor, text: string, options?)
// 	- Editor transforms
// 		- transform(editor: Editor, transform: Transform)