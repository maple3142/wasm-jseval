build:
	emcc -std=c99 -o eval.js eval.c ../duktape/src/duktape.c -lm -Os -s WASM=1 -s SINGLE_FILE=1 -s MODULARIZE=1 -s EXPORTED_FUNCTIONS='["_eval"]' -s EXTRA_EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]'
