build:
	emcc -std=c99 -o eval.js eval.c ../duktape/src/duktape.c -lm -Oz --closure 1 -s WASM=1 -s SINGLE_FILE=1 -s AGGRESSIVE_VARIABLE_ELIMINATION -s MODULARIZE=1 -s EXPORTED_FUNCTIONS='["_eval"]' -s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]'
