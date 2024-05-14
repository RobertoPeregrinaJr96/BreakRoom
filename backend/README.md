# Backend Documentation

## Postgres Database

### tables

    - Users
    - Orders
    - OrderItems
    - Items
    - InstructionModifiers
    - Modifiers
    - Analytics
    - Reviews

### Table Columns

    - Users
        - firstName: The first name of the user.
        - lastName: The last name of the user.
        - phoneNumber: The phone number of the user.
        - username: The username chosen by the user.
        - email:The email address of the user.
        - password: The password of the user.
        - profileImageUrl:The URL of the user's profile image.

    - Orders
        - userId: The ID of the user who placed the order.
        - total_cost: The total cost of the order.
        - status: The current status of the order.
        - pointsEarned: The points earned by the user for this order.

    - OrderItems
        - itemId: The ID of the item.
        - orderId: The ID of the order to which the items belong.
        - customInstruction: Any custom instructions for the item.
        - quantity: The quantity of the item in the cart.

    - Items
        - name: The name of the item.
        - price: The price of the item.
        - description: A brief description or details about the item, including its features, ingredients, or any other relevant information.
        - defaultModifiers:
        - itemImg: The image of the item.
        - waitTime: The estimated wait time for the item.

    - InstructionModifier
        - orderItemId: The ID of the cart.
        - modifierId: The ID of the additional.

    - Modifier
        - name: The name of the Modifier item.
        - price: The price of the Modifier item.

    - Analytics
        - userId: The ID of the user.
        - totalOrders: The total number of orders placed by the user.
        - totalSpent: The total amount spent by the user.
        - avgOrderValue: The average value of the user's orders.
        - orderFrequency: The frequency of the user's orders.
        - lastPurchase: The timestamp of the user's last purchase.

### Database Breakdown

## Users

    The "Users" table is designed to store information about individual users within a  system. Each user is uniquely identified by their "id" which serves as the primary key for the table, ensuring each record is distinct and identifiable.

    The table includes fields for the user's first name ("firstName") and last name ("lastName"), allowing for the storage of their personal names. Additionally, there's a field for the user's phone number ("phoneNumber"), enabling contact or communication.

    For authentication purposes, the table includes a "username" field, which must be unique across all records. This serves as the user's identifier when logging into the system. The "password" field stores a hashed version of the user's password, enhancing security by ensuring that plaintext passwords are not stored directly in the database.

    Moreover, the table features an "email" field to store the user's email address, facilitating communication and notifications. The "profileImageUrl" field allows storage of a link to the user's profile image, enhancing the visual representation of user accounts.

    Overall, the "Users" table provides a structured way to manage user data, facilitating user management, authentication, and interaction within the system.

## Orders

    The "Orders" table serves as a repository for tracking orders placed within a system. Each order is uniquely identified by its "id," which serves as the primary key for the table, ensuring each record is distinct and identifiable.

    The table contains fields to capture essential order information. The "user_id" field establishes a relationship with the "Users" table, linking each order to the respective user who placed it. This linkage enables efficient tracking of orders associated with specific users.

    The "total_cost" field stores the monetary value of each order, providing insights into the financial aspects of transactions. Additionally, the "status" field records the current state of the order, such as pending, processed, or delivered, facilitating order management and fulfillment.

    Furthermore, the "points_earned" field allows for the accumulation of loyalty or reward points associated with the order, promoting customer engagement and retention.

    Timestamp fields "created_at" and "updated_at" automatically capture the date and time when the order was created and last updated, respectively, providing a timeline of order activity.

    Overall, the "Orders" table provides a structured framework for managing order-related data, enabling efficient tracking, analysis, and processing of orders within the system.

