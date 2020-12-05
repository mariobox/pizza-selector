# Pizza Selector

JavaScript program to choose only the pizzas with the ingredientes you want.

Select the ingredients you don't want from a list of options and hit the submit button. The program will only show you pizzas with ingredients you want.

The script uses a plain vanilla XMLHttpRequest to bring the pizza information from a JSON file. They iterates over all pizzas and all ingredients in a pizza setting the property "wanted" to false if the pizza contains any ingrediente selected in the not-wanted list.

Finally, the script displays only the pizzas containing ingredients you want.