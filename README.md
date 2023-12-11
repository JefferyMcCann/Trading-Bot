 Trading-Bot

This is a experimental trading bot that has not yet been added to any api's. 

current issues being addressed. 
1. figuring out a non crypto public market api and banking api.
2. delete some comments that are just my thoughts on what I *might* do in v5 
3. add a "fake trading" mode that uses real market data to test algorithims. develop my 7 other algorithms and make the current main file become one of many subfiles behind the main program which chooses between fake and real trading and each algorithim. so 14 algo files in total (one real, one fake each).
4. start an experimental file that brings data too a json file (so that it can be started and stopped while still having data to go off of) and if I figure it out integrate it into the main algorithims.
5. Add trendlines as a data factor to stop from buying during a day that has a downtrend and will not go back up to the price that the purchase is happening at (make a predictive top end and if the purchase is above that for the rest of the day cancel it even if it is within the averages and stoploss) 
