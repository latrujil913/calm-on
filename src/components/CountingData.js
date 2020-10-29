import apple from "../../assets/counting/apple.png";
import banana from "../../assets/counting/banana.png";
import kiwi from "../../assets/counting/kiwi.png";
import mango from "../../assets/counting/mango.png";
import strawberry from "../../assets/counting/strawberry.png";
import watermelon from "../../assets/counting/watermelon.png";
import pie from "../../assets/counting/pie.png";
import basket from "../../assets/counting/basket.png";
const Recipes = {
    start: {
      title: "ApplePie",
      singleName: "apple", 
      groupName: "apples",
      dialog: [
        "Let’s make an apple pie together! We’re going to need 7 apples. Can you help me count them?",
        "All done! With your help, we made a delicious apple pie!",
        "Do you want to try another recipe?",
      ],
      items: [
        {
          id: 1,
          name: "apple",
          img: apple,
          xpos: {
            top: 30,
            left: 40,
          },
        },
        {
          id: 2,
          name: "apple",
          img: apple,
          xpos: {
            top: 60,
            left: 10,
          },
        },
        {
          id: 3,
          name: "apple",
          img: apple,
          xpos: {
            top: 60,
            left: 60,
          },
        },
        {
          id: 4,
          name: "apple",
          img: apple,
          xpos: {
            top: 100,
            left: 60,
          },
        },
        {
          id: 5,
          name: "apple",
          img: apple,
          xpos: {
            top: 60,
            left: 100,
          },
        },
        {
          id: 6,
          name: "apple",
          img: apple,
          xpos: {
            top: 120,
            left: 80,
          },
        },
        {
          id: 7,
          name: "apple",
          img: apple,
          xpos: {
            top: 80,
            left: 120,
          },
        },
      ],
      groupImg: pie,
      next: {
        title: "FruitBasket",
        singleName: null,
        groupName: "Fruit",
        dialog: [
          "Let’s make a fruit bowl! Can you count and name the fruits for this recipe?",
          "Excellent work! Thank you for your help! We just made a healthy and colorful fruit bowl!",
          "Let’s count more fruit together the next time you feel worried.",
        ],
        items: [
          {
            id: 8,
            name: "apple",
            img: apple,
            xpos: {
              top: 10,
              left: 10,
            },
          },
          {
            id: 9,
            name: "banana",
            img: banana,
            xpos: {
              top: 60,
              left: 10,
            },
          },
          {
            id: 10,
            name: "kiwi",
            img: kiwi,
            xpos: {
              top: 60,
              left: 60,
            },
          },
          {
            id: 11,
            name: "mango",
            img: mango,
            xpos: {
              top: 90,
              left: 90,
            },
          },
          {
            id: 12,
            name: "strawberry",
            img: strawberry,
            xpos: {
              top: 60,
              left: 150,
            },
          },
          {
            id: 13,
            name: "watermelon",
            img: watermelon,
            xpos: {
              top: 90,
              left: 160,
            },
          },
        ],
        groupImg: basket,
        next: null,
      },
    },
  };

  export default Recipes;