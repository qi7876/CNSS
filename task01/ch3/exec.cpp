#include <stdio.h>
#include <unistd.h>

int main()
{
    const char* args[] = { "ls", "-l", NULL };
    execvp("ls", const_cast<char* const*>(args));

    // If execvp returns, it means an error occurred
    perror("execvp failed");
    return 1;
}
