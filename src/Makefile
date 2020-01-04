duktape:
	emcc -std=c99 -o eval.js duktape-eval.c ../duktape/src/duktape.c -lm -Oz --closure 1 -s WASM=1 -s SINGLE_FILE=1 -s AGGRESSIVE_VARIABLE_ELIMINATION -s MODULARIZE=1 -s EXPORTED_FUNCTIONS='["_eval"]' -s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]'
quickjs:
	emcc -o eval.js quickjs-eval.c ../quickjs/quickjs.c ../quickjs/cutils.c ../quickjs/libregexp.c ../quickjs/libbf.c ../quickjs/libunicode.c -DCONFIG_VERSION="\"1.0.0\"" -s WASM=1 -s SINGLE_FILE -s MODULARIZE=1 -lm -Oz -s EXPORTED_FUNCTIONS='["_eval"]' -s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]' --llvm-lto 3 -s AGGRESSIVE_VARIABLE_ELIMINATION=1 --closure 1
