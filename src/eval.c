#include "../duktape/src/duktape.h"

const char* eval(char* js_code) {
	duk_context* ctx = duk_create_heap_default();
	duk_push_string(ctx, js_code);
	duk_int_t rc = duk_peval(ctx);
	if (rc != 0) {
		duk_safe_to_stacktrace(ctx, -1);
		return duk_get_string(ctx, -1);
	}
	return duk_json_encode(ctx, -1);
}
