import pyautogui as pg
import time

print("Starting")
time.sleep(5)

for i in range(100):
    pg.write("Hai")
    pg.press("Enter")
    