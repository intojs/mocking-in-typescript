It makes sense to do test-driven development because it makes you think about what code does instead of how it does it.

At my current workplace, I am developing an online store in Angular, an application which is very customer facing.

Even if I'm not at the TDD level yet, I try to get high test coverage for my code, avoiding late-night calls about a bug in production and possibly ruining the sleep of my little girl.

Being an online store, I'm working allot with products and prices. Here is a piece of made up code, which I have to test on a daily basis.

It filters products by name and adds prices to a product.

These are very stripped out versions of the Product and Price interfaces. In reality, the backend API returns objects with over 25 properties.

I have implemented the tests with Jest, Mocha and of course TypeScript.

Wohhhh, over 60 line of test code for 14 lines of actual implementation! 

This hurts my pretty little soul!

Here comes the mocking.
