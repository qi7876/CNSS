#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>
#include <sys/time.h>
#include <unistd.h>

#define UNIT_GAP 1000000.0

void M_gettimeofday(struct timeval* tv)
{
    int result = gettimeofday(tv, NULL);

    if (result != 0) {
        perror("gettimeofday st\n");
        exit(1);
    }
    return;
}

#define ArrSize 15000
int arr1[ArrSize][ArrSize];
int arr2[ArrSize][ArrSize];
int arr3[ArrSize][ArrSize];

int main()
{
    /* Evaluate iterating pattern 1 */
    struct timeval tv_st;
    M_gettimeofday(&tv_st);

    for (int i = 0; i < ArrSize; i++) {
        for (int j = 0; j < ArrSize; j++) {
            arr1[i][j] += 1;
        }
    }

    struct timeval tv_ed;
    M_gettimeofday(&tv_ed);

    double time_gap1 = (double)(tv_ed.tv_sec - tv_st.tv_sec) + ((double)(tv_ed.tv_usec - tv_st.tv_usec) / UNIT_GAP);

    /* Evaluate iterating pattern 2 */
    M_gettimeofday(&tv_st);

    for (int i = 0; i < ArrSize; i++) {
        for (int j = 0; j < ArrSize; j++) {
            arr2[j][i] += 1;
        }
    }

    M_gettimeofday(&tv_ed);

    double time_gap2 = (double)(tv_ed.tv_sec - tv_st.tv_sec) + ((double)(tv_ed.tv_usec - tv_st.tv_usec) / UNIT_GAP);

    /* Evaluate iterating pattern 3 */
    M_gettimeofday(&tv_st);

    for (int i = 0; i < ArrSize; i++) {
        int cap = (ArrSize / 3) * 3;
        for (int j = 0; j < cap; j += 3) {
            arr3[i][j] += 1;
            arr3[i][j + 1] += 1;
            arr3[i][j + 2] += 1;
        }

        for (int j = cap; j < ArrSize; j++) {
            arr3[i][j] += 1;
        }
    }

    M_gettimeofday(&tv_ed);

    double time_gap3 = (double)(tv_ed.tv_sec - tv_st.tv_sec) + ((double)(tv_ed.tv_usec - tv_st.tv_usec) / UNIT_GAP);

    printf("time spent for time_gap1: %lf seconds\n", time_gap1);
    printf("time spent for time_gap2: %lf seconds\n", time_gap2);
    printf("time spent for time_gap3: %lf seconds\n", time_gap3);
}
