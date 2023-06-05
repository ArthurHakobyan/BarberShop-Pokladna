# Barber Shop Cashier ( Pokladna )

### Barber Selection: :barber:

- Implement a feature where users can choose a barber.

### Service Selection: :scissors:

- Once the user has chosen a barber, display a list of services provided by that barber.
- Implement a feature where users can select a service from the list.
- Upon selecting a service, store the selected service's information (such as price data) in the state or a global variable.

### Payment Method Selection: :credit_card:

- After selecting a service, provide the user with a choice of payment methods (e.g., cash or card).
- Implement a feature where users can select their preferred payment method.
- Upon selecting a payment method, store the selected method's information in the state or a global variable.

### Adding Price to Table: :page_facing_up:

- Set up a table with appropriate table heads (e.g., "Cash" and "Card").
- When the user completes the payment method selection, retrieve the stored barber, service, and payment method information from the state or global variables.
- Determine the corresponding table head (e.g., if the payment method is "cash," add the price under the "Cash" table head).
- Append a new row to the table with the selected barber's name, the chosen service's name, and the corresponding price under the appropriate table head.
