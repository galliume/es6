"use strict";//strict mode by default when in "module mode"

//export keyword for variables / functions to expose publicly from a specific module to others when imported
//import { module1, module2 } from "./fichier.js";
//import * from "./fichier.js";
//export { exportable as newname }
//import { importable as newname }
//export default or export { exportable as default }
//import defaultImportable, { nonDefault1 }  from "./fichier.js";

//in a web browser :
/*
*<script type="module" src="module.js"></script>
*<script type="module" async src="module.js"></script> //async -> executed as soon as module is downloaded
*
*<script type="module">
*	import { importable } from "./module.js";
*
*	doSomeThing;
*</script>
*
*	defer by default (load file asap)
*/

//let worker = new Worker("script.js", { type:"module" });