## OrderItems

    The "CartItems" table is designed to store information about items added to a shopping cart within a system. Each item is uniquely identified by its "id," serving as the primary key for the table, ensuring each record is distinct and identifiable.

    The table includes fields for the "cart_id" and "order_id," facilitating the association of cart items with specific shopping carts and orders. This allows for efficient tracking and management of items throughout the shopping process.

    The "quantity" field indicates the number of units of a particular item added to the cart, providing insights into the quantity of items selected by users.

    For each item, the "item_id" field links to the corresponding item in the system, ensuring accurate representation and retrieval of item details.

    Additionally, the "custom_instruction" field allows users to include any specific instructions or customizations associated with the item, providing flexibility for personalized orders.

    Timestamp fields for "created_at" and "updated_at" capture the time of creation and last update respectively, offering insights into the lifecycle of cart items.

    Foreign key constraints enforce referential integrity, ensuring that cart items are associated with valid shopping carts, orders, and items within the system.

    Overall, the "CartItems" table facilitates efficient management and tracking of items within shopping carts, enhancing the user experience and administrative processes within the system.

## Items

    The "Items" table serves as a central repository for managing various items within the system, streamlining organization and retrieval of essential item details.

    Each item in the table is uniquely identified by its "id," ensuring a distinct and identifiable entry. The "name" field stores the descriptive title of the item, facilitating easy identification for users. The "price" field holds the numeric value representing the item's cost, aiding in financial transactions and calculations.

    For items requiring processing or preparation time, the "waitTime" field stores an integer representing the estimated wait time, allowing users to anticipate readiness. The "itemImg" field stores the file path or URL to the associated item image, enabling visual representation and identification.

    Timestamp fields, "created_at" and "updated_at," automatically record creation and modification times, offering insights into each item's lifecycle.

    In essence, the "Items" table provides a structured framework for managing item data, enhancing inventory management, pricing, and presentation within the system.

## InstructionAdditions

    The "InstructionAdditions" table serves as a junction table designed to manage the relationship between cart items and additional instructions. Each record in this table is uniquely identified by its "id," which serves as the primary key.

    The table includes fields for "cart_item_id" and "addition_id," which are foreign keys referencing the "id" columns in the "CartItems" and "Additions" tables, respectively. These fields establish the relationship between cart items and additional instructions, allowing for the association of specific instructions with particular items in a user's shopping cart.

    By utilizing foreign key constraints, the table ensures referential integrity, maintaining the integrity of the relationships between cart items and additional instructions. This structure facilitates efficient querying and management of instructions associated with cart items within the system.

    Overall, the "InstructionAdditions" table provides a structured approach to managing the relationship between cart items and additional instructions, enhancing the functionality and organization of the system's shopping cart feature.

## Additions

    The "Additions" table is designed to store information about various additions or extras within a system. Each addition is uniquely identified by its "id," which serves as the primary key for the table, ensuring each record is distinct and identifiable.

    The table includes fields for the addition's name ("name") and price ("price"), allowing for the storage of both the name or description of the addition and its associated cost. The "name" field accommodates textual information about the addition, while the "price" field stores numerical data representing the monetary value.

    Overall, the "Additions" table provides a structured way to manage and organize additional items or services within the system, facilitating pricing and inventory management, among other functionalities.

## Analytics

    The "Analytics" table is designed to capture and analyze data related to user activity and purchasing behavior within the system. Each entry in this table is uniquely identified by an "id" field, serving as the primary key.

    The "user_id" field establishes a relationship with the "Users" table, linking each record to a specific user and enabling the correlation of analytical insights with individual users.

    Various metrics are tracked, providing valuable insights into user behavior. These include "total_orders," which records the total number of orders made by each user, and "total_spent," which calculates the cumulative amount spent by each user.

    The "avg_order_value" field computes the average value of orders placed by each user, offering insights into purchasing habits and preferences. Similarly, "order_frequency" measures how often users make purchases, aiding in understanding their engagement and loyalty.

    The "last_purchase" field captures the timestamp of the user's most recent purchase, facilitating analysis of recency and frequency of transactions.

    Overall, the "Analytics" table serves as a crucial tool for tracking and analyzing user activity, enabling data-driven decision-making and personalized user experiences within the system.
