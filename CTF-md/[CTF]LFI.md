# [CTF]YulinSec「BASIC」LFI

## Related functions in PHP

1. [include()](http://www.php.net/manual/en/function.include.php)
2. [include_once()](http://php.net/manual/en/function.include-once.php)
3. [require()](http://php.net/manual/en/function.require.php)
4. [require_once()](http://php.net/manual/en/function.require-once.php)

If there is an error during accessing the file, `include()` will just rasie `Warning` and the following will continue to be executed, but `require()` will raise the `Fatal error` and exit the program.

`include_once()` and `require_once()` are similar to `include()` and `require_once()`, but they will not process the same file twice.

These four functions will evaluate files regardless of their suffix. All files will be parsed into PHP files.