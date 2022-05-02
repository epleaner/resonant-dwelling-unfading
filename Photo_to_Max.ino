const int cellCount = 12;
void setup() {
  Serial.begin(9600);
}

void loop() {
  int cells[cellCount] = {A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15};
  int highest = 0;
  int highestIndex = -1;
  
  for (int i = 0; i < cellCount; i++) {
    const int sensorValue = analogRead(cells[i]);
    Serial.print(i);
    Serial.print(": ");
    Serial.println(sensorValue);
    
    if(sensorValue > highest) {
      highest = sensorValue;
      highestIndex = i + 4;
    }
  }
//  Serial.print("Maybe shining on: ");
//  Serial.println(highestIndex);
  
  Serial.println("====================");
  delay(10);
}
