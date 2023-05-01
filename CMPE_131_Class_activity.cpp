// CMPE 131 Class activity.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <string>
using namespace std;

int main() 
{
    string text;
    int count = 0;
    while (count <= 5)
    {
        cout << "Enter a text string: ";
        getline(cin, text);
        if (text.find("good") != string::npos ||
            text.find("great") != string::npos ||
            text.find("awesome") != string::npos)
        {
            cout << "The sentiment of the text is Positive." << endl;
            count++;
        }
        else if (text.find("bad") != string::npos ||
            text.find("terrible") != string::npos ||
            text.find("worst") != string::npos)
        {
            cout << "The sentiment of the text is Negative." << endl;
            count++;
        }
        else {
            cout << "The sentiment of the text is Neutral." << endl;
            count++;
            //testing trigger jenkins
           
        }
    }
    return 0;
}
/*
* Give me 3 test cases for the program above
* Prompt:
Here are three test cases for the C++ program:

Positive sentiment test case:
Input: The weather is good today.

Expected output: The sentiment of the text is Positive.

Negative sentiment test case:
Input: I had the worst day ever.

Expected output: The sentiment of the text is Negative.

Neutral sentiment test case:
Input: I went to the park.

Expected output: The sentiment of the text is Neutral.
*/
