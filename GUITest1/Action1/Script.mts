 @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME")_;_script infofile_;_ZIP::ssf28.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("SpeakersCategory").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("SpeakersCategory")_;_script infofile_;_ZIP::ssf29.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("HP Roar Plus Wireless").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("HP Roar Plus Wireless")_;_script infofile_;_ZIP::ssf30.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("quantity").Set DataTable("quantity", dtGlobalSheet) @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("WebElement")_;_script infofile_;_ZIP::ssf31.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save_to_cart").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Cart_num").Highlight
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("About AOS Versions Management").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("About AOS Versions Management")_;_script infofile_;_ZIP::ssf41.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("check_out_btn").Check CheckPoint("check_out_btn") @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("check out btn")_;_script infofile_;_ZIP::ssf42.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Remove_cart_btn").Click
Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME")_;_script infofile_;_ZIP::ssf34.xml_;_
'Browser("Advantage Shopping").Close
'Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link").WaitProperty "innerhtml", OUR PRODUCTS, 9990

'Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link").WaitProperty "innerhtml", OUR PRODUCTS, 10000
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("menuCart").Output CheckPoint("menuCart")

Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link").WaitProperty "innerhtml", "OUR PRODUCTS", 9000
Zoo=1
