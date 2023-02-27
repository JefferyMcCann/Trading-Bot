#include <stdio.h> 
#include <math.h> 

	double current; // current price 

	double average; // this will be for the current average price

	double volitilityL; // average low point per month 

	double volitilityH; // average high point per month

	double balence;   

	double stockCount; 

	double priceList;

	double divNum; 

	double amountNum;

	double valueDivP = 100; // for division math 

int sizeableArrs() {
	
	int a; 

	int b; 

	printf("Enter number of stocks : ");

	scanf("%d", &a); 

	int num[a]; 

	int Num[b];

	int i; 

	int c; 

	int d;

	int e;

	int volL[c]; 

	int volH;

	printf("Enter numbers for price array : \n");

	for(i = 0; i < a; i++) {
		printf("Enter number %d : ", i);
		scanf("%d", &num[i]); 
		Num[b] = num[i]; 
	}

	for(i = 0; i < a; i++) {
		if(i < a) {
			printf("%d\n", num[i]); 
			priceList += num[i];
		}
	}

	amountNum = a + 1; 

	for(i = 0; i < a; i++) {
		if(num[i] < average) {
			num[i] = volL[c];
			c++;
			volitilityL += volL[c] / valueDivP; 
		}
	}


}

int math(){  

	double valuePercentage; 

	double buyCount = balence / current;

	if(current > average) {
		valuePercentage = current / valueDivP * average; 
			if(valuePercentage > volitilityH) {
				printf("sell\n"); 
				printf("the sell count is ");
				printf("%lf\n", stockCount); 
				printf("netting you $");
				printf("%lf", stockCount * current); 
			}
	}  
	if(current < average) {
		valuePercentage = current / valueDivP * average; 
			if(valuePercentage < volitilityL) {
				if(current < balence) {
					printf("buy\n");
					printf("The buycount is ");
					printf("%lf\n", buyCount); 
					printf("the amount spent in the buy is ");
					printf("%lf\n", buyCount * current);
				}
			}
	} 
}


int main() {

		sizeableArrs(); 

		current = 40; // easily taken from any crypto api

		printf("priceList = %lf \n", priceList + current); 

		printf("amountNum = %lf \n", amountNum); 

		printf("volitilityL is : %lf \n", volitilityL);

		volitilityH = 0; // have to write my own algo 
		// figure out how to calculate the average positive %
		divNum = current + priceList; // priceList in here needs to have all the numbers in the array added

		average = divNum / amountNum; 

		printf("the average price is ");
		printf("%lf\n", average);

		balence = 150; // see if mymonero has an api 
		
		stockCount = 0; // this will auto update and work with my wallet 

		math();
}
