# C Programming Quiz

<object data="/pdf/quiz.pdf" type="application/pdf" width="700px" height="700px">
    <embed src="/pdf/quiz.pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="/pdf/quiz.pdf">Download PDF</a>.</p>
    </embed>
</object>

## Answers

### Problem 1
```c
p        = 0x7fcb6ca200
data     = 0x7fcb6ca200
&data[0] = 0x7fcb6ca200
&data[1] = 0x7fcb6ca201
&data[2] = 0x7fcb6ca202
data[0]  = A
data[1]  = B
data[2]  = C
data[2]  = C
data     = ABC
sizeof(data) = 4 bytes
strlen(data) = 3 bytes
```

### Problem 2
```c
void reverse_array( int *array, int num_elements ) {
    int i, j, temp;
    for (i = 0, j = num_elements - 1; i < j; i++, j--) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
```

### Problem 3
```c
int count_zeros( const char *str ) {
    int count = 0;
    while (*str != '\0') {
        if (*str == '0') {
            count++;
        }
        str++;
    }
    return count;
}
```
