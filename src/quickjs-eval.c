#include <string.h>
#include "../quickjs/quickjs.h"

const char* eval(const char* str) {
	JSRuntime* runtime = JS_NewRuntime();
	JSContext* ctx = JS_NewContext(runtime);
	JSValue result =
	    JS_Eval(ctx, str, strlen(str), "<evalScript>", JS_EVAL_TYPE_GLOBAL);
	if (JS_IsException(result)) {
		JSValue realException = JS_GetException(ctx);
		return JS_ToCString(ctx, realException);
	}
	JSValue json = JS_JSONStringify(ctx, result, JS_UNDEFINED, JS_UNDEFINED);
	JS_FreeValue(ctx, result);
	return JS_ToCString(ctx, json);
}
