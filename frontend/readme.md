way to pass props 

1. directly providing all the data in componet as value and proerty

2. importing data from external file and provide key valu to componet to pass as props

3. using map parameter only providing parameter of map and it will hold all the object item={item}

4. using es6 spread syntax {...item}

5. using {} <- this you can pass any type of value in props

-------------------------------------------------

=> diffrence between propws and state.

props => refers to the properties being passed into a componet in order for it to work correctly, similar to how a function receives parameters: from above. A component receiving props is not allowed to modifiy those props. (they are mutable).

1. function navbar(props) {
  props.coverImage = 'something' // i am tryinng to change props value within componet it is red flag never do like that.
}

2. <Navbar  coverimage="some-image"/> it is allowed to do while passing value component to hear you can change value of th eproperty.


------------------------------------------------

state => refers to values that are managed by the component, similar to variables declared in function. 
Any time you have changing values that should be saved/displayed, you'll likely be using state.

1. Imp => state refers to values that are managed by the componet, similar to variables declared inside a function. anytime you have changing values that should be saved/displayed you will likely be using state.