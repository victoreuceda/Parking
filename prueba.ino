void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  Serial.println("");
  for(int i = 8; i < 13; i++){
    Serial.print(String(digitalRead(i))+ ",");
  }
  Serial.print(String(digitalRead(13)));
  delay(1000);
}
