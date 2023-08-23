# Topics to learn C
::collapse
    :::collapse-item
    ## Getting started with C Language
    #content
    - The history of C.
    - The evolution of the C programming standards.
    - The relationship of C to C++.
    - Some recommended / free books for learning C.
    - Source Code Compilation, Cross-Compilation Process.
    - C/C++ Toolchains and Open Source IDEs.
    :::
    :::collapse-item
    ## Code Comments
    #content
    - Single-line comments: // ....
    - Multple-line comments: /* ... */
    :::
    
## Keywords or reserved words in C

    :::collapse-item
    ## Data Types
    #content
    - Basic data types
        - 'int' represents integers (whole numbers) with varying sizes depending on the platform.
        - 'char' represents single characters.
        - 'float' represents single-precision floating-point numbers.
        - 'double' represents double-precision floating-point numbers.
        - 'bool' (via #include <stdbool.h>) represents boolean values ('true' or 'false').
        - '_Bool' (C99's boolean type)
    - Derived Data Types
        - Arrays, structures, unions
    - Enumerated data types (the 'enum' keyword)
    - 'void' data type
        - a special data type that indicates the absence of a specific type.
        - used to represent a lack of value or to indicate that a function does not return any value.
    :::
    :::collapse-item
    ## Type Modifiers for Numbers
    #content
    - integers: such as 'signed', 'unsigned', 'short', 'long', 'long long'
    - floating-points: 'long' (for 'float' and 'double')
    :::
    :::collapse-item
    ## Type Conversions
    #content
    - Implicit: short to int to long, float to double.
    - Explicit: (<type>)(expression) for type-casting.
    :::
    :::collapse-item
    ## Literals (constant values of specific data types)
    #content
    - Primitive vs. Compound Literals
    - Integer Literal: 42, -100, 0, 123456
    - Octal Literal: 0644
    - Hexadecimal Literal: 0x1A, 0xFF, 0xABC
    - Floating-Point Literal: 3.14, -0.005, 1.0e-5
    - Character Literal: 'A', '5', '!', '\n'
    - Boolean Literal (C99 and later): true, false
    - String Literal: "Hello, world!", "" (an empty string)
    :::
    :::collapse-item
    ## Identifiers and Variables
    #content
    - Identifier Naming
    - Variable Definition and Initialization
    - Variable Scope
    - Constants (with the const keyword)
    - Declaration vs. Definition
        - A declaration introduces an identifier to the compiler and informs it about
        the data type and name of the identifier.
        - A definition creates the actual instance of an identifier in memory.
        It allocates memory for variables and provides the implementation for functions.
    :::
    :::collapse-item
    ## Operators
    #content
    - Arithmetic Operators: +, -, *, /, %, ++, --
    - Relational Operators: ==, !=, >, <, >=, <=
    - Logical Operators: &&, ||, !
    - Bitwise Operators: &, |, ^, ~, <<, >>
    - Assignment Operators: =, +=, -=, *=, /=, %=, &=, |=, ^=, >>=, <<=
    - Conditional Operator: () ? () : ()
    - Miscellaneous Operators:
        - , (comma), & (address-of operator)
        - sizeof(...) used to determine the size in bytes of a data type or variable.
        - . (dot or memory-access operator)
        - -> (memory-access operator),
        - [...] (square bracket or array indexing operator)
    - Side Effects of the ++ and -- Operators for Value Modification
        - Pre-increment and Pre-decrement
        - Post-increment and Post-decrement
        - Order of Evaluation
    - Short-circuit logical operators
        - The && (logical AND) operator: (expr1 && expr2)
        - The || (logical OR) operator: (expr1 || expr2)
        - These short-circuit operators halt evaluation once the final outcome is determined by the preceding sub-expressions.
    :::
    :::collapse-item
    ## Strings
    #content
    - A string is a sequence of characters stored in an array that represents text.
    - terminated by a null character ('\0').
    - accessible by a (char *) pointer.
    :::
    :::collapse-item
    ## Array: 1D and 2D
    #content
    - a collection of elements of the same data type, stored in contiguous memory locations.
    :::
    :::collapse-item
    ## Structs (short for structures)
    #content
    - a composite data type that allows you to group together variables of different data types under a single name.
    :::
    :::collapse-item
    ## Union
    #content
    - a user-defined data type that all members of a union share the same memory location.
    :::
    :::collapse-item
    ## Bit-field
    #content
    - a bit field is used to specify the number of bits to be used to store a particular data member within a struct.
    :::
    :::collapse-item
    ## Enumeration (enum)
    #content
    - a user-defined data type that consists of a set of named integer constants.
    :::
    :::collapse-item
    ## Typedef for user-defined types
    #content
    - used to create an alias or a new name for an existing data type.
    - provides a way to define custom names for data types.
    :::
    :::collapse-item
    ## Statements such as
    #content
    - Iteration Statements/Loops: for, while, do-while
    - Selection Statements: if, if-else, switch-case
    - Assignment Statements
    :::
    :::collapse-item
    ## Functions
    #content
    - Variable arguments of a function
    :::
    :::collapse-item
    ## Pointers
    #content
    - Pointer Arithmetics
    - Function Pointers and Parameters
    :::
    :::collapse-item
    ## C Preprocessor Directives and Macros
    #content
    - #include <...>: include header files.
    - #define
    - #if, #else, #ifdef, #ifndef, #endif, #undef
    - #error
    :::
    :::collapse-item
    ## Command-line arguments to the main() function
    #content
    - provided by the user when they run the program and can be used to pass information or parameters to the program.
    - int main(int argc, char *argv[]) { ... }
    :::
    :::collapse-item
    ## The C Standard I/O library
    #content
    - printf() and scanf() functions.
    - fprintf() functions and the output streams ('stdout' and 'stderr').
    - Formatted strings for Input/Output
    :::
    :::collapse-item
    ## Files and I/O streams
    #content
    - <stdio.h> (Standard I/O Library) provides functions for basic input and output operations.
    - Examples of functions in this library:
        - fopen(), fclose()
        - fprintf(), fscanf()
        - fputc(), fgetc(), fgets(), fputs()
        - fwrite(), fread(), feof(), fseek(), rewind()
    - Other standard C libraries:
        - <stdlib.h> provides functions for various file operations.
        - <unistd.h> (Unix Standard Library) provides functions for low-level file operations.
        - <sys/types.h> and <sys/stat.h> provide data types and functions for working with file status and attributes.
        - <fcntl.h> provides functions for managing file descriptors and controlling file attributes.
    :::
    :::collapse-item
    ## Pseudo-Random Number Generation
    #content
    - srand(): used to seed the random number generator.
    - rand(): returns an integer between 0 and RAND_MAX.
    - Both functions are declared in <stdlib.h>
    :::
    :::collapse-item
    ## The C Standard Math library
    #content
    - The <math.h> header file must be included in source code in order to use the C Standard Math library.
    - The -lm flag must be specified for program linking (when using GCC C compiler).
    :::
    :::collapse-item
    ## POSIX Threads and Multithreading
    #content
    - often referred to as pthreads.
    - a standardized threading library for creating and managing threads in a multi-threaded program.
    - used to create multiple threads within a single process, enabling concurrent execution of tasks.
    :::
    :::collapse-item
    ## Interprocess Communication (IPC)
    #content
    - provides the mechanisms and techniques used for communication and data sharing between different threads or processes.
    - common IPC mechanisms:
        - Pipes and Named Pipes (FIFOs)
        - Sockets
        - Signals
        - Message Queues
        - Semaphores, Mutexes, and Condition Variables
        - Shared Memory
        - Message Passing
    :::
    :::collapse-item
    ## Assertion
    #content
    - used to ensure that certain conditions hold true during program execution.
    - The assert() macro can be used to perform assertions, defined in the <assert.h> header file.
    :::
    :::collapse-item
    ## Memory management (Heap Usage)
    #content
    - Memory management in C involves allocating and deallocating memory on the heap.
    - Heap is a region of memory used for dynamically allocated data.
    - Primary functions for memory management on the heap:
        - malloc() used to allocate a block of memory on the heap.
        - calloc() used to allocate memory for an array of elements, initializing them to zero.
        - realloc() used to resize an existing allocated memory block.
        - free() used to release memory that was previously allocated.
    :::
    :::collapse-item
    ## Common C programming idioms and developer practices
    #content
    - Use Meaningful Variable and Function Names.
    - Use consistent indentation and formatting.
    - Write Code with Comments and Documentation.
    - Avoid Global Variables.
    - Minimize the use of global variables.
    - Properly allocate and release memory.
    - Use Constants and Enumerations for improved code readability.
    - Avoid using hard-coded values directly in the code. Instead, use named constants or macros.
    - Break large functions into smaller, more manageable functions to improve readability.
    - Write code that is portable across different platforms and compilers.
    - ...
    :::
    :::collapse-item
    ## Common Pitfalls
    #content
    - Memory Leakage
    - Buffer Overflows
    - Integer Overflow and Underflow
    - Null Pointer Dereference
    - Improper Type Conversion and Casting
    - Use of Uninitialized Variables
    - ...
    :::
    :::collapse-item
    ## GUI-based Application Development (with C/C++)
    #content
    - GTK3 or GTK4 framework (for Linux)
    - Qt5 framework (Cross-platform)
    :::
::

## Additional Resources
[An Introduction to C & GUI Programming by Simon Long, 2019.](https://magpi.raspberrypi.com/books/c-gui-programming)
### Review of the Book:
> &nbsp;&nbsp;&nbsp;&nbsp;This book is a great introduction to C programming for beginners. It covers all the basics of C programming, including data types, variables, operators, functions, pointers, arrays, strings, structs, unions, enums, and more. It also covers the C Standard Library, including the C Standard I/O library, files and I/O streams, and the C Standard Math library. The book also covers some advanced topics such as multithreading, interprocess communication, memory management, and GUI-based application development with C/C++. The book is well-written and easy to follow. It is a great resource for anyone who wants to learn C programming.